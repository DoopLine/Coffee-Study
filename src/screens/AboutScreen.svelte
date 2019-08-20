<script>
    import {slide} from 'svelte/transition';
    import CSCard from "../components/coffee-study/CSCard.svelte";
</script>
<style>
    section{
        display: flex;
        flex-direction: column;
        padding-top: 5rem;
        padding-bottom: 1rem;
        overflow: hidden;
        overflow-y: overlay;
        height: 100%;
    }
    hr{
        width: 95%;
        align-self: center;
        margin: 1rem 0;
    }
    .txt-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .txt{
        font-family: 'Lobster', cursive;
        color: var(--contrast-color);
        letter-spacing: .1rem;
    }
    .txt-wrapper h1{
        font-size: 3rem;
    }
    .txt-wrapper h3{
        margin: 1rem 0;
    }
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
    }
</style>

<section transition:slide>
    <article class="txt-wrapper">
        <h1 class="txt">Coffee Study</h1>
        <h3 class="txt">Coffee Sync by Denilson Costa</h3>
    </article>
    <CSCard>
        <p>O objectivo dessa aplicação é ajudar a estudar usando flash cards e sessões de estudo para melhorar o nível de aprendizagem do usuário.</p>
    </CSCard>
    <hr>
    <CSCard>
        <p style="font-size: 1.5rem; padding-bottom: 1rem ">Informações da aplicação</p>
        <ul>
            <li>Node js: {process.versions.node}</li>
            <li>Chromium: {process.versions.chrome}</li>
            <li>Electron: {process.versions.electron}</li>
            <li>Versão da aplicação: 2.1.0</li>
        </ul>
    </CSCard>
</section>