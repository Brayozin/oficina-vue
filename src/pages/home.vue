<template>
  <!-- /* eslint-disable */  -->
  <v-container style="background-color: #c1e1c1" fill-height fluid id="app">
    <v-row class="d-flex justify-content-center align-center">
      <Transition>
        <v-col v-if="logo" class="d-flex justify-center align-center" cols="12">
          <img alt="Vue logo" src="../assets/logo.png" width="15%" />
          <!-- <HelloWorld msg="Hello Vue in CodeSandbox!"/> -->
        </v-col>
      </Transition>
      <v-col
        class="d-flex justify-center overline"
        style="font-size: larger !important"
        cols="12"
      >
        <Transition>
          <v-btn
            v-show="!oqEhVue"
            text
            x-large
            class="white--text"
            @click="oqEhVue = !oqEhVue"
          >
            O que é Vue?
          </v-btn>
        </Transition>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center text-h6"
        style="letter-spacing: 2px"
      >
        <Transition>
          <p class="text-center" style="width: 50%" v-if="oqEhVue && !SPA">
            Vue é uma framework javascript de código-aberto, focado no
            desenvolvimento de interfaces de usuário e aplicativos de página
            única ou
            <span @click="(SPA = !SPA), (logo = false)">
              SPA(Single Page Application).
            </span>
          </p>
        </Transition>
      </v-col>
    </v-row>
    <Transition>
      <v-row v-show="SPA">
        <v-col class="d-flex justify-center align-center" cols="12">
          <img
            style="mix-blend-mode: multiply"
            src="../assets/spa.png"
            alt=""
            width="70%"
          />
          <span>
            <v-icon @click="$router.push({ path: '/spa-info' })" x-large
              >mdi-chevron-right</v-icon
            >
          </span>
        </v-col>
      </v-row>
    </Transition>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  data() {
    return {
      oqEhVue: false,
      SPA: false,
      logo: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-active {
  transition: opacity 2.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
