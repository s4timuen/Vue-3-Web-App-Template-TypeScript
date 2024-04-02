import { VueWrapper, shallowMount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';
import i18n from '@/i18n/i18n.ts';

describe('About View', () => {
    let wrapper: VueWrapper | undefined = undefined;

    beforeEach(() => {
        wrapper = shallowMount(AboutView, {
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
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });
});
