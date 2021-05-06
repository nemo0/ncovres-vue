<template>
  <!-- Main -->
  <div id="main">
    <!-- One -->
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>Database of NGOs and Volunteers</h2>
        </header>
        <p></p>

        <div style="padding: 1.5rem"></div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Details</th>
                <th>File Link(if any)</th>
                <th>Image Link(if any)</th>
              </tr>
            </thead>
            <tbody v-if="isLoading">
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </tbody>
            <tbody v-if="err === false">
              <tr v-for="o in other" v-bind:key="o.id">
                <td>{{ o.details }}</td>
                <td v-if="o.file !== undefined">
                  <a :href="`${getUrlfromId(o.file.asset._ref + '')}`"
                    >Download</a
                  >
                </td>
                <td v-else>No File Available</td>
                <td v-if="o.image !== undefined">
                  <a :href="`${imageUrlFor(o.image.asset._ref + '')}`"
                    >Download</a
                  >
                </td>
                <td v-else>No File Available</td>
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
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "jbbh11um",
  dataset: "production",
  apiVersion: "2021-05-02", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_AUTH_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const imageBuilder = imageUrlBuilder(client);

export default {
  name: "OtherRes",
  data() {
    return {
      district: null,
      err: false,
      other: null,
      isLoading: false,
    };
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      try {
        const res = await axios.get(
          `https://ncov-node-api.herokuapp.com/api/v1/other/`
        );
        this.other = res.data;
        this.isLoading = false;
        console.log(this.other);
        this.err = false;
      } catch (err) {
        console.log(err);
        this.isLoading = false;
        this.err = true;
        console.log(this.err);
      }
    },
    getUrlfromId(ref) {
      // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
      // We don't need the first part, unless we're using the same function for files and images
      const [_file, id, extension] = ref.split("-");
      console.log(_file);
      return `https://cdn.sanity.io/files/jbbh11um/production/${id}.${extension}`;
    },
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
  mounted() {
    this.loadData();
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