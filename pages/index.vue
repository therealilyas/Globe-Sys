<template>
  <main>
    <HomeBanner />
    <HomeAbout />
    <HomeServices />
    <HomeCategories />
    <HomeNews />
  </main>
</template>

<script>
import HomeBanner from "../components/pages/Home/HomeBanner/index";
import HomeAbout from "../components/pages/Home/HomeAbout/index";
import HomeServices from "../components/pages/Home/HomeServices/index";
import HomeCategories from "../components/pages/Home/HomeCategories/index";
import HomeNews from "../components/pages/Home/HomeNews/index";

export default {
  components: {HomeNews, HomeCategories, HomeServices, HomeAbout, HomeBanner}
}
</script>
