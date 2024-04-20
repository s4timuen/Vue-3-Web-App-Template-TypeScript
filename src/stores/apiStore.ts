import { StoreDefinition, defineStore } from 'pinia';
import { getRandomNumber } from '@/utils/utils.ts';
import { ApiOptions } from '@/models/apiOptions';

interface ApiStoreState {
    apiKey: string;
    baseUrl: string;
    loremApi: {
        loremIpsumUrl: string;
        maxLength: number;
    };
}

interface ApiStoreGetters {
    getBaseUrl(): string;
}


interface ApiStoreActions {
    createApiOptions(): ApiOptions;
    createRandomLoremUrl(): string;
}

const useApiStore: StoreDefinition<
    'apiStore',
    ApiStoreState,
    ApiStoreGetters,
    ApiStoreActions> = defineStore('apiStore', {
        state: (): ApiStoreState => ({
            apiKey: '',
            baseUrl: 'https://api.api-ninjas.com/v1/',
            loremApi: {
                loremIpsumUrl: 'loremipsum?max_length=',
                maxLength: 200
            }
        }),
        getters: {
            getBaseUrl(): string {
                return this.baseUrl;
            }
        },
        actions: {
            createApiOptions(): ApiOptions {
                return {
                    method: 'GET',
                    headers: { 'x-api-key': this.apiKey }
                };
            },
            createRandomLoremUrl(): string {
                const maxLengthPram: number = getRandomNumber(this.loremApi.maxLength);
                return this.baseUrl
                    .concat(this.loremApi.loremIpsumUrl)
                    .concat(maxLengthPram.toString());
            }
        }
    });

export default useApiStore;
export { ApiStoreState, ApiStoreGetters, ApiStoreActions }
