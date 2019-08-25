<template>
  <div class="container" style="margin-top: 20px;">
    <h1>Bill Item Details</h1>
    <b-button class="mr-1" variant="primary">Create</b-button>
    <b-button class="mr-1" variant="warning">Edit</b-button>
    <b-button class="mr-1" to="/splitbill" variant="success">Back</b-button>
    <hr />
    <b-container>
      <bill-item-details
        v-for="billItem in billGroupById.billItemList"
        :key="billItem.billItem._id"
        :billItem="billItem.billItem"
        :accordionId="billItem.billItem._id"
      ></bill-item-details>
    </b-container>
  </div>
</template>

<script>
import BillItemDetails from "@/components/common/BillItemDetails.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "billItem",
  components: {
    BillItemDetails
  },
  computed: {
    ...mapGetters(["billGroupById"])
  },
  methods: {
    ...mapActions(["fetchBillItem"])
  },
  created() {
    this.fetchBillItem(this.$route.params.id);
  }
};
</script>