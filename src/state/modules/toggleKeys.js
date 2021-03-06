export const state = {
    keys : {
        openSidebar: true,
    }
}
export const mutations = {
    mutateKeys: (state, payload) => {
        const { key, val } = payload;
        
        const trimmedKey = key.trim();
        if(trimmedKey && (Object.keys(state.keys).map(el => el).indexOf(trimmedKey) !== -1)){
            state.keys[trimmedKey] = (val !== undefined) ? val : !state.keys[trimmedKey];
        }
        return;
    },
    resetSomeKeys: (state, payload) => {
        const { keys } = payload;
        if(keys && Array.isArray(keys)){
            keys.forEach(el => {
                if(state.keys[el]){
                    state.keys = {
                        ...state.keys,
                        [el?.trim()] : false
                    }
                }
            })   
        }else{
            throw "'keys' should be an array";
        }
        return;
    }
}
export const actions = {
    mutateKeys: (state, payload) => {
        return state.commit("mutateKeys", payload);
    },
    resetSomeKeys: (state, payload )=> {
        return state.commit("resetSomeKeys", payload);
    }
}
export const getters = {
    getKeys: state => {
        return state.keys;
    }
}