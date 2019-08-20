<script>
    import {createEventDispatcher, onDestroy} from 'svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    // import VirtualList from '@sveltejs/svelte-virtual-list';
    //*Stores
    import decksStore from '../../data/decks.store';    
    //------
    //*Components
    import Button from '../../components/Button.svelte';
    import Modal from '../../components/Modal.svelte';
    import HexDotsLoading from '../../components/HexDotsLoading.svelte';
    import CSCard from '../../components/coffee-study/CSCard.svelte';
    import CSLessonItem from '../../components/coffee-study/CSLessonItem.svelte';
    import CSLessonForm from '../../components/coffee-study/CSLessonForm.svelte';
    import LessonsToolBar from './LessonsToolBar.svelte';
    export let currentDeckId;

    const dispatch = createEventDispatcher();
    let pagination = {
        interval: 30,
        init: 0,
        maxReached: false
    };
    pagination.init = pagination.interval;
    let lessons = [];
    let currentDeck = {};
    let currentDeckIndex;
    let arrfiteredLessons = [];
    let currentLesson = null;
    let input='';

    let modalState = false;
    let turnDark = false;
    // let isSpinnerOpened = true;

    const unDecksStore = decksStore.subscribe( allDecks =>{
        currentDeck = allDecks.find(dk => dk.id === currentDeckId);
        currentDeckIndex = allDecks.findIndex(dk => dk.id === currentDeckId);
        currentDeck.lessons.sort((a, b)=> a.learnCount - b.learnCount);
        lessons = currentDeck.lessons.slice(0, pagination.interval);
    });

    onDestroy(() => {
        dispatch('destroy');
        unDecksStore();
    });

    function resetInfiniteScroll(){
         pagination = {
            init: 0,
            interval: 30,
            maxReached: false
        };
    }
    function addLesson(evt){
        const newLesson = evt.detail;
        modalState = false;
        decksStore.addLesson(currentDeckIndex, currentDeck, newLesson);
        lessons = currentDeck.lessons;
    }
    function editLesson(evt){
        const {front, back} = evt.detail;
        currentLesson.front = front;
        currentLesson.back = back;
        decksStore.editLesson(currentDeck, currentLesson);
        currentLesson = null;
        lessons = currentDeck.lessons;
        modalState = false;
    }

    function deleteLesson(id){
        decksStore.deleteLesson(currentDeck, id);
        lessons = currentDeck.lessons;
    }

    function onScroll(evt){
        dispatch('turndark', evt.target.scrollTop);
        if(evt.target.scrollTop > 0 && turnDark === false) turnDark = true;
        if(evt.target.scrollTop <= 0) turnDark = false;
        infiniteScroll(evt, input ? arrfiteredLessons : currentDeck.lessons);
    }
    function filterByFront(evt){
        resetInfiniteScroll(); 
        document.getElementById('lessonsSection').scrollTop = 0;
        input = evt.target.value.toLowerCase().trim();
        arrfiteredLessons = currentDeck.lessons.filter( l => l.front.toLowerCase().includes(input));
        lessons = arrfiteredLessons.slice(0, pagination.interval);
    }

    function infiniteScroll(evt, arr){
        const fullScroll = evt.target.scrollHeight;
        const scrollPosition = evt.target.scrollTop;

        if(fullScroll === scrollPosition + evt.target.clientHeight && pagination.maxReached === false){
            pagination.init = pagination.init + pagination.interval,
            lessons = arr.slice(0, pagination.init);
            pagination.maxReached = pagination.init >= arr.length;
        }
    }
</script>
<style>
    .container{
        background-image: var(--bg-gradient), url("./img/books.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
        position: absolute;
        width: 100%;
    }

    section{
        margin: 9rem 1rem 3rem 1rem;
        height: 100vh;
        color: white;
        display: flex;
        flex-direction: column;
        align-content: center;
        overflow: hidden;
        overflow-y: overlay;
        height: calc(100vh - 9.5rem);
        padding-right: 1rem;
        transition: transform .3s;
    }

    .m-top{
        margin-top: 7rem;
    }

    

    @media (max-width: 430px){
        section{
            padding-top: 12rem;
        }
    }
</style>


<div class="container">
    <LessonsToolBar on:openmodal={()=> {modalState = true; currentLesson = null}}
    on:input={filterByFront} {turnDark} />

    <section id="lessonsSection" transition:fade 
    on:scroll={onScroll} class:m-top={turnDark}>
        {#each lessons as lesson, i (lesson.id)} 
            <div style="width: 100%;" animate:flip={{duration: 600}}>
                <CSLessonItem {lesson} on:delete={()=> {deleteLesson(lesson.id)}}
                on:edit={()=> {modalState = true; currentLesson = lesson}} />
            </div>
        {:else}
            <CSCard>Sem lessons! comece já adicionar</CSCard>
        {/each}
        <!-- <VirtualList items={lessons} let:lesson>
            <CSLessonItem {lesson} on:delete={()=> {deleteLesson(lesson.id)}}
                on:edit={()=> {modalState = true; currentLesson = lesson}} />
        </VirtualList> -->
    </section>
</div>

{#if modalState}
    <Modal on:closemodal={()=> modalState = false} title="Editar Lesson">
        <CSLessonForm {currentLesson} on:save={addLesson} on:edit={editLesson}
        on:cancel={()=> modalState = false} />
    </Modal>
{/if}