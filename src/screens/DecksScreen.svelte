<script>
    import {onDestroy, createEventDispatcher} from 'svelte';
    //*Store
    import decksStore from '../data/decks.store';
    import stateStore from '../data/state.store';
    //------
    import { fade } from "svelte/transition";
    import { flip } from 'svelte/animate';
    import CSItem from '../components/coffee-study/CSItem.svelte';
    import CSCard from '../components/coffee-study/CSCard.svelte';
    import Button from '../components/Button.svelte';
    import Modal from '../components/Modal.svelte';
    import CSDeckForm from '../components/coffee-study/CSDeckForm.svelte';

    let decks;
    let modalState = false;
    let turnDark = false;
    let currentDeckId = "";
    let currentDeck = {};
    let dispatch = createEventDispatcher();
 


    const unsubscribeState = stateStore.subscribe( state => {
        currentDeckId = state.currentDeckId ? state.currentDeckId : "";
    });

    const unsubscribe = decksStore.subscribe( allDecks => {
        decks = allDecks;
        let foundCurrentDeck = allDecks.find(dk => dk.id === currentDeckId);
        currentDeck = foundCurrentDeck ? foundCurrentDeck : {};
    });

    
    function isEmpty(deck){
        return !deck.name || !deck.desc;
    }
    function addDeck(evt){
        const newDeck = evt.detail;
        debugger;
        if(isEmpty(newDeck)) return;
        decksStore.addDeck(newDeck);
        modalState = false;
    }

    function onScroll(evt){
        dispatch('turndark', evt.target.scrollTop);
        if(evt.target.scrollTop > 0 && turnDark === false) turnDark = true;
        if(evt.target.scrollTop <= 0) turnDark = false;
    }

    function selectDeck(deckId){
        stateStore.selectCurrentDeck(deckId);
    }
    function filterByName(evt){
        const unsubscribe = decksStore.subscribe( allDecks => {
            const input = evt.target.value.toLowerCase().trim();
            decks = allDecks.filter( d => d.name.toLowerCase().includes(input));
        });
        unsubscribe();
    }
    
    onDestroy(()=> {
        unsubscribe();
        unsubscribeState();
    });


</script>

<style>
    section{
        padding: 8rem 1rem 3rem 1rem;
        height: 100vh;
        color: white;
        display: flex;
        flex-flow: row wrap;
        place-content: baseline center;
        align-items: center;
        overflow-y: overlay;
        overflow-x: hidden;
    }
    .tool-bar{
        position: absolute;
        top: 4.5rem;
        width: 100%;
        padding: 1rem 3rem;
        display: flex;
        justify-content: space-between;
        z-index: 5;
        flex-wrap: wrap;
        transition: transform .3s;
    }
    .dark{
        background-color: var(--secondary-color);
        transform: translateY(-1.499rem);
    }
    .seach-bar{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .icon-btn{
        display: flex;
    }
    .icon-btn > i{
        margin-right: var(--smallest-gap);
    }
    input{
        all: unset;
        background-color: var(--secondary-transparent-color);
        color: var(--contrast-color);
        margin-left: var(--smallest-gap);
        margin-right: var(--small-gap);
        padding: .45rem;
    }
    .item-wrapper{
        flex-basis: 25rem;
        margin: 1rem;
    }
@media (max-width: 462px){
    section{
        padding: 10rem 1rem 3rem 1rem;
    }
    .tool-bar{
        justify-content: flex-start;
        padding: 0 2rem;
    }
    .seach-bar{
        margin-bottom: var(--small-gap);
    }

}
</style>
<div class="tool-bar" class:dark={turnDark}>
    <div class="seach-bar">
        <Button>
            <i class="fa fa-search"></i>
        </Button>
        <input type="text" placeholder="Pesquisar..." on:input={filterByName}>
    </div>
    <Button evt={"openmodal"} on:openmodal={()=> modalState = true}>
        <span class="icon-btn">
            <i class="fa fa-plus"></i>
            <p>Adicionar deck</p>
        </span>
    </Button>
</div>
<section intro:true transition:fade on:scroll={onScroll}>
    {#each decks as deck, i (deck.id)} 
        <div class="item-wrapper" animate:flip={{duration: 600}}>
            <CSItem {currentDeckId} {deck} on:dblclick={()=> selectDeck(deck.id)}
            on:selecionar={()=> selectDeck(deck.id)}/>
        </div>
    {:else}
        <CSCard>Nenhum deck disponivel</CSCard>
    {/each}
</section>
{#if modalState}
    <Modal on:closemodal={()=> modalState = false} title="Criar Deck">
        <CSDeckForm on:save={addDeck} on:cancel={()=> modalState = false} />
    </Modal>
{/if}