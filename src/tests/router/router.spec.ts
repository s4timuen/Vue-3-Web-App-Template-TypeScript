import { createCustomRouter } from '@/router/router.ts';
import { RouteRecordNormalized, Router } from 'vue-router';

describe('Router', () => {
    const router: Router = createCustomRouter('memory');
    const routes: RouteRecordNormalized[] = router.getRoutes();

    test('Available Routes', async () => {
        if (router) {
            for (const route of routes) {
                if (route.name !== 'PageNotFound') {
                    await router.push(route.path);
                    await router.isReady();

                    const { default: expectedComponent } = await import(`@/views/${String(route.name)}.vue`);

                    expect(router.currentRoute.value.path).toMatch(route.path);
                    expect(router.currentRoute.value.matched[0].components!.default).toBe(expectedComponent);
                }
            };
        } else {
            expect(router).not.toBe(undefined);
        }
    });

    test('Page Not Found', async () => {
        if (router) {
            const routeName = 'PageNotFound';
            const nonExistingRoutes = ['/xyz', '/123', '/soiiozvhvbc', '/gibberish'];

            for (const route of nonExistingRoutes) {
                await router.push(route);

                const { default: expectedComponent } = await import(`@/views/${routeName}.vue`);

                expect(router.currentRoute.value.path).toMatch(route);
                expect(router.currentRoute.value.matched[0].components!.default).toBe(expectedComponent);
            };
        } else {
            expect(router).not.toBe(undefined);
        }
    });
});
