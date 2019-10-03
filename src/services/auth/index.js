import ROUTER from 'router'
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        this.user = user
    },
    register(email, password) {
        this.registeredUser.push({
            email: email,
            password: password
        })
        ROUTER.push("/Login");
    },
    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/Dashboard')
                return this.registeredUser[i]
                // token = sessionStorage.getItem('tokenRequired')

            }
            // if (this.registeredUser[i].username === "jude@gmail.com" && this.registeredUser[i].password === "jude") {
            //     ROUTER.push('/Dashboard')
            //     return this.registeredUser[i]

            // }
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/Login')
    }

}