import { Ref, ref } from 'vue';

interface DeleteComponent {
    root: Ref<HTMLElement | null>;
    deleted: Ref<boolean>;
    deleteComponent(): void;
}

export default function useDeleteComponent(): DeleteComponent {
    const root = ref(null);
    const deleted = ref(false);

    function deleteComponent() {
        deleted.value = true;
    }

    return {
        root,
        deleted,
        deleteComponent
    }
}
