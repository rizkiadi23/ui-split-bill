<template>
  <div class="split_blii__container">
    <b-container>
      <b-row>
        <b-col class="bill_card" md="8" offset-md="2">
          <b-card title="Bill Item Title" sub-title="Card subtitle">
            <b-card-text>
              Some quick example text to build on the
              <em>card title</em> and make up the bulk of the card's
              content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>
            <modal-bill-item></modal-bill-item>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ModalBillItem from "@/components/common/ModalBillItem.vue";

export default {
  name: "splitbill",
  components: {
    ModalBillItem
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