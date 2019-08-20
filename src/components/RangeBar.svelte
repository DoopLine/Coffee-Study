<script>
    export let val;
    export let min;
    export let max;
    export let step = 0.1;
</script>
<style>
    .range {
    all: unset;
    height: 2rem;
    -webkit-appearance: none;
    }
    .range::-webkit-slider-runnable-track {
        background-color: var(--tertiary-color);
        height: 0.2rem;
      border-radius: 0.4rem;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
    .range:hover::-webkit-slider-runnable-track,
    .range:focus::-webkit-slider-runnable-track {
      background-color: var(--contrast-color);
      cursor: pointer;
    }
  
    .range::-webkit-slider-thumb {
      -webkit-transition: 0.4s;
      transition: 0.4s;
      -webkit-appearance: none;
      background-color: var(--tertiary-color);
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-top: -.4rem;
      cursor: pointer;
    }
    .range:hover::-webkit-slider-thumb,
    .range:focus::-webkit-slider-thumb {
      background-color: var(--contrast-color);
    }

</style>

<input type="range" class="range" bind:value={val} {min} {max} {step}>