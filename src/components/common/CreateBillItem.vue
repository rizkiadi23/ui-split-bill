<template>
  <div>
    <div class="container" style="margin-top: 20px;">
      <h1>Create Bill Item</h1>
      <hr />
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Bill Item Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="billGroupName"
            required
            placeholder="The Name of Bill Item"
          ></b-form-input>
        </b-form-group>

        <b-button class="mr-1" type="submit" variant="primary">Create</b-button>
        <b-button class="mr-1" :to="`/splitbill/${this.$route.params.id}`" variant="success">Back</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      billGroupName: ""
    };
  },
  methods: {
    ...mapActions(["createBillGroup"]),

    onSubmit(evt) {
      evt.preventDefault();
      this.createBillGroup({ billGroupName: this.billGroupName });
      this.$router.push("/splitbill");
    }
  }
};
</script>