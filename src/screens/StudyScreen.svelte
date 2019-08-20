<script>
    import { onDestroy } from 'svelte';
    import { fade, fly } from "svelte/transition";
    //*stores
    import decksStore from "../data/decks.store";
    import screensStore from "../data/screens.store";
    import configStore from "../data/config.store";
    import stateStore from '../data/state.store';
    //*Models
    import Lesson from "../model/Lesson";
    //*Components
    import CSCard from "../components/coffee-study/CSCard.svelte";
    import CSVoiceConfig from "../components/coffee-study/CSVoiceConfig.svelte";
    import CSLessonForm from "../components/coffee-study/CSLessonForm.svelte";
    import Button from "../components/Button.svelte";
    import Notif from "../components/Notif.svelte";
    import Modal from "../components/Modal.svelte";
    import Popup from "../components/Popup.svelte";

    export let currentDeckId = "";
    let currentDeck = {};
    let lessons = [];
    
    let arrWillUpdateLessons = [];
    
    let notifMsg = {
        selLevel: "Selecione um nivel para continuar!",
    };
    let finishPopupMsg = {
        title: '',
        content: '',
    }
    let config = {};

    let currentLessonCount = 0;

    let cardPosition = 'front';
    let selectedLevel = null;

    let isStart = true;
    let editForm = false;
    let isNotifOpened = false;
    let isOnFinishPopupOpen = false;
    let isMetaDiariaReached = false;
    let isVoiceConfigOpened = false;


    let currentText = lessons.length? lessons[currentLessonCount][cardPosition] : "Nenhum deck foi selecionado!";

    $:currentText = lessons.length? lessons[currentLessonCount][cardPosition] : "Nenhum deck foi selecionado!";

    const unDecksStore = decksStore.subscribe( allDecks =>{
        currentDeck = allDecks.find(dk => dk.id === currentDeckId);
        lessons = currentDeck.lessons.sort((a, b)=> a.learnCount - b.learnCount);
    });
    const unsubscribe = configStore.subscribe( cf => config = cf);

    onDestroy(()=> {
        unsubscribe();
        unDecksStore();
    });

    //*Funcions
    function nextLesson(){
        // checks
        if(!selectedLevel){
            showNotif();
            return;
        }else if(isNotifOpened){
            isNotifOpened = false;
        } 

        //tem que executar antes de checar se é o fim ou atingiu a meta diária.
        arrWillUpdateLessons = [...arrWillUpdateLessons, {
            id: lessons[currentLessonCount].id,
            learnCount: Lesson.levelToLearnCount(selectedLevel)
        }];
        //-----------------------------------------------------------------
        
        if(currentLessonCount === lessons.length - 1){
            //Ao terminar
            finishPopupMsg = {
                title: 'Terminamos por agora',
                content: 'Você concluio essa sessão com sucesso!',
            }
            isOnFinishPopupOpen = true;
            return;
        }
        
        if(config.metaDiaria - 1 === currentLessonCount){
            //Ao ATINGIR META
            finishPopupMsg = {
                title: 'Você atingiu a sua meta diária',
                content: 'Deseja continar ou parar por aqui?',
            }
            isMetaDiariaReached = true;
            return;
        }
        // ----------------
        initNextCard();
    }
    function prevLesson(){
        if(currentLessonCount === 0) return;
        cardPosition = 'front';
        currentLessonCount? currentLessonCount-- : null;
        selectedLevel = arrWillUpdateLessons[currentLessonCount]? Lesson.LearnCountToLevel(arrWillUpdateLessons[currentLessonCount].learnCount) : null;
        arrWillUpdateLessons.pop();
    }

    function editLesson(evt) {
        const currentLesson = {...lessons[currentLessonCount]};
        const {front, back} = evt.detail;
        currentLesson.front = front;
        currentLesson.back = back;
        decksStore.editLesson(currentDeck, currentLesson);
        // currentLesson = null;
        lessons = currentDeck.lessons;
        editForm = false;
    }

    function rotateCard(){
        if(cardPosition === 'front'){
            cardPosition = 'back';
        }else{
            cardPosition = 'front';
        }
        currentText = lessons.length? lessons[currentLessonCount][cardPosition] : "Nenhum deck foi selecionado!";
    }

    function showNotif(){
        if(isNotifOpened) return;
        isNotifOpened = true;
        let timeout = setTimeout(() => {
            isNotifOpened = false;
            timeout = null;
        }, 5000);
    }

    function ficarPorAqui(){
        finishPopupMsg = {
            title: 'Desejá parar?',
            content: 'Ao parar essa sessão o seu progresso será salvo.',
        }
        isMetaDiariaReached = true;
    }

    function finishAndLeave(){
        decksStore.updateLearnCount(currentDeck, arrWillUpdateLessons);
        isOnFinishPopupOpen = false;
        screensStore.goTo('home');
    }

    function continuar(){
        initNextCard();
        isMetaDiariaReached = false;
    }

    //helper functions
    function initNextCard(){
        currentLessonCount++;
        selectedLevel = null;
        cardPosition = 'front';
    }
</script>
<style>
    .backdrop{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(32, 33, 36, .7);
        z-index: 9;
        transition: all .3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;   
        align-items: center;
    }
    .lesson-action{
        background-color: var(--primary-color);
        padding: 1rem;
        display: flex;
        border-radius: 10px;
    }
    .study-card{
        display: flex;
        /* align-items: center; */
        text-align: center;
        background-color: var(--primary-color);
        color: var(--contrast-color);
        border-radius: 10px;
        padding: 1rem;
        margin: 2rem 3vw;
        overflow-y: overlay;
        word-break: break-word;
        /* min-height: 14rem; */
        max-height: 14rem;
        box-shadow: 0 0 6px var(--secondary-transparent-color);
        font-size: x-large;
        cursor: pointer;
        transition: .3s;
    }
    .study-card:hover{
        box-shadow: 0 0 9px var(--secondary-color);
    }
    .study-card:active{
        box-shadow: 0 0 3px var(--secondary-color);
    }
    .buttons{
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-transparent-color);
        padding: 1rem;
        border-radius: 10px;
    }
    @media (max-height: 471px){
        section{
            margin-top: 2rem;
        }
        .study-card{
            margin: 1rem 3vw;
        }
    }
    @media (max-width: 345px){
        .buttons{
            padding: 1rem 2rem;
            flex-wrap: wrap;
        }
        .buttons:first-child{
            order: 1;
        }
    }
</style>

{#if isStart}
    <div class="backdrop">
        <Button modifier="medium" evt="start" on:start={()=> isStart = false}>Começar</Button>
    </div>
{/if}

{#if isNotifOpened}
   <Notif on:closenotif={()=> isNotifOpened = false}>{notifMsg.selLevel}</Notif>
{/if}

<section transition:fade>
    <article class="lesson-action">
        <Button modifier='icon-btn modal rounded space-right' evt="speak"
         on:speak={()=> isVoiceConfigOpened = true}>
            <i title="ler o texto" class="fa fa-volume-up"></i>
        </Button>
        <Button evt="edit" on:edit={()=> editForm = true}  modifier='icon-btn modal rounded'>
            <i title="editar lesson" class="fa fa-pencil-square"></i>
        </Button>
        <Button evt="stop" on:stop={ficarPorAqui}  modifier='icon-btn modal rounded space-left'>
            <i title="Parar por aqui" class="fa fa-sign-out"></i>
        </Button>
    </article>
    <div transition:fly={{x:200}} class="study-card" on:click={rotateCard}>
        { currentText } 
    </div>
    <article class="buttons">
        <Button modifier="icon-btn rounded space-right" evt="prev" on:prev={prevLesson} 
        disabled={currentLessonCount === 0}>
            <i title="lesson anterior" class="fa fa-chevron-left"></i>
        </Button>

        <Button evt="levelchange" on:levelchange={()=> selectedLevel = "easy"} 
        modifier="space-right modal {selectedLevel === "easy" ? "level-sel" : ""}">Fácil</Button>

        <Button evt="levelchange" on:levelchange={()=> selectedLevel = "medium"} 
        modifier="space-right modal {selectedLevel === "medium" ? "level-sel" : ""}">Normal</Button>

        <Button evt="levelchange" on:levelchange={()=> selectedLevel = "hard"} 
        modifier="space-right modal {selectedLevel === "hard" ? "level-sel" : ""}">Difícil</Button>

        <Button modifier="icon-btn rounded" evt="next" on:next={nextLesson}>
            <i title="lesson seguinte" class="fa fa-chevron-right"></i>
        </Button>
    </article>
</section>

<!-- Edit form -->
{#if editForm}
    <Modal on:closemodal={()=> editForm = false} title="Editar Lesson">
        <CSLessonForm currentLesson={lessons[currentLessonCount]} on:edit={editLesson}
        on:cancel={()=> editForm = false} />
    </Modal>
{/if}

<!-- Voice config -->
{#if isVoiceConfigOpened}
    <Modal on:closemodal={()=> isVoiceConfigOpened = false} title="Configurar Voz">
        <CSVoiceConfig {currentText} />
    </Modal>
{/if}

<!-- Finish popup -->
{#if isOnFinishPopupOpen}
    <Popup content={finishPopupMsg.content} title={finishPopupMsg.title} 
    on:closepopup={finishAndLeave}>
        <Button modifier="modal rounded" evt="finish" on:finish={finishAndLeave}>Início</Button>
    </Popup>
{/if}

<!-- Meta diaria reached Popup -->
{#if isMetaDiariaReached}
    <Popup content={finishPopupMsg.content} title={finishPopupMsg.title}>
        <Button modifier="modal rounded" evt="continue" on:continue={continuar}>
        Continuar</Button>
        <Button modifier="modal rounded space-left" evt="finish" on:finish={finishAndLeave}>Início</Button>
    </Popup>
{/if}