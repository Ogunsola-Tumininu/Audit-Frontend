<template>
  <div class="col-md-8 col-md-offset-2" style="background-color: white; margin-top: 20px">
    <div class="create-header">
      <h2>Create Category</h2>

      <form style="background-color: white">
        <div class="form-group">
          <div class="col-md-3">
            <label for="audit">Select Audit:</label>
          </div>
          <div class="col-md-9">
            <select class="form-control" v-model="category.audit" id="audit" @change="onChange(category.audit.id)">
              <option v-for="(audit, index) in audits" :key="index" :value="audit">{{ audit.title }}</option>
            </select>
          </div>
        </div>

        <div class="form-group has-feedback">
          <label class="col-md-3 control-label" for="category">Category Name:</label>
          <div class="col-md-9">
            <input v-model.lazy="category.name" type="text" class="form-control" id="category" />
            <!-- <span style="margin-right: 20px" class="glyphicon glyphicon-ok form-control-feedback"></span> -->
            <span style="margin-right: 20px" class="form-control-feedback">
              <img src="https://img.icons8.com/metro/26/000000/enter-2.png" />
            </span>
          </div>
        </div>

        <div class="cat">
          <div v-for="(cat, index) in auditCategory" :key="index">
            <div class="col-md-2">
              <p class="cat-list">{{index + 1 }}</p>
            </div>
            <div class="col-md-6">
              <p class="cat-list">{{ cat.name}}</p>
            </div>
            <div class="col-md-3">
              <p class="col-md-5">ID:</p>
              <p class="cat-id col-md-7">{{ cat.cat_id}}</p>
            </div>
            <div class="col-md-1">
              <span class="glyphicon glyphicon-remove del"></span>
            </div>
          </div>
        </div>

        <div class="cen">
          <button v-on:click.prevent="createCategory" type="submit" class="save-btn">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: {
        name: "",
        audit: {}
      },

      auditCategory: [],
      allCategories: [],

      audits: [],
    };
  },

  created() {
    this.$http.get("http://localhost:8000/audits").then(function(data) {
      this.audits = data.body;
      // console.log(this.audits);
    });

    let id = this.$route.params.id;

    this.$http.get("http://localhost:8000/audits/" + id).then(function(auditData) {
      this.category.audit = auditData.body;
      // console.log(this.category.audit);
    });

    this.$http.get("http://localhost:8000/categories/audit/" + id).then(function(cat) {
      this.allCategories = cat.body;
      this.auditCategory = this.allCategories;
      // console.log(cat.body);
    });
  },

  methods: {
    createCategory: function() {
      console.log(
        this.auditCategory.length,
        this.category.audit.no_of_category
      );
      if (this.auditCategory.length == this.category.audit.no_of_category) {
        this.$toasted.show("Oops!!! Maximum number of categories created");
        return;
      }
      let auditId = Number(this.category.audit.id);
      let auditTitle = this.category.audit.title;
      let title = auditTitle.replace(/\s/g, "");

      let num = this.auditCategory.length + 1;
      let cat_id = "#" + title[0] + title[title.length - 1] + "k" + num;

      let sendAudit = {
        name: this.category.name,
        cat_id: cat_id,
        audit_id: auditId
      };

      console.log(sendAudit);
      this.$http
        .post("http://localhost:8000/categories", sendAudit)
        .then(function(data) {
          // console.log(data);
          let catAuditId = data.body.audit_id;
          this.category.name= '';
          this.$toasted.show("Category created for Audit successfully");
          this.onChange(catAuditId)
        });
    },

    onChange(id) {
      this.$http.get("http://localhost:8000/categories/audit/" + id).then(function(cat) {
      this.allCategories = cat.body;
      this.auditCategory = this.allCategories;
      // console.log(cat.body);
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
  padding: 10px;
}

.category-list {
  border-top: 2px solid black;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
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

label {
  font-size: 1em;
}

input,
select {
  padding: 5px;
  height: 50px;
  border: none;
  margin-bottom: 30px;
  background-color: rgb(250, 248, 248);
}

.form-group {
  margin-bottom: 40px;
}

div.space {
  padding-top: 30px !important;
}

div.cat {
  margin-top: 20px;
}

.cat-list {
  padding: 10px;
  background-color: rgb(250, 248, 248);
  margin-right: 3px;
}

.cat-id {
  padding: 10px;
  background-color: rgb(250, 248, 248);
}

.del {
  color: white;
  background-color: black;
  margin-top: 10px;
}
</style>
