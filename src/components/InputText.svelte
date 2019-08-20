<script>
    export let labelText = "Lorem ipsum dolor"; 
    export let id = "";
    export let type = "text";
    export let error = false;
    export let value = '';
    export let className= "";
</script>

<style>
    input, textarea, select{
        background-color: var(--secondary-transparent-color);
        border: none;
        padding: .5rem var(--small-gap);
        border-radius: 2rem;
        width: 100%;
        outline: none;
        transition: .3s;
        color: var(--contrast-color);
    }
    textarea{
        padding: var(--small-gap) 1.5rem;
        border-radius: 1.5rem;
    }
    select:-internal-list-box{
        all:unset;
    }
    input:focus, textarea:focus, select:focus{
        background-color: transparent;
        box-shadow: 0 0 7px 2px rgba(0,0,0,.15);
    }
    label{
        margin: .5rem;
        color: var(--contrast-color);
        width: fit-content;
    }
    .error{
        border: 1px solid var(--danger-secondary-color);
    }
    .icon{
        position: absolute;
        background-color: var(--danger-secondary-color);
        color: var(--primary-color);
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        right: 2%;
        top: 57%;
    }
    .small-h{
        padding: .1rem var(--small-gap);
    }
</style>

{#if type === 'textarea'}
    <div>
        <label for="{id}">{labelText}</label>
        <textarea id="{id}" placeholder="{labelText}" bind:value ></textarea>
    </div>
{:else if type === 'select'}
    <div style="position: relative;">
        <label for="{id}">{labelText}</label>
        <select  id="{id}"><slot/></select>
    </div>
{:else if type === 'select-no-label'}
    <div style="position: relative;">
        <select  id="{id}" class="{className}"><slot/></select>
    </div>
{:else if error}
    <div style="position: relative;">
        <label for="{id}">{labelText}</label>
        <input id={id} type="{type}" placeholder="{labelText}..." class="error" {value} on:input>
        <i class=" fa fa-times icon"></i>
    </div>
{:else}
    <div>
        <label for="{id}">{labelText}</label>
        <input id={id} type="{type}" placeholder="{labelText}" {value} on:input>
    </div>
{/if}