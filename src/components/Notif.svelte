<script>
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";

    const dispatch = createEventDispatcher();
</script>
<style>
    .notif{
        position: fixed;
        top: 3rem;
        padding: 2rem 1rem;
        color: var(--contrast-color);
        background-color: var(--secondary-color);
        height: fit-content;
        width: 100%;
        text-align: center;
    }
    .notif__btn-close{
        position: absolute;
        top: .5rem;
        right: 2rem;
        cursor: pointer;

    }
</style>
<div transition:slide class="notif">
    <i class="fa fa-times notif__btn-close" on:click={()=> dispatch('closenotif')}></i>
    <p class="notif__text">
        <slot />
    </p>
</div>