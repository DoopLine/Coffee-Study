<script>
    import {createEventDispatcher} from "svelte";
    import { fly, fade } from 'svelte/transition';

    export let buttonClose = true;
    export let title = '';
    
    const dispatch = createEventDispatcher();
</script>

<style>
.backdrop{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(32, 33, 36, .7);
    z-index: 10;
    transition: all .3s ease-in-out;
}

.modal{
    z-index: 11;
    position: fixed;
    top: 50%;
    left: 50%;
    opacity: 1;
    /* width: 50%; */
    max-width: 80vw;
    min-width: 25rem;
    max-height: 90vh;
    min-height: 5rem;
    background-color: var(--primary-color, #fff);
    border-radius: 3px;
    box-shadow: 0px 2px 8px rgba(32, 33, 36, .8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all .5s ease-out;
    transform: translate(-50%, -50%);
    padding: 1rem;
    padding-top: 1.05rem;
    overflow-y: overlay;
}

.modal__close-btn{
    position: fixed;
    top: 1rem;
    right: 1rem;
    font-weight: 600;
    cursor: pointer;
    font-size: large;
    width: 2rem;
    height: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 50%;
    color: var(--contrast-color);
    transition: .3s;
}

.modal__close-btn:hover{
    background-color:transparent;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    transition: .2s;
}

h1{
    color: var(--contrast-color);
    margin-bottom: 1.5rem;
    width: 80%;
}
</style>

<div class="backdrop" transition:fade on:click={()=> dispatch('closemodal')}></div>
<div class="modal" transition:fly={{y: 200}}>
    <h1>{title}</h1>
    {#if buttonClose}
        <span class="modal__close-btn" on:click={()=> dispatch('closemodal')}>
            <i class="fa fa-times"></i>
        </span>
    {/if}
    <slot />
</div>