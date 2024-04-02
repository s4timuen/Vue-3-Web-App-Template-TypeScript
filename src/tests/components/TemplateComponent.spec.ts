import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils';
import { waitFor } from '@testing-library/vue';
import TemplateComponent from '@/components/TemplateComponent.vue';
import { v4 as uuid } from 'uuid';
import { Pinia, createPinia } from 'pinia';
import i18n from '@/i18n/i18n.ts';
import { ComputedRef } from 'vue';

const pinia: Pinia = createPinia();

describe('Template', () => {
    let wrapper: VueWrapper | undefined = undefined;

    beforeEach(() => {
        wrapper = shallowMount(TemplateComponent, {
            global: {
                plugins: [i18n, pinia]
            },
            propsData: { id: uuid() }
        });
    });

    afterEach(() => {
        if (wrapper !== undefined) {
            wrapper.unmount();
        }
    });

    test('Change Description', async () => {
        if (wrapper) {
            const button: DOMWrapper<Element> = wrapper.find('.btn.btn--success');
            const textEl: DOMWrapper<Element> = wrapper.find('.template__text');
            const oldText: string = textEl.text();

            button.trigger('click');

            await waitFor(() => {
                expect(textEl.text()).not.toMatch(oldText);
            });
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });

    test('Button Text Change or Loading', () => {
        if (wrapper) {
            const button: DOMWrapper<Element> = wrapper.find('.btn.btn--success');
            const changeOrLoading: ComputedRef<'loading' | 'change'> = (wrapper.vm as any).changeOrLoading;

            expect(button.text()).toMatch(i18n.global.t('buttons.change'));
            expect(changeOrLoading).toMatch('change');

            button.trigger('click');

            waitFor(() => {
                expect(button.text()).toMatch(i18n.global.t('buttons.loading'));
                expect(changeOrLoading).toMatch('loading');
            });

            waitFor(() => {
                expect(button.text()).toMatch(i18n.global.t('buttons.change'));
                expect(changeOrLoading).toMatch('change');
            });
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });
});
