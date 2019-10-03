<template>
  <Slide>
    <a id="dashboardID" href="/Dashboard">
      <span>Dashboard</span>
    </a>
    <a id="profileID" href="/PersonalInfo">
      <span>Profile</span>
    </a>
    <a id="subjectID" href="/Subjects">
      <span>Subjects</span>
    </a>
    <a id="logoutID" href="/Login">
      <span>Logout</span>
    </a>
  </Slide>
</template>
 
<script>
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide
  },
  data() {
    return {};
  }
};
</script> 
