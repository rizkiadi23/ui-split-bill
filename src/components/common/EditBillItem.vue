<template>
  <div>
    <div class="container" style="margin-top: 20px;">
      <h1>Edit Bill Item</h1>
      <hr />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Bill Item Name:" label-for="input-1">
          <b-form-input id="input-1" v-model="billGroupById.billGroupName"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Update Status" label-for="input-2">
          <b-form-input id="input-2" v-model="billGroupById.status"></b-form-input>
        </b-form-group>

        <b-button class="mr-1" type="submit" variant="primary">Update</b-button>
        <b-button class="mr-1" type="reset" variant="danger">Reset</b-button>
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
      show: true
    };
  },
  computed: {
    ...mapGetters(["billGroupById"])
  },
  methods: {
    ...mapActions(["fetchBillItem", "updateBillItem"]),

    onSubmit(evt) {
      evt.preventDefault();
      this.updateBillItem(this.billGroupById);
      this.$router.push(`/splitbill`);
    },

    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.billGroupById.billGroupName = "";
      this.billGroupById.status = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  created() {
    this.fetchBillItem(this.$route.params.id);
  }
};
</script>