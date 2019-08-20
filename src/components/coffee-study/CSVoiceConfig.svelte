<script>
    //*Components
    import RangeBar from "../RangeBar.svelte";
    import InputText from '../InputText.svelte';
    import Button from '../Button.svelte';

    export let currentText="";

    let velocidadeValue = 1;
    let tonalidadeValue = 1;
    let volumeValue = 1;
    let speacking = false;
    //Speech logic
    const speech = window.speechSynthesis;
    let voices = [];
    function getVoices() {
        voices = speech.getVoices();
    }
    getVoices();
    if(speech.onvoiceschanged !== undefined){
        speech.onvoiceschanged = getVoices;
    }

    function speak(){
        if(speech.speaking){
            return;
        }
        const speakText = new SpeechSynthesisUtterance(currentText);
        speakText.onend = evt =>{
            speacking = false;
        }
        speakText.onerror = evt =>{
        }
        const selectedVoice = document.querySelector('#selectVoice').selectedOptions[0]
        .getAttribute('data-name');

        speakText.voice = voices.find(v => v.name === selectedVoice);
        speakText.rate = velocidadeValue;
        speakText.pitch = tonalidadeValue;
        speakText.volume = volumeValue;

        speacking = true;
        speech.speak(speakText);

    }
    function toPorcent(val){
        return val >= 1 ? "100%" : val * 100 + '%';
    }
</script>

<style>
    article{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    .bar-val{
        display: flex;
        color: var(--contrast-color);
        align-items: center;
    }
    .bar-val> p{
        margin-right: 1rem;
        min-width: 6rem;
    }
    .bar-val:not(:first-child){
        border-left: 1px solid var(--contrast-color);
        margin-left: 1rem;
        padding-left: 1rem;
    }
    option{
        color: var(--primary-color);
    }
</style>
<article>
    <div class="bar-val">
        <p>Velocidade: {toPorcent(velocidadeValue)}</p>
        <RangeBar bind:val={velocidadeValue} min="0" max="2" />
    </div>
    <div class="bar-val">
        <p>Tonalidade: {toPorcent(tonalidadeValue)}</p>
        <RangeBar bind:val={tonalidadeValue} min="0" max="2" />
    </div>
    <div class="bar-val">
        <p>Volume: {toPorcent(volumeValue)}</p>
        <RangeBar bind:val={volumeValue} min="0" max="2" />
    </div>
    <div class="bar-val">
        <p>Voz:</p>
        <InputText id={"selectVoice"} type="select-no-label" className="small-h">
            {#each voices as voice}
                <option data-lang={voice.lang} data-name={voice.name}>{voice.name} ({voice.lang})</option>
            {/each}
        </InputText>
    </div>
    <div class="bar-val">
        <Button disabled={speacking} modifier="modal rounded" evt="speak" on:speak={speak}>Falar</Button>
    </div>
</article>