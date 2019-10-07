<template>
  <div id="card">
    <center>
      <div>
        <h1 id="kurses">Courses:</h1>
      </div>
      <hr>
      <b-card id="b-card" >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Course</th>
              <th scope="col">Year</th>
              <th scope="col">Schedule</th>
              <th scope="col">Room</th>
              <th scope="col">Teacher</th> 
              <!-- <th scope="col">Action</th>             -->
            </tr>
          </thead>
          <tbody v-for="(item, index) in this.rows" :key="index">
            <tr>
              <td>{{ item.course }}</td>
              <td>{{ item.year }}</td>
              <td>{{ item.schedule }}</td>
              <td>{{ item.room }}</td>
              <td>{{ item.teacher }}</td>
              <!-- <td><b-button variant="outline-primary" @click="remove()">Remove</b-button></td> -->
            </tr>
          </tbody>
        </table>
      </b-card>
      <hr>
      <div id="addCourse">
        <b-button  style="width:100px"  block variant="outline-primary" v-b-toggle.collapse-1 class="m-1" >Add Course</b-button>
        <b-collapse id="collapse-1">
          <b-card>
            <b-form-group>
              <label id="course">Course:</label>
              <b-form-input required v-model="contents.course" id="subject"></b-form-input>
              <br>
              <label id="year">Year:</label>
              <b-form-input required v-model="contents.year" id="year"></b-form-input>
              <br>
              <label id="sched">Schedule:</label>
              <b-form-input required v-model="contents.schedule" id="time"></b-form-input>
              <br>
              <label id="room">Room:</label>
              <b-form-input required v-model="contents.room" id="room"></b-form-input>
              <br>
              <label id="teacher">Teacher:</label>
              <b-form-input required v-model="contents.teacher" id="teacher"></b-form-input>
              <br>
              <b-button variant="primary" @click="addItem">Add Subject</b-button>
            </b-form-group>
          </b-card>
        </b-collapse>
      </div>
      <div id="removeCourse">
        <b-button style="width:100px" block variant="outline-primary" v-b-toggle.collapse-2 class="m-1">Remove Course</b-button>
        <b-collapse id="collapse-2">
          <b-card>
            <b-form-group>
              Course:<b-form-input required v-model="deleteContent.deleteCourse" id="subject"></b-form-input>
              <br>
              <b-button variant="primary" @click="remove">Remove</b-button>
            </b-form-group>
          </b-card>
        </b-collapse>
      </div>    
    </center>
  </div>
</template>


<!--<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->

<style>
#card {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}
.table,#b-card{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  overflow-x:auto;
}
#kurses {
  text-align: center;
}
</style>

<script>
// import swal from 'sweetalert';
import AUTH from 'services/auth'
export default {
  data() {
    return {
      auth: AUTH,
      rows: [],
      deleteContent: {
        deleteCourse: "",
      },
      contents: {
        course: "",
        year: "",
        schedule: "",
        room: "",
        teacher: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        course: this.contents.course,
        year: this.contents.year,
        schedule: this.contents.schedule,
        room: this.contents.room,
        teacher: this.contents.teacher,
      };
      AUTH.addCourse(this.contents.course,this.contents.year,this.contents.schedule,this.contents.room,this.contents.teacher)
      this.rows.push(object);
      this.contents.course = "";
      this.contents.year= "",
      this.contents.schedule = "";
      this.contents.room = "";
      this.contents.teacher = "";
      
    },
    remove(){
      for(let i=0;i<this.rows.length;i++){
        if(this.rows[i].course === this.deleteContent.deleteCourse){
          this.rows.splice(this.rows.indexOf((this.rows[i]),1))
        }
      }
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