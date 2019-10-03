<template>
  <div>
    <div class="jumbotron">
      <h1>Dashboard</h1>
    </div>
<center>
      <b-card-img
        id="image"
        :src="require('assets/me-4.png')"
        style="border-radius:50px;width:20px"
        class="rounded-5"
      >
      </b-card-img>
      <b-row no-gutters>
        <b-card-body></b-card-body>
      </b-row>
 </center>
    <div class="text-center">
      <h1>{{username}}</h1>
      <h3>Welcome To Your Wall</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/colors.scss";
#card {
  margin-left: $margin-left !important;
  margin-top: $margin-top !important;
}
.jumbotron {
  padding: $padding !important;
  text-align: $text-align !important;
  color: $black !important;
}
#image {
  width: $width !important;
  height: $height !important;
}
</style>

<script>
export default {
  name: "card",
  data() {
    return {
      username: sessionStorage.getItem("Username")
    };
  }
};
</script>