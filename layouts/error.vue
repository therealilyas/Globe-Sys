<template>
  <div class="page_404">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>
            <div class="contant_box_404">
              <h3 class="h2">
                {{ $t("lost") }}
              </h3>
              <p>{{ $t("invalid") }}</p>
              <nuxt-link :to="localePath('/')" class="link_404">{{
                $t("navigateHome")
              }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page_404 {
  padding: 55px 0;
  background: #fff;
  font-family: "MuseoSansCyrl", sans-serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url("/img/error.gif");
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #0e7dc2;
  border-radius: 5px;
  margin: 20px 0;
  display: inline-block;
}

.contant_box_404 {
  margin-top: -50px;
}
</style>
