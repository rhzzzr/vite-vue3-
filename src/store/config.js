import { defineStore } from 'pinia'
export const config = defineStore('config', {
    state: () => {
        return {
            projectName:'projectName'
        };
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'config',
                storage: localStorage,
            }
        ]
    }
})