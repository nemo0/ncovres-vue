<template>
  <!-- Main -->
  <div id="main">
    <!-- One -->
    <section id="one">
      <div class="inner">
        <header class="major">
          <h2>Other Downloadable Materials</h2>
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
              <tr v-for="o in data" v-bind:key="o.id">
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
    <Footer />
  </div>
</template>
<script>
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import Footer from "./Footer";
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
      const query = `*[_type == 'other']`;
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