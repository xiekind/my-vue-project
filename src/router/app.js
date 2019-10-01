export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }, {
        path: '/Dashboard',
        name: 'Dashboard',
        component: resolve => require(['modules/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        },
    },
    {
        path: '/Subjects',
        name: 'Subjects',
        component: resolve => require(['modules/Subjects.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/PersonalInfo',
        name: 'PersonalInfo',
        component: resolve => require(['modules/PersonalInfo.vue'], resolve),
        meta: {
            tokenRequired: true
        },

    }]
}
