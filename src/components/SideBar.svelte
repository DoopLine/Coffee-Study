<script>
    //*Stores
    import screensStore from '../data/screens.store';
    //-------
    import {createEventDispatcher} from 'svelte';
    import { fly } from "svelte/transition";
    const dispatch = createEventDispatcher();

    function goTo(screenName){
        screensStore.goTo(screenName);
        dispatch('closesidebar');
    }
</script>
<style>
    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        z-index: 10;
    }
    .side-bar{
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        grid-template: 4rem auto / 1fr;
        grid-row-gap: var(--medium-gap);
        width: 25rem;
        height: 100vh;
        max-width: 80%;
        background-color: var(--primary-color, #fff);
        box-shadow: 2px 0 5px rgba(32, 33, 36, .5);
        z-index: 11;
        overflow-y: overlay;
    }

    /* ::-webkit-scrollbar{
        background: transparent;
        width: 25px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 25px;
        background-color: var(--secondary-transparent-color);
        border: 8px solid var(--primary-color);
    }
    ::-webkit-scrollbar-thumb:hover{
        background-color: var(--secondary-color);
    }
    ::-webkit-scrollbar-button{
        background: transparent;
        height: inherit;
    }
    
    ::-webkit-scrollbar-track{
        background: var(--primary-transparent-color);
    } */
    
    header{
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    h1{
        color: var(--contrast-color);
        font-size: x-large;
        font-weight: 600;
        font-family: 'Lobster', cursive;
        letter-spacing: 2px;
    }

    ul{
        display: grid;
        list-style: none;
        grid-row-gap: var(--medium-gap);
        justify-items: center;
        margin-bottom: var(--large-gap);
    }
    ul li{
        cursor: pointer;
        font-size: larger;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--contrast-color);
        width: fit-content;
    }
    ul li p, ul li i{
        color: inherit;
        /* font-size: small; */
        transition: .35s;
    }
    ul li:hover > p, ul li:hover > i {
        color: var(--secondary-color);
    }
    ul li p{
        margin-left: var(--small-gap);
    }

</style>
<div class="backdrop"  on:click={()=> dispatch('closesidebar')} 
    in:fly={{x: -500}}
    out:fly={{x: -500, delay: 100}}>
</div>
<div class="side-bar"
in:fly={{x: -500, delay: 100}}
out:fly={{x: -500}}>
    <header>
        <h1>Coffee Study</h1>
    </header>
    <section>
        <ul>
            <li on:click={()=> goTo('home')}>
                <i class="fa fa-home"></i>
                <p>Inicio</p>
            </li>
            <li on:click={() => goTo('decks')}>
                <i class="fa fa-inbox"></i>
                <p>Decks</p>
            </li>
            <li on:click={() => goTo('lessons')}>
                <i class="fa fa-list-alt"></i>
                <p>Lessons</p>
            </li>
            <li on:click={() => goTo('study')}>
                <i class="fa fa-book"></i>
                <p>Estudar</p>
            </li>
            <li on:click={() => goTo('config')}>
                <i class="fa fa-cog"></i>
                <p>Configuraçoes</p>
            </li>
            <li on:click={()=> goTo('about')}>
                <i class="fa fa-exclamation-circle"></i>
                <p>Sobre</p>
            </li>
        </ul>
    </section>
</div>