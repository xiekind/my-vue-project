<template>
  <div>
    <div class="jumbotron">
      <h1>Dashboard</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <center>
          <b-card-img id="image" :src="require('assets/hacker.png')" class="rounded-0"></b-card-img>
          <b-row no-gutters>
            <b-card-body>
              <h1>Hi {{username}}</h1>
              <h3>Welcome to Lucifer Institute of Technology University</h3>
            </b-card-body>
          </b-row>
        </center>
      </b-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import"assets/colors.scss";
#card {
  margin-left: $margin-left !important;
  margin-top: $margin-top !important; 
}
.jumbotron{
    padding: $padding !important;
    text-align: $text-align !important;
    color: $primary !important;
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
  },
};
</script>