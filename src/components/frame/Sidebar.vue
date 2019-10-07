<template>
<div name="Sidebar">

    <sidebar-menu :menu="menu"></sidebar-menu>

</div>
</template>

<style scoped>
.v-sidebar-menu{
  margin-top:52px;
  height: 90%;
}
</style>

 
<script>
// import { Slide } from "vue-burger-menu";
// import ROUTER from 'router'
// import AUTH from 'service/auth'

export default {
  name:'Sidebar',
  components: {

  },
  data() {
    return {
      
      menu:[
        {
        header : true,
        title: 'Navigation Bar',
        hiddenOnCollapse : true
      },
      {
        title:'Dash Board',
        href:'/Dashboard'
      },
      {
        title:'Profile',
        href:'/Profile'
      },
      {
        title:'Subjects',
        href:'/Subjects'
      },
      {
        title:'Logout',
        href:'/Logout',
      }
      ]
    };
  },
  methods:{
    out(e){
      e.preventDefault()
    }
  }
};
</script> 
