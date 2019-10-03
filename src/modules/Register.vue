<template>
  <center>
    <div id="divSignIn" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
      <form class="container">
        <center>
          <h1>Register</h1>
        </center>
        <hr />
        <div>
          <div class="row">
            <label id="username" for="inputfname">Email :</label>
            <input
              v-model="content.email"
              class="form-control"
              name="email"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <br />
          <div class="row">
            <br />
            <label id="email" for="inputEmail">Username :</label>
            <input
              required
              class="form-control"
              v-model="content.username"
              placeholder="Enter Username"
            />
          </div>
          <br />
          <div class="row">
            <label id="pass" for="inputPassword">Password :</label>
            <input
              required
              type="password"
              v-model="content.password"
              class="form-control"
              name="password"
              id="inputPassword4"
              placeholder="Password"
            />
            <span></span>
            <br />
            <br />
          </div>
          <div class="row">
            <label id="conpass" for="inputConPassword">Confirm Password :</label>
            <input
              required
              type="password"
              class="form-control"
              id="inputConPassword"
              placeholder="Confirm Password"
            />
            <span></span>
            <br />
            <br />
          </div>
        </div>
        <button id="btnSubmit" type="submit" class="btn btn-primary" @click="register()">
          <h6>Register</h6>
        </button>
        <br />
        <p id="had">Already have an account?</p>
        <router-link to="/Login">Login</router-link>
        <br />
      </form>
    </div>
  </center>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
#divSignIn {
  background-image: url("https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
  margin-left: 0.5%;
}
#had {
  color: $primary !important;
}
</style>
<script>
import $ from "jquery";
import AUTH from "services/auth";
export default {
  data() {
    return {
      auth: AUTH,
      content: {
        username: "",
        email: "",
        password: "",
        conpassword: ""
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.content.username),
        sessionStorage.setItem("Email", this.content.email),
        sessionStorage.setItem("Password", this.content.password),
        AUTH.register(this.content.email, this.content.password);

      let link = `http://localhost:3000/db/create/${this.username}/${this.email}/${this.password}`;
      $.ajax({
          url: link,
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          alert(response.username);
        });
    }
  }
};
</script>