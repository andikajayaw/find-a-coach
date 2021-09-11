import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './Pages/Coaches/CoachDetail.vue';
import CoachesList from './Pages/Coaches/CoachesList.vue';
import CoachRegistration from './Pages/Coaches/CoachRegistration.vue';
import ContactCoach from './Pages/Requests/ContactCoach.vue';
import RequestsRecieved from './Pages/Requests/RequestsRecieved.vue';
import UserAuth from './Pages/Auth/UserAuth.vue';
import NotFound from './Pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetail, props: true, children: [{
                path: 'contact', component: ContactCoach //coaches/id/contact
            }]
        },
        { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
        { path: '/requests', component: RequestsRecieved, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
})

export default router;