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
        path: '/Profile',
        name: 'Profile',
        component: resolve => require(['modules/Profile.vue'], resolve),
        meta: {
            tokenRequired: true
        },

    },
    {
        path: '/Logout',
        name: 'Logout',
        component: resolve => require(['modules/Logout.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/EditProfile',
        name: 'EditProfile',
        component: resolve => require(['modules/EditProfile.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
]
}
