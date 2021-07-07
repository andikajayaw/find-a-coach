// import Vuex from 'vuex';
import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesModule
    },
});

export default store;