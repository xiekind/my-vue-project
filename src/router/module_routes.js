import AUTH from '../services/auth'
// import { Session } from 'inspector'

let beforeEnter = (to, from, next) => {
    // AUTH.currentPath = to.path
    if (to.meta.tokenRequired === true) {
        // let token = sessionStorage.getItem("Username")
        if (AUTH.user!==null) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        next()
    }
}

var devRoutes = []
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for (let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}

let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['modules/Login.vue'], resolve),
        beforeEnter: beforeEnter
    }
]
routes = routes.concat(devRoutes)
export default {
    routes: routes
}