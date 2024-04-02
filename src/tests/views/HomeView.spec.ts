import { VueWrapper, shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import TemplateComponent from '@/components/TemplateComponent.vue';
import i18n from '@/i18n/i18n.ts';
import { v4 as uuid } from 'uuid';
import { MockInstance } from 'vitest';

describe('Home View', () => {
    let wrapper: VueWrapper | undefined = undefined;

    beforeEach(() => {
        wrapper = shallowMount(HomeView, {
            global: {
                plugins: [i18n]
            }
        });
    });

    afterEach(() => {
        if (wrapper !== undefined) {
            wrapper.unmount();
        }
    });

    test('Deleted Template ID Logged', () => {
        if (wrapper) {
            const id: string = uuid();
            const templateComponent: VueWrapper = wrapper.findComponent(TemplateComponent);
            const consoleLogSpy: MockInstance = vi.spyOn(console, 'log');

            templateComponent.vm.$emit('delete-template-info', id);

            expect(templateComponent.emitted('delete-template-info')).toBeTruthy();
            expect(templateComponent.emitted('delete-template-info')![0][0]).toMatch(id);
            expect(consoleLogSpy).toHaveBeenCalledWith(`ID: ${id}`);
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });
});
