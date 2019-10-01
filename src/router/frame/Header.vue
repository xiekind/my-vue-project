<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" id="title">But-anon</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
            <b-nav-item @click="redirect('/Login')" id="login">Sign In</b-nav-item>
            <b-nav-item @click="redirect('/Register')"  id="signup">Sign Up</b-nav-item>
          </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

      
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
export default {
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>
