<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" id="title">But-anon</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
            <b-nav-item @click="redirect('/Login')" id="login" v-if="auth.user === null">Login</b-nav-item>
            <b-nav-item @click="redirect('/Register')"  id="signup" v-if="auth.user === null">Sign Up</b-nav-item>
          </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
#title {
  color: $warning !important;
}
 #login{
          color: $warning !important;
      }

</style>
<script>
import ROUTER from "router";
import AUTH from 'services/auth'
export default {
  data(){
    return {
      auth:AUTH
    }
  },
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>
