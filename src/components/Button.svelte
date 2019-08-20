<script>
    import {createEventDispatcher} from 'svelte';
    export let disabled = false;
    export let shape = "";
    export let size = "";
    export let modifier = ""
    export let evt = "";
    export let type = "button";
    
    const dispatch = createEventDispatcher();

</script>
<style>
    button{
        padding: .5rem 1rem;
        background-color: var(--primary-color, gray);
        border-color: var(--primary-color, gray);
        color: #fff;
        text-transform: capitalize;
        /* border-radius: 5px; */
        cursor: pointer;
        font-size: smaller;
        transition: all .3s ease-out;
    }

    button:hover{
        background-color: var(--primary-color, lightgray);
        border-color: var(--primary-color, lightgray);
        box-shadow: 0 0 6px var(--secondary-color);
    }

    button:active{
        box-shadow: 0 0 3px var(--primary-color);
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active{
        background-color: var(--cfs-blue-secondary, gray);
        border-color: var(--cfs-blue-secondary, gray);
        box-shadow: none;
        opacity: .5;
        cursor: not-allowed;
    }

    .rounded{
        border-radius: 25px;
    }

    /*
        Stroke Button
    */

    .stroke{
        background-color: transparent;
        color: var(--contrast-color, gray);
        border-width: 1px;
        border-color: var(--contrast-color, gray);
    }
    
    .stroke:hover{
        background-color: var(--primary-transparent-color);
        border-color: var(--tertiary-color, gray);
        color: var(--tertiary-color, lightgray);
        box-shadow: none;
    }
    .stroke:disabled,
    .stroke:disabled:hover,
    .stroke:disabled:active{
        background-color: transparent;
        border-color: var(--cfs-blue-secondary, gray);
        box-shadow: none;
        opacity: .5;
        cursor: not-allowed;
    }

    .stroke:active{
        background-color: transparent;
    }

    /*
        Clean Button
    */

    .clean{
        color: var(--tertiary-color, gray);
        transition: .5s;
    }
    .clean, .clean:hover{
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
    }
    .clean:hover{
        color:  var(--contrast-color, lightgray);    
        text-shadow: 0px 0 1px rgba(0,0,0, .1);
    }
    .clean:active{
        background-color: var(--primary-transparent-color);
    }

    .clean:disabled,
    .clean:disabled:hover,
    .clean:disabled:active{
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        opacity: .5;
        color: var(--cfs-blue-secondary, gray);
        cursor: not-allowed;
    }

    .medium{
        padding: .8rem 2rem;
        font-size: medium;
    }
    .small{
        padding: .2rem .5rem;
        /* font-size: medium; */
    }

    .icon-btn{
        display: flex;
        height: fit-content;
    }

    .space-right{
        margin-right: .5rem;
    }
    .space-left{
        margin-left: .5rem;
    }

    .modal{
        background-color: var(--secondary-transparent-color, gray);
    }

    .level-sel{
        background-color: var(--primary-color);
    }

     @media (max-width: 480px){
        .medium{
            padding: .5rem 1rem;
            font-size: small;
        }
    }
    @media (max-height: 480px){
        .medium{
            padding: .5rem 1rem;
            font-size: small;
        }
    }

</style>

<button type="{type}" disabled={disabled} class="{shape} {size} {modifier}"
on:click={()=> dispatch(evt) }>
    <slot/>
</button>