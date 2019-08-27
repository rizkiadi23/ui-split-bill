<template>
  <div class="container">
    <b-container class="split_blii__container" v-show="this.$route.name == 'splitbill'">
      <b-row
        class="split_blii__container"
        style="margin-top: 25px;"
        v-show="this.$route.name == 'splitbill'"
      >
        <b-col md="8" offset-md="2">
          <h1 style="text-align: center;">Welcome to Split Bill Simple Service...</h1>
          <hr />
          <b-button class="mr-1 float-sm-right" size="sm" variant="primary">Create New Bill Group</b-button>
        </b-col>
      </b-row>

      <b-row v-for="bill in allBillGroup" :key="bill.id">
        <b-col class="bill_card" md="8" offset-md="2">
          <b-card :title="bill.billGroupName" :sub-title="bill.status.toUpperCase()">
            <b-card-text>
              Some quick example text to build on the
              <em>card title</em> and make up the bulk of the card's
              content.
            </b-card-text>

            <b-card-text>Created on: {{bill.createdDate}}</b-card-text>
            <modal-bill-item :billGroupId="bill._id"></modal-bill-item>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <router-view></router-view>
  </div>
</template>

<script>
const ModalBillItem = () =>
  import(
    /* webpackChunkName: "modal-bill-item" */ "../components/common/ModalBillItem.vue"
  );

import { mapGetters, mapActions } from "vuex";

export default {
  name: "splitbill",
  components: {
    ModalBillItem
  },
  methods: {
    ...mapActions(["fetchBillGroup"])
  },
  computed: mapGetters(["allBillGroup"]),
  created() {
    this.fetchBillGroup();
  }
};
</script>

<style lang="css">
.split_blii__container {
  margin-top: 45px;
}

.bill_card {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>