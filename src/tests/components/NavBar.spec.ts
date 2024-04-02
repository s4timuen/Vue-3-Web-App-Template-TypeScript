import { DOMWrapper, VueWrapper, shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';
import i18n from '@/i18n/i18n.ts';
import { createCustomRouter } from '@/router/router.ts';
import { RouteRecordNormalized, Router } from 'vue-router';

describe('NavBar Component', () => {
    const router: Router = createCustomRouter('memory');
    let wrapper: VueWrapper | undefined = undefined;

    beforeEach(() => {
        wrapper = shallowMount(NavBar, {
            global: {
                plugins: [i18n, router]
            },
        });
    });

    afterEach(() => {
        if (wrapper !== undefined) {
            wrapper.unmount();
        }
    });

    test('Links Available', () => {
        if (wrapper) {
            const routes: RouteRecordNormalized[] = router.getRoutes();
            const links: VueWrapper<any, any>[] = wrapper.findAllComponents({ name: 'RouterLink' });

            links.forEach((link: VueWrapper<any, any>, index: number) => {
                expect(link.props().to).toMatch(routes[index].path);
            });
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });

    test('Localization Available', () => {
        if (wrapper) {
            const locales: DOMWrapper<Element>[] = wrapper.findAll('.locale__selection option');
            const availableLocales: ('en' | 'de')[] = i18n.global.availableLocales;

            availableLocales.forEach((locale: 'en' | 'de', index: number) => {
                expect(locale).toMatch(locales[index].text());
            });
        } else {
            expect(wrapper).not.toBe(undefined);
        }
    });
});
