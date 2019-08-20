<script>
    /*
        testar o svelte virtual scroll ou usar paginação;
    */
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
    import Popup from '../../components/Popup.svelte';
    import HexDotsLoading from '../../components/HexDotsLoading.svelte';
    import CSCard from '../../components/coffee-study/CSCard.svelte';
    import CSLessonItem from '../../components/coffee-study/CSLessonItem.svelte';
    import CSLessonForm from '../../components/coffee-study/CSLessonForm.svelte';
    import LessonsToolBar from './LessonsToolBar.svelte';


    export let currentDeckId;

    const dispatch = createEventDispatcher();

    let currentDeck = {};
    let lessons = [];
    let arrfiteredLessons = [];
    let currentLesson = null;
    let input='';
    let lessonToDeleteId = '';

    //Visibility vars
    let modalState = false;
    let turnDark = false;
    let popupState = false;

    // let isSpinnerOpened = true;

    const unDecksStore = decksStore.subscribe( allDecks =>{
        currentDeck = allDecks.find(dk => dk.id === currentDeckId);
        lessons = currentDeck.lessons.sort((a, b)=> a.learnCount - b.learnCount);
    });

    onDestroy(() => {
        dispatch('destroy');
        unDecksStore();
    });


    function addLesson({detail}){
        const newLesson = detail;
        modalState = false;
        decksStore.addLesson(currentDeck, newLesson);
    }
    
    function editLesson(evt){
        const {front, back} = evt.detail;
        currentLesson.front = front;
        currentLesson.back = back;
        decksStore.editLesson(currentDeck, currentLesson);
        currentLesson = null;
        modalState = false;
    }

    function onWillDeleteLesson(id){
        lessonToDeleteId = id; 
        popupState = !popupState;
    }


    function deleteLesson() {
        decksStore.deleteLesson(currentDeck, lessonToDeleteId);
        lessonToDeleteId = null;
        popupState = !popupState;
    }

    function onScroll(evt){
        dispatch('turndark', evt.target.scrollTop);
        if(evt.target.scrollTop > 0 && turnDark === false) turnDark = true;
        if(evt.target.scrollTop <= 0) turnDark = false;
    }
    
    function filterByFront(evt){
        document.getElementById('lessonsSection').scrollTop = 0;
        input = evt.target.value.toLowerCase().trim();
        arrfiteredLessons = currentDeck.lessons.filter( l => l.front.toLowerCase().includes(input));
        lessons = arrfiteredLessons;
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
                <CSLessonItem {lesson} on:delete={()=> {onWillDeleteLesson(lesson.id)}}
                on:edit={()=> {modalState = true; currentLesson = lesson}} />
            </div>
        {:else}
            <CSCard>Sem lessons! comece já adicionar</CSCard>
        {/each}
    </section>
</div>


{#if modalState}
    <Modal on:closemodal={()=> modalState = false} title="Editar Lesson">
        <CSLessonForm {currentLesson} on:save={addLesson} on:edit={editLesson}
        on:cancel={()=> modalState = false} />
    </Modal>
{/if}

<!-- Popup that delete the lesson -->
{#if popupState}
    <Popup content="Uma vez apagado não é possivel recuperar!" title="Tens certeza?" 
    on:closepopup={()=> popupState = false}>
        <Button evt="cancel" on:cancel="{()=> popupState = false}">Cancelar</Button>
        <Button evt="delete" on:delete={deleteLesson}>Apagar</Button>
    </Popup>
{/if}