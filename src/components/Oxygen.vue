<template>
  <!-- Main -->
  <div id="main">
    <!-- One -->
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>Database of Oxygen Suppliers</h2>
        </header>
        <p></p>
        <select
          name="demo-category"
          id="demo-category"
          v-model="district"
          @change="onChange($event)"
        >
          <option value="district">-- Select District --</option>
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
              </tr>
            </thead>
            <tbody v-if="isLoading">
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </tbody>
            <tbody v-if="err === false">
              <tr v-for="supplier in data" v-bind:key="supplier.id">
                <td>
                  {{ supplier.name }}
                  <span v-if="supplier.verified" class="verified-span"
                    ><abbr title="Verified"
                      ><img
                        src="images/verified.png"
                        alt=""
                        srcset=""
                        class="verified" /></abbr
                  ></span>
                </td>
                <td>{{ supplier.address }}</td>
                <td>
                  <a :href="`tel:${supplier.phone}`">{{ supplier.phone }}</a>
                </td>
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
    <Footer />
  </div>
</template>
<script>
import sanityClient from "@sanity/client";
import Footer from "./Footer";
export default {
  name: "OxygenSearch",
  components: {
    Footer,
  },
  data() {
    return {
      district: "district",
      err: false,
      data: null,
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
      ],
    };
  },
  methods: {
    async onChange(e) {
      this.isLoading = true;
      let area = e.target.value;
      const query = `*[_type == 'oxygen' && district == "${area}"]`;
      // console.log(e.target.value); // should show your selected value
      const client = sanityClient({
        projectId: "jbbh11um",
        dataset: "production",
        apiVersion: "2021-05-02", // use current UTC date - see "specifying API version"!
        token: process.env.SANITY_AUTH_TOKEN, // or leave blank for unauthenticated usage
        useCdn: true, // `false` if you want to ensure fresh data
      });
      try {
        const response = await client.fetch(query);
        this.data = response;
        this.isLoading = false;
        if (this.data.length < 1) {
          this.noData = true;
          this.err = true;
        } else this.err = false;
      } catch (err) {
        this.err = true;
        console.log(this.err);
        this.isLoading = false;
      }
    },
  },
};
</script>