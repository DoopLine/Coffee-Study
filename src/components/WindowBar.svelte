<script>
    const { ipcRenderer } = require('electron');
    //*Stores
    import screensStore from '../data/screens.store';
    //-------
    import {createEventDispatcher} from 'svelte';
    export let turnDark;
    const dispatch = createEventDispatcher();

    const closeApp = () => ipcRenderer.send('win:actionBar', 'clo');
    const minimizeApp = () => ipcRenderer.send('win:actionBar', 'min');
    const toggleMaximizeApp = () => ipcRenderer.send('win:actionBar', 'max');
</script>
<style>
    nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--small-gap);
        height: 3rem;
        -webkit-app-region: drag;
        user-select: none;
        background-color: var(--primary-transparent-color);
        z-index: 10;
        transition: background-color .5s;
    }
    ul{
        display:flex;
        list-style: none;
        align-items: center;
        -webkit-app-region: no-drag;
    }
    ul li{
        /* padding: 0 var(--small-gap); */
        cursor: pointer;
        font-size: small;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        color: var(--contrast-color);
    }
    ul li:not(:last-child){
        margin-right: var(--small-gap);
    }
    ul li p, ul li i{
        color: inherit;
        font-size: .9rem;
        transition: .35s;
    }
    ul li:hover > p, ul li:hover > i {
        color: var(--secondary-color);
    }
    ul li p{
        margin-left: var(--smallest-gap);
    }
    h1{
        color: var(--contrast-color);
        font-size: medium;
        font-weight: 600;
        font-family: 'Lobster', cursive;
        letter-spacing: 2px;
    }
    .logo{
        display: grid;
        align-content: center;
    }
    .icon-btn{
        cursor: pointer;
        -webkit-app-region: no-drag;
        transition: .5s;
    }
    .icon-btn--1{
        color: var(--alert-color);
    }
    .icon-btn--2{
        color: var(--success-color);
    }
    .icon-btn--3{
        color: var(--danger-color);
    }

    .icon-btn--1:hover{
        color: var(--alert-secondary-color);
    }
    .icon-btn--2:hover{
        color: var(--success-secondary-color);
    }
    .icon-btn--3:hover{
        color: var(--danger-secondary-color);
    }

    span{
        color: var(--contrast-color);
        display: none;
        -webkit-app-region: no-drag;
    }
    span:hover{
        color: var(--tertiary-color);
    }
    .dark{
        background-color: var(--secondary-color);
    }
    @media(max-width: 800px){
        ul{
            display: none;
        }
        span{
            display: inline-block;
            cursor: pointer;
        }
    }
</style>
<nav class:dark={turnDark}> 
    <span>
        <i class="fa fa-bars" on:click={()=> dispatch('opensidebar')}></i>
    </span>
    <div class="logo">
        <h1>Coffee Study</h1>
    </div>
    <ul> 
        <li on:click={()=> screensStore.goTo('home')}>
            <i class="fa fa-home"></i>
            <p>Inicio</p>
        </li>
        <li on:click={() => screensStore.goTo('decks')}>
            <i class="fa fa-inbox"></i>
            <p>Decks</p>
        </li>
        <li on:click={() => screensStore.goTo('lessons')}>
            <i class="fa fa-list-alt"></i>
            <p>Lessons</p>
        </li> 
        <li on:click={() => screensStore.goTo('study')}>
            <i class="fa fa-book"></i>
            <p>Estudar</p>
        </li>
        <li on:click={()=> screensStore.goTo('config')}>
            <i class="fa fa-cog"></i>
            <p>Configuraçoes</p>
        </li>
        <li on:click={()=> screensStore.goTo('about')}>
            <i class="fa fa-exclamation-circle"></i>
            <p>Sobre</p>
        </li>
    </ul>
    <div>
        <li class="fa fa-circle icon-btn icon-btn--1" title="minimizar" on:click={minimizeApp}></li>
        <li class="fa fa-circle icon-btn icon-btn--2" title="maximizar" on:click={toggleMaximizeApp}></li>
        <li class="fa fa-circle icon-btn icon-btn--3" title="fechar" on:click={closeApp}></li>
    </div>
</nav>