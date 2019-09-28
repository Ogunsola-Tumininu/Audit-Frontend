<template>
  <div>
    <app-header></app-header>
    <div>
      <div class="col-md-3 hidden-xs side-bar">Side Nav</div>
      <div class="col-md-9 main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import header from "./components/header.vue";
import createAudit from "./components/createAudit.vue";
import listAudits from "./components/listAudits.vue";
import createCategory from './components/createCategory.vue';

export default {
  components: {
    "create-audit": createAudit,
    "create-category": createCategory,
    "list-audits": listAudits,
    "app-header": header
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}

.main {
  background-color: rgb(250, 248, 248);
  padding-top: 0px
}

.side-bar {
  padding-left: 0;
  margin-left: 0;
  height: 100hv;
  background-color: white;
}
</style>
