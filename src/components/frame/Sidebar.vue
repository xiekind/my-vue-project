<template>

  <div name="Sidebar">.
    <sidebar-menu :menu="menu"></sidebar-menu>

  </div>

</template>

<style scoped>
.v-sidebar-menu{
    height: 93%;
    margin-top: 56px;
}
</style>

 
<script>
// import { Slide } from "vue-burger-menu";
// import ROUTER from 'router'
// import AUTH from 'service/auth'

export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Navigation Bar",
          hiddenOnCollapse: true
        },
        {
          title: "Dash Board",
          href: "/Dashboard",
          icon: 'fa fa-user'
        },
        {
          title: "Profile",
          href: "/Profile",
          icon: 'fa fa-user'
        },
        {
          title: "Subjects",
          href: "/Subjects",
          icon: 'fa fa-user'
        },
        {
          title: "Logout",
          href: "/Logout",
          icon: 'fa fa-user'
        }
      ]
    };
  }
};
</script> 
