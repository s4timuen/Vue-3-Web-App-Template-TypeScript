import { VueWrapper, shallowMount } from '@vue/test-utils';
import PageNotFound from '@/views/PageNotFound.vue';
import i18n from '@/i18n/i18n.ts';

describe('Page Not Found View', () => {
    let wrapper: VueWrapper | undefined = undefined;

    beforeEach(() => {
        wrapper = shallowMount(PageNotFound, {
            global: {
                plugins: [i18n]
            },
        });
    });

    afterEach(() => {
        if (wrapper !== undefined) {
            wrapper.unmount();
        }
    });

    test('Component Rendered', () => {
        if (wrapper) {
            expect(wrapper.exists()).toBe(true);
            expect(wrapper.text()).toMatch(i18n.global.t('views.page-not-found.text'));
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });
});
