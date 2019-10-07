<template>
  <div id="background" style="padding-top:20px;">
    <center>
      <div id="divLogin" class="col-sm-3 my-sm-5 border rounded">
        <form class="container">
          <center>
            <div class="h1">Login</div>
          </center>
          <hr>
          <div class="row">
            <label id="username" for="loginUsername">Email :</label>
            <input
              required
              v-model="username"
              name="email"
              class="form-control"
              placeholder="Enter Username"
              type="email"
            >
            <br>
          </div>
          <br>
          <div class="row">
            <label id="pass" for="loginPassword">Password :</label>
            <input
              required
              v-model="password"
              type="password"
              name="password"
              class="form-control"
              id="loginPassword"
              placeholder="Enter Password"
            >
          </div>
          <br>
          <button
            id="btnLogin"
            class="btn btn-success"
            @click="submit"
            style="margin-bottom:10px"
          >Login</button>

          <br>
        </form>
      </div>
    </center>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
template {
  background-image: url("https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
}
#username {
  color: $primary !important;
}
#pass {
  color: $primary !important;
}
#divLogin {
  background-image: url("https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
  margin-left: 0.5%;
}
</style>
<script>
// import $ from "jquery";

// import Swal from "sweetalert2";
// const Swal = require('sweetalert2')
// import swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import AUTH from "../services/auth";

// import ROUTER from "router";
export default {
  data() {
    AUTH;
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      AUTH.login(this.username, this.password);
      // let link = "http://localhost:3000/user";
      // $.ajax({
      //   url: link,
      //   method: "POST",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*"
      //   }
      // }).then(response => {
      //   alert(response.username);
      // });
    }
  }
};
/*

      if (this.username == "" && this.password == "") {
        Swal.fire({
          title: "No Inputs",
          text: "Please Provide Inputs",
          type: "error"
        });
      } else if (this.username != AUTH.getUser){
        Swal.fire({
          title: "Email Not Recognized",
          text: "Please Sign in first",
          type: "error"
        });
      }

*/
/*
    

*/
</script>