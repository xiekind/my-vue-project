<template>
  <div>
    <div class="jumbotron">
      <h1>Subjects</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <center>
            <b-card
              text-align
              id="card1"
              img-top
              tag="article"
              style="max-width: 40rem;"
              class="mb-2"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">SUBJECT</th>
                    <th scope="col">TEACHER</th>
                    <th scope="col">TIME</th>
                    <th scope="col">DAY</th>
                    <th scope="col">VENUE</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody v-for="(item, index) in this.rows" :key="index">
                  <tr>
                    <td>{{ item.subject }}</td>
                    <td>{{ item.teacher }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.day }}</td>
                    <td>{{ item.room }}</td>
                    <td> <b-button @click="remove(item.subject)">remove </b-button> </td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </center>
        </div>
        <div class="col">
          <center>
            <b-card
              text-align
              id="card"
              img-top
              tag="article"
              style="max-width: 30rem;"
              class="mb-2"
            >
              <b-form-group label-for="input-lg">
                <label id="Subject">Subject:</label>
                <b-form-input v-model="content.subject" id="subject" size="sm"></b-form-input>
                <label id="teacher">Teacher:</label>
                <b-form-input v-model="content.teacher" id="teacher" size="sm"></b-form-input>
                <label id="time">Time:</label>
                <b-form-input v-model="content.time" id="time" size="sm"></b-form-input>
                <label id="time">Day:</label>
                <b-form-input v-model="content.day" id="day" size="sm"></b-form-input>
                <label id="room">Venue:</label>
                <b-form-input v-model="content.room" id="room" size="sm"></b-form-input>
                <br>
                <b-button variant="primary" @click="addItem">Add Subject</b-button>
              </b-form-group>
            </b-card>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->

<style>
.jumbotron {
  padding: 20px;
  text-align: center;
}

body {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}
</style>

<script>
// import swal from 'sweetalert';

export default {
  data() {
    return {
      rows: [],
      content: {
        subject: "",
        teacher: "",
        time: "",
        day: "",
        room: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        subject: this.content.subject,
        teacher: this.content.teacher,
        time: this.content.time,
        day: this.content.day,
        room: this.content.room
      };
      this.rows.push(object);
      this.content.subject = "";
      this.content.teacher = "";
      this.content.time = "";
      this.content.day = "";
      this.content.room = "";
    },
    remove(subject) {
      this.rows.splice(0, 1);
      console.log(subject);
    }
  }
};

// (async () => {

// const { value: formValues } = await Swal.fire({
//   title: 'Multiple inputs',
//   html:
//     '<input id="swal-input1" class="swal2-input">' +
//     '<input id="swal-input2" class="swal2-input">',
//   focusConfirm: false,
//   preConfirm: () => {
//     return [
//       document.getElementById('swal-input1').value,
//       document.getElementById('swal-input2').value
//     ]
//   }
// })

// if (formValues) {
//   Swal.fire(JSON.stringify(formValues))
// }

// })()
</script>