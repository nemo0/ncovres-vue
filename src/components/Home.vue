<template>
    <div id="wrapper">
      <Header />
      <Banner />
      <CovidData />
      <ResMenu />
      <About />
      <Footer />
    </div>
</template>

<script>
import Header from './Header'
import Banner from './Banner'
import ResMenu from './ResMenu'
import About from './About'
import CovidData from './CovidData'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    ResMenu,
    About,
    CovidData
  }
}
</script>

<style>
</style>
