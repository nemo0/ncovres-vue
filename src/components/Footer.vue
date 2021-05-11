<template>
  <!-- Footer -->
  <footer id="footer">
    <div class="inner">
      <ul class="icons">
        <li>
          <a
            href="https://vercel.com/?utm_source=[nemo0]&utm_campaign=oss"
            class="icon brands alt"
            ><img
              src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
              alt=""
              class="sponsor-list"
          /></a>
        </li>
        <li>
          <a href="https://www.sanity.io/" class="icon brands alt"
            ><img
              src="https://www.sanity.io/static/images/logo.png"
              alt=""
              class="sponsor-list"
          /></a>
        </li>
      </ul>
      <ul class="copyright">
        <li><a href="https://kishalay.org">&copy; Kishalay</a></li>
        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
        <li><a href="https://github.com/nemo0/ncovres-vue">GitHub</a></li>
        <li><router-link to="/contributors">Contributors</router-link></li>
        <li><a href="https://forms.gle/Pnm4RLQv41SJmv2g8">Submit Lead</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.sponsor-list {
  height: 30px;
  width: auto;
}
</style>