<script>
    //*Stores
    import screensStore from '../data/screens.store.js';
    //-------
    import { fade } from "svelte/transition";
    import Button from "../components/Button.svelte";
</script>
<style>
    section{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: grid;
        grid-row-gap: var(--medium-gap);
        color: var(--contrast-color);
        text-align: center;
        width: fit-content;
        padding: 0 var(--largest-gap);
    }
    h1{
       font-size: -webkit-xxx-large;
    }
    .description{
        padding: 0 var(--large-gap);
    }
    .buttons{
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto;
        grid-column-gap: 2rem;
    }
    @media (max-width: 880px){
        section{
            padding: 0 var(--small-gap);
        }

        h1{
            font-size: xx-large;
        }
        .description{
            padding: 0 var(--small-gap);
        }
        .buttons{  grid-column-gap: 1rem;}
    }
    @media (max-width: 480px){
        h1{
            font-size: larger;
        }
        .description p {
            font-size: small;
        }
        .buttons{
            display: grid;
            grid-row-gap: 1rem;
            grid-template: auto / auto;
            justify-content: unset;
            padding: 0 var(--medium-gap);
        }
    }
    @media (max-height: 420px){
        h1{
            font-size: larger;
        }
        .description p {
            font-size: small;
        }
        .buttons{  grid-column-gap: 1rem;}
    }
</style>
<section transition:fade>
    <div>
        <h1>Sejá Bemvindo</h1>
        <h1>Prepare o café e desligue as distrações</h1>
    </div>
    <div class="description">
        <p>Crie um deck, adicione Lessons e comece a estudar!</p>
    </div>
    <div class="buttons">
        <Button shape="rounded" size="medium" evt="goto" on:goto={()=>screensStore.goTo('decks')}>
        Selecionar deck</Button>
        <Button shape="stroke rounded" size="medium" evt="goto" 
        on:goto={()=>screensStore.goTo('study')}>Usar recente</Button>
    </div>
</section>