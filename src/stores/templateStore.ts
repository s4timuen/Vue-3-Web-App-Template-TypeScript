import { StoreDefinition, defineStore } from 'pinia';

interface TemplateStoreState {
    title: string;
    description: string;
}

interface TemplateStoreGetters {
    getTitle(): string;
    getDescription(): string;
}

interface TemplateStoreActions {
    setDescription(description: string): void;
}

const useTemplateStore: StoreDefinition<
    'templateStore',
    TemplateStoreState,
    TemplateStoreGetters,
    TemplateStoreActions> = defineStore('templateStore', {
        state: (): TemplateStoreState => ({
            title: 'Vue Web-App',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, delectus nam corrupti quae vel quas earum sit itaque tenetur eum.'
        }),
        getters: {
            getTitle(): string {
                return this.title;
            },
            getDescription(): string {
                return this.description;
            }
        },
        actions: {
            setDescription(description: string): void {
                this.description = description;
            }
        }
    });

export default useTemplateStore;
export { TemplateStoreState, TemplateStoreGetters, TemplateStoreActions }
