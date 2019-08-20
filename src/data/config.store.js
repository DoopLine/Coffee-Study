import {writable} from 'svelte/store';

import Persistence from "./Persistence";
const config = writable(Persistence.getConfig());

// Public Metods
const updateMetaDiaria = (meta) => config.update(cf => {
    const newConfig = {...cf, metaDiaria: meta};
    Persistence.saveConfig(newConfig);
    return newConfig;                                
});

const customConfigStore = {
    subscribe: config.subscribe,
    updateMetaDiaria: updateMetaDiaria
};

export default customConfigStore;