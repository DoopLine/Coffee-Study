<script>
    import { fade } from "svelte/transition";
    //*Stores
    import screensStore from '../../data/screens.store.js';
    //-------
    import Button from '../Button.svelte';
    export let deck = {};
    export let currentDeckId = "";

</script>
<style>
    .deck{
        background-color: var(--primary-color);
        height: fit-content;
        padding: var(--small-gap);
        position: relative;
        transition: all .5s ease;
        flex-basis: 25rem;
        /* margin: 1rem; */
    }
    .deck::before{
        z-index: -1;
        position: absolute;
        content: '';
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
        background: var(--primary-transparent-color);
        transform: skew(2deg, 2deg);
        transition: all .5s ease;
    }
    .deck:hover::before{
        background: var(--secondary-transparent-color);
    }
    .deck__title{
        color: var(--contrast-color);
        margin: var(--small-gap) 0;
    }
    .deck__desc{
        color: var(--tertiary-color);
        margin: var(--smallest-gap) 0;
    }
    
    .selected::before{
        background: var(--success-color);
    }
    .selected:hover::before{
        background: var(--success-secondary-color);
    }
    .buttons{
        margin-top: var(--small-gap);
    }
</style>
<div on:dblclick transition:fade class:selected={currentDeckId === deck.id} class="deck">
    <!-- <p class="deck__date">data de criação: {deck.creationDate}</p> -->
    <h1 class="deck__title">{deck.name}</h1>
    <p class="deck__desc">{deck.desc}</p>
    <!-- <p class="deck__study-count">sessões de estudo: {deck.studyCount}</p> -->
    <div class="buttons">
        <Button modifier="space-right modal rounded" evt={'goto'} 
            on:goto={()=>screensStore.goTo('details', deck.id)}>detalhes
        </Button>
        <Button modifier="space-left modal rounded" evt="selecionar" on:selecionar>
            {currentDeckId === deck.id ? 'Selecionado' : 'Selecionar'}
        </Button>
    </div>
</div>