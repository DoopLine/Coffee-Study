<script>
    import Button from '../../components/Button.svelte';
    export let turnDark;
    
</script>

<style>
    .tool-bar{
        position: fixed;
        top: 4.5rem;
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        z-index: 5;
        flex-wrap: wrap;
        transition: background-color .5s;
        transition: transform .3s;
    }
    .seach-bar{
        height: 100%;
        display: flex;
        align-items: center;
    }
    .icon-btn{
        display: flex;
    }
    .icon-btn > i{
        margin-right: var(--smallest-gap);
    }
    input{
        all: unset;
        background-color: var(--primary-transparent-color);
        color: var(--contrast-color);
        margin-left: var(--smallest-gap);
        margin-right: var(--small-gap);
        padding: .45rem;
    }

    /* torna a  toolbar black*/
     .dark{
        background-color: var(--secondary-color);
        transform: translateY(-1.499rem);
    }

    @media (max-width: 430px){
        .seach-bar{
            margin-bottom: 1rem;
        }
    }

</style>

<div class="tool-bar" class:dark={turnDark}>
    <div class="seach-bar">
        <Button>
            <i class="fa fa-search"></i>
        </Button>
        <input type="text" placeholder="Procure aqui..." on:input>
    </div>
    <Button evt="openmodal" on:openmodal>
        <span class="icon-btn">
            <i class="fa fa-plus"></i>
            <p>Adicionar lesson</p>
        </span>
    </Button>
</div>