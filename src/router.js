import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './Pages/Coaches/CoachDetail.vue';
import CoachesList from './Pages/Coaches/CoachesList.vue';
import CoachRegistration from './Pages/Coaches/CoachRegistration.vue';
import ContactCoach from './Pages/Requests/ContactCoach.vue';
import RequestsRecieved from './Pages/Requests/RequestsRecieved.vue';
import NotFound from './Pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetail, children: [{
                path: 'contact', component: ContactCoach //coaches/id/contact
            }]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsRecieved },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;