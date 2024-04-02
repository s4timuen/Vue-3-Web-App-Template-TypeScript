import { setActivePinia, createPinia, Store } from 'pinia';
import useApiStore, { ApiStoreActions, ApiStoreGetters, ApiStoreState } from '@/stores/apiStore.ts';
import { ApiOptions } from '@/models/apiOptions.ts';
import { expect } from 'vitest';
import { escapeRegExUrls } from '@/utils/utils.ts';

describe('API Store', () => {
    let store: Store<"apiStore", ApiStoreState, ApiStoreGetters, ApiStoreActions> | undefined = undefined;

    beforeEach(() => {
        setActivePinia(createPinia());
        store = useApiStore();
    });

    test('Create API Options', () => {
        if (store) {
            const expectedOptions: ApiOptions = {
                method: 'GET',
                headers: { 'x-api-key': expect.any(String) }
            };
            const options: ApiOptions = store.createApiOptions();

            expect(options).toEqual(expectedOptions);
        } else {
            expect(store).not.toBe(undefined);
        }
    });

    test('Create Random Lorem Url', () => {
        if (store) {
            const expectedUrl: RegExp
                = new RegExp(`${escapeRegExUrls(store.baseUrl)}${escapeRegExUrls(store.loremApi.loremIpsumUrl)}\\d+`);

            const url: string = store.createRandomLoremUrl();

            expect(url).toMatch(expectedUrl);
        } else {
            expect(store).not.toBe(undefined);
        }
    });
});
