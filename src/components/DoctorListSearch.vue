<template>
  <!-- Main -->
  <div id="main">
    <!-- One -->
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>Doctors Available on Phone</h2>
        </header>
        <p></p>
        <select
          name="demo-category"
          id="demo-category"
          v-model="district"
          @change="onChange($event)"
        >
          <option value="alipurduar">Alipurduar</option>
          <option value="bankura">Bankura</option>
          <option value="birbhum">Birbhum</option>
          <option value="cooch-behar">Cooch Behar</option>
          <option value="south-dinajpur">South Dinajpur</option>
          <option value="darjeeling">Darjeeling</option>
          <option value="hooghly">Hooghly</option>
          <option value="howrah">Howrah</option>
          <option value="jalpaiguri">Jalpaiguri</option>
          <option value="jhargram">Jhargram</option>
          <option value="kalimpong">Kalimpong</option>
          <option value="kolkata">Kolkata</option>
          <option value="malda">Malda</option>
          <option value="murshidabad">Murshidabad</option>
          <option value="Nadia">nadia</option>
          <option value="north-24-parganas">North 24 Parganas</option>
          <option value="west-medinipur">West Medinipur</option>
          <option value="bardhaman">Bardhaman</option>
          <option value="east-medinipur">East Medinipur</option>
          <option value="purulia">Purulia</option>
          <option value="south-24-parganas">South 24 Parganas</option>
          <option value="north-dinajpur">North Dinajpur</option>
          <option value="west-bengal">West Bengal</option>
        </select>

        <div style="padding: 1.5rem"></div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Timing</th>
              </tr>
            </thead>
            <tbody v-if="isLoading">
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </tbody>
            <tbody v-if="err === false">
              <tr v-for="doctor in docData" v-bind:key="doctor.id">
                <td>
                  {{ doctor.name }}
                  <span v-if="doctor.doctorVerified"
                    ><img
                      src="images/verified.png"
                      alt=""
                      srcset=""
                      class="verified"
                  /></span>
                </td>
                <td>{{ doctor.address }}</td>
                <td>
                  <a :href="`tel:${doctor.phone}`">{{ doctor.phone }}</a>
                </td>
                <td>{{ doctor.timing }}</td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="5" v-if="err">No Data Available</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DoctorListSearch",
  data() {
    return {
      district: null,
      err: false,
      docData: null,
      isLoading: false,
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Address",
          field: "address",
        },
        {
          label: "Contact Number",
          field: "phone",
        },
        {
          label: "Timing",
          field: "timing",
        },
      ],
    };
  },
  methods: {
    async onChange(e) {
      this.isLoading = true;
      console.log(e.target.value); // should show your selected value
      try {
        const res = await axios.get(`/api/v1/doctor/${e.target.value}`);
        this.docData = res.data;
        this.isLoading = false;
        console.log(this.docData);
        this.err = false;
      } catch (err) {
        console.log(err);
        this.isLoading = false;
        this.err = true;
        console.log(this.err);
      }
    },
  },
};
</script>
<style scoped>
span {
  padding: 0 10px;
}
img.verified {
  height: 28px;
  width: 28px;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>