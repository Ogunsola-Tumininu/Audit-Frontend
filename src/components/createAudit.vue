<template>
  <div class="col-md-8 col-md-offset-2">
    <div class="create-header">
      <h2>Create Audit</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <form style="background-color: white; margin-top: -30px">
      <div class="form-group space">
        <div class="col-md-3">
          <label for="title">Title:</label>
        </div>
        <div class="col-md-9">
          <input v-model.lazy="audit.title" type="text" class="form-control" id="title" />
        </div>
      </div><br><br>

      <div class="form-group space" >
        <div class="col-md-12">
          <label for="description">Description:</label>
        </div>
        <div class="col-md-12">
          <textarea v-model.lazy="audit.description" class="form-control" rows="5" id="description"></textarea>
        </div>
      </div>

      <div class="space"  >
        <div class="form-group">
        <div class="col-md-3">
          <label for="category">Number of Category:</label>
        </div>
        <div class="col-md-9">
          <input
            v-model.lazy="audit.no_of_category"
            type="number"
            class="form-control"
            id="category"
          />
        </div>
      </div>
      </div>


      <div class="form-group space">
        <div class="col-md-3">
          <label for="section">Number of Section:</label>
        </div>
        <div class="col-md-9">
          <input v-model.lazy="audit.no_of_section" type="number" class="form-control" id="section" />
        </div>
      </div> <br><br>

      <div class="cen">
        <button v-on:click.prevent="create" type="submit" class="save-btn">Save</button>
      </div>
      <br><br>
    </form>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      audit: {
        title: "",
        description: "",
        no_of_category: 0,
        no_of_section: 0
      },
    };
  },

  methods: {
    create: function() {
      if(this.audit.title=="" || this.audit.description=="" || this.audit.no_of_category==0){
        this.$toasted.show("Please fill all fields");
        return
      }
      let cat = Number(this.audit.no_of_category);
      let sec = Number(this.audit.no_of_section);

      let sendAudit = {
        title: this.audit.title,
        description: this.audit.description,
        no_of_category: cat,
        no_of_section: sec
      };

      console.log(sendAudit);
      this.$http
        .post("http://localhost:8000/audits", sendAudit)
        .then(function(data) {
          // console.log(data);
          this.$toasted.show("Audit created successfully");
          this.$router.push("/addcat/" + data.body.id);
        });
    }
  }
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
  margin-top: 40px;
  padding: 8px 40px;
  font-size: 1.3em;
  border: none;
  background-color: rgb(243, 200, 6);

}
.cen {
  text-align: center;
}

label{
  font-size: 1em;
}

input, textarea{
  padding: 5px;
  border: none;
  margin-bottom: 30px;
  background-color: rgb(250, 248, 248)
}

input{
  height: 50px;
}

div.space{
  padding-top: 30px !important;
}
</style>
