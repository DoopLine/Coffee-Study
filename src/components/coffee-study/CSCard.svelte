<script>
    import { fade } from 'svelte/transition';
</script>
<style>
    .deck{
        background-color: var(--primary-color);
        height: fit-content;
        padding: var(--small-gap);
        position: relative;
        transition: all .5s ease;
        align-self: center;
        margin: 1rem;
        color: var(--contrast-color);
        border-radius: .5rem;
    }
    .deck::before{
        z-index: -1;
        position: absolute;
        content: '';
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
        transform: skew(2deg, 2deg);
        transition: all .5s ease;
        border-radius: .5rem;
        background: var(--secondary-transparent-gradient);
    }
    .deck:hover::before{
        background: var(--primary-color);
    }
</style>
<div transition:fade class="deck">
    <slot/>
</div>