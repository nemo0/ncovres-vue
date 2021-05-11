<template>
  <!-- Main -->
  <div id="main">
    <!-- One -->
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>List of Contributors</h2>
        </header>
        <div style="padding: 1.5rem">
          <p>
            We are extremely thankful to each and everyone who shared resources
            and leads with us.
          </p>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Social Media Handle(if any)</th>
              </tr>
            </thead>
            <tbody v-if="isLoading">
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </tbody>
            <tbody v-if="err === false">
              <tr v-for="o in data" v-bind:key="o.id">
                <td>{{ o.name }}</td>
                <td v-if="o.url !== undefined">
                  <a :href="`${o.url}`">{{ o.url }}</a>
                </td>
                <td v-else>No Link Available</td>
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

const client = sanityClient({
  projectId: "jbbh11um",
  dataset: "production",
  apiVersion: "2021-05-02", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_AUTH_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export default {
  name: "Contributors",
  components: {
    Footer,
  },
  data() {
    return {
      err: false,
      data: null,
      isLoading: false,
    };
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      const query = `*[_type == 'contributors']`;
      try {
        const res = await client.fetch(query);
        this.data = res;
        this.isLoading = false;
        console.log(this.data);
        this.err = false;
      } catch (err) {
        console.log(err);
        this.isLoading = false;
        this.err = true;
        console.log(this.err);
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style scoped>
</style>