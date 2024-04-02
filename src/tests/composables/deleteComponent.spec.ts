import useDeleteComponent from '@/composables/deleteComponent.ts';
import { expect } from 'vitest';

describe('Use Delete Component', () => {

    test('Delete Component', () => {
        const { root, deleted, deleteComponent } = useDeleteComponent();

        expect(root.value).toBeNull();
        expect(deleted.value).toBeFalsy();
        expect(deleteComponent).toBeTypeOf('function');

        deleteComponent();

        expect(deleted.value).toBeTruthy();
    });
});
