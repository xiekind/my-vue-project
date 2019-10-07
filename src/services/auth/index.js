import ROUTER from 'router';
import Swal from "sweetalert2";

export default {
    user: null,
    registeredUser: [],
    courses: [],
    setUser(user) {
        this.user = user
    },

    register(email, password) {
        this.registeredUser.push({
            email: email,
            password: password
        })
        ROUTER.push('/login')
    },
    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                this.setUser(email)
                return this.registeredUser[i]
            } else {
                alert("Email or Password is incorrect!")
            }
        }
        return null
    },
    logout() {
        this.user = null
        Swal.fire({
            title: "Successfuly OUT!",
            type: "success"
        });
        ROUTER.push('/login')
    },
    addCourse(course, year, schedule, room, teacher) {
        this.courses.push({
            course: course,
            year: year,
            schedule: schedule,
            room: room,
            teacher: teacher,
        });
    },
    save(username, email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            this.registeredUser[i].username = username,
                this.registeredUser[i].email = email,
                this.registeredUser[i].password = password
        }
        Swal.fire({
            title: "Successfuly Changed!",
            type: "success"
        });
        ROUTER.push('/Profile')
    },
}