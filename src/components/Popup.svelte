<script>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    export let title;
    export let content;

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

.popup{
    z-index: 11;
    position: fixed;
    top: 50%;
    left: 50%;
    width: auto;
    height: fit-content;
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
    min-height: 5rem;
}

.popup > *:not(:last-child){
    margin-bottom: 1rem;
}
p{
    color: var(--tertiary-color);
}
h3{
    color: var(--contrast-color);
}

.buttons{
    display: flex;
    justify-content: flex-end;
}
</style>
<div transition:fade class="backdrop" on:click={()=> dispatch('closepopup')}></div>
<div transition:fade class="popup">
    <h3>{title}</h3>
    <p>{content}</p>
    <div class='buttons'>
        <slot/>
    </div>
</div>