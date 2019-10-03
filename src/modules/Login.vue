<template>
  <div id="background" style="padding-top:20px;">
    <center>
      <div  id="divLogin" class="col-sm-3 my-sm-5 border rounded">
        <form class="container">
          <center>
            <div class="h1">Login</div>
          </center>
          <hr />
          <div class="row">
            <label id="username" for="loginUsername">Email : </label>
            <input
              required
              v-model="username"
              name="email"
              class="form-control"
              placeholder="Enter Username"
              type="email"
            />
            <br />
          </div> 
          <br />
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
            />
          </div>
          <br />
          <button
            id="btnLogin"
            class="btn btn-success"
            @click="submit"
            style="margin-bottom:10px"
          >Login</button>
          

          <br />
        </form>
      </div>
    </center>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
template{
background-image:url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
}
#username {
  color: $primary !important;
}
#pass {
  color: $primary !important;
}
#divLogin {
background-image:url('https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80');
margin-left:0.5%
}
</style>
<script>
// import $ from "jquery";
import AUTH from "../services/auth";
export default {
  data() {
    AUTH;
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      AUTH.login(this.username, this.password);
      // // alert('hi')
      // let link = "http://localhost:3000/user";
      // $.ajax({
      //   url: link,
      //   method: "POST",
      //   headers: {
      //     "Acces-Control-Flow-Origin ": "*"
      //   }
      // }).then(response => {
      //   alert(response.username)
      // });
    },
  }
};
</script>