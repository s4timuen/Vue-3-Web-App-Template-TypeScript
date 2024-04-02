import { setActivePinia, createPinia, Store } from 'pinia';
import useTemplateStore, { TemplateStoreActions, TemplateStoreGetters, TemplateStoreState } from '@/stores/templateStore.ts';
import { expect } from 'vitest';

describe('Template Store', () => {
    let store: Store<'templateStore', TemplateStoreState, TemplateStoreGetters, TemplateStoreActions>
        | undefined = undefined;

    beforeEach(() => {
        setActivePinia(createPinia());
        store = useTemplateStore();
    });

    test('Getter Title', () => {
        if (store) {
            expect(store.getTitle).toMatch(store.title);
        } else {
            expect(store).not.toBe(undefined);
        }
    });

    test('Getter Description', () => {
        if (store) {
            expect(store.getDescription).toMatch(store.description);
        } else {
            expect(store).not.toBe(undefined);
        }
    });

    test('Action Set Description', () => {
        if (store) {
            const oldDescription = store.getDescription;
            const newDescription = 'test';

            store.setDescription(newDescription);

            expect(store.getDescription).not.toMatch(oldDescription);
            expect(store.getDescription).toMatch(newDescription);
        } else {
            expect(store).not.toBe(undefined);
        }
    });
});
