<template>
  <div class="col-md-8 col-md-offset-2">
    <div class="create-header">
      <h2>Create your first audit now</h2>

      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <span
        class="glyphicon glyphicon-list-alt"
        style="font-size: 15em; width: 100%; margin: 50px auto"
        aria-hidden="true"
      ></span>
      <router-link to="/add" exact>
        <button class="save-btn">Create now</button>
      </router-link>
    </div>

    <h2>All Audits</h2>
    <div v-for="(audit, index) in audits" :key="index" class="col-md-12 sep">
      <div class="col-md-3">
        <button class="cha-btn">View Change</button>
        <button class="cre-btn">Create now</button>
      </div>

      <div class="col-md-9">
        <h3>{{ audit.title}}</h3>
        <p>{{audit.description | snippet}}</p>
        <span>{{audit.no_of_category}} Categories {{audit.no_of_section}} Section</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audits: []
    };
  },

  created() {
    this.$http.get("http://localhost:8000/audits").then(function(data) {
      this.audits = data.body;
      console.log(this.audits)
    });
  },

  methods: {}
};
</script>

<style scoped>
#create-audit * {
  box-sizing: border-box;
}

#create-audit {
  margin: 20px auto;
  text-align: center;
  max-width: 500px;
}

.create-header {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px
}

.create-header p {
  font-size: 1em;
}

.save-btn {
  padding: 8px 20px;
  font-size: 1.3em;
  border: none;
  background-color: rgb(243, 200, 6);
  color: white;
}

.cre-btn, .cha-btn {
  width: 90%;
  margin-top: 10px;
  padding: 8px 20px;
  font-size: 0.8em;
  border: none;
  background-color: rgb(243, 200, 6);
  color: white;
}
.cha-btn{
  background-color: grey;
}
.cen {
  text-align: center;
}

.sep{
  margin-bottom: 15px;
  background-color: white;
  padding: 10px
}
</style>
