<template>
  <div id="container">
    <div class="jumbotron">
      <h1>Personal Information</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require('assets/me-4.png')" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Personal Info">
              <hr>
              <b-card-text>
                <h6>Username: {{username}}</h6>
                <h6>Email: {{email}}</h6>
                <h6 type="password">Password: {{password}}</h6>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <br>
      <center>
        <b-button @click="redirect('/EditProfile')" variant="success">Edit Profile</b-button>
      </center>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/colors.scss";
.jumbotron {
  padding: 20px;
  text-align: center;
}
#card {
  margin-top: 50px;
  margin-left: 380px;
  //  color: $primary !important;
}
</style>
<script>
import ROUTER from "router";
export default {
  // name: "container",
  data() {
    return {
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password")
    };
  },
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>
