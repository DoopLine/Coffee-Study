<script>
    import {onDestroy} from 'svelte';
    //*Store
    import decksStore from '../data/decks.store';
    import screensStore from '../data/screens.store';
    import stateStore from '../data/state.store';
    //------
    import { fly } from 'svelte/transition';
    import CSDeckForm from '../components/coffee-study/CSDeckForm.svelte';
    import Button from '../components/Button.svelte';
    import Modal from '../components/Modal.svelte';
    import Popup from '../components/Popup.svelte';
    
    export let currentDeckId = '';

    let deck = {};
    let modalState = false;
    let popupState = false;

    const unsubscribe = decksStore.subscribe( decks =>{
        deck = decks.find(d => d.id === currentDeckId);
    });

    function editDeck(evt){
        const {name, desc} = evt.detail;
        deck.name = name;
        deck.desc = desc;
        decksStore.editDeck(deck);
        modalState = false;
    }

    function deleteDeck(){
        decksStore.deleteDeck(currentDeckId);
        screensStore.goTo('decks');
    }
    function goToLessons(){
        stateStore.selectCurrentDeck(currentDeckId);
        screensStore.goTo('lessons');
    }
    
    onDestroy(()=> unsubscribe());

</script>

<style>
    section{
        padding: 6rem 1rem 3rem 1rem;
        height: 100vh;
        color: white;
        display: flex;
        justify-content: center;
        overflow-y: overlay;
    }
    .card{
        background-image: var(--bg-gradient);
        background-position: bottom;
        background-size: cover;
        height: fit-content;
        padding: var(--small-gap);
        flex-basis: 80%;
        max-width: 50rem;
    }

    .card > *:not(:last-child){
        margin-bottom: var(--small-gap);
    }

    .buttons{
        display: flex;
        width: 24rem;
        justify-content: space-between;   
    }
    .buttons p{
        color: var(--contrast-color); 
    }
    .buttons i{
        margin-right: var(--smallest-gap);
    }
    h3, p{
        color: var(--tertiary-color);
    }

    @media (max-width: 430px){
        .buttons{
            flex-flow: row wrap;
            width: initial;
            height: 6rem;
            align-items: center;
        }
    }
    @media (max-width: 276px){
        .buttons{
            height: 8rem;
        }
    }
</style>
<section transition:fly={{y: -300, duratio: 300}}>
{#if deck}
    <div class="card">
        <h1>{deck.name}</h1>
        <h3>{deck.desc}</h3>
        <p>Sessões de estudo: {deck.studyCount}</p>
        <p>Número de lessons: {deck.lessons.length}</p>
        <p>Criado em: {deck.creationDate}</p>
        <div class="buttons">
            <Button evt="goto" on:goto={()=> screensStore.goTo('decks')} modifier='icon-btn'>
                <i class="fa fa-arrow-left"></i>
                <p>Voltar</p>
            </Button>
            <Button evt="openpopup" on:openpopup={()=> popupState = true} modifier='icon-btn'>
                <i class="fa fa-trash"></i>
                <p>Deletar</p>
            </Button>
            <Button evt="openmodal" on:openmodal={()=> modalState = true} modifier='icon-btn'>
                <i class="fa fa-pencil-square"></i>
                <p>Editar</p>
            </Button>
            <Button modifier='icon-btn' evt="goto" on:goto={goToLessons}>
                <i class="fa fa-list-alt"></i>
                <p>Lessons</p>
            </Button>
        </div>
    </div>
{/if}
</section>
{#if modalState}
    <Modal on:closemodal={()=> modalState = false} title="Editar Deck">
        <CSDeckForm name={deck.name} desc={deck.desc} on:save={editDeck} 
        on:cancel={()=> modalState = false} />
    </Modal>
{/if}
{#if popupState}
    <Popup content="Uma vez apagado não é possivel recuperar!" title="Tens certeza?" 
    on:closepopup={()=> popupState = false}>
        <Button evt="cancel" on:cancel="{()=> popupState = false}">Cancelar</Button>
        <Button evt="delete" on:delete={deleteDeck}>Apagar</Button>
    </Popup>
{/if}


