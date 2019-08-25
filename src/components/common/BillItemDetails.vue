<template>
  <div role="tablist">
    <b-container md="6" offset-md="3">
      <b-card no-body class="mb-3">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            href="#"
            v-b-toggle.accordion-1
            variant="info"
          >{{billItem.billName}} on {{ formatDate(billItem.createdDate)}}</b-button>
        </b-card-header>

        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>Summary :</b-card-text>
            <b-card-text>
              <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
              </b-row>
            </b-card-text>
          </b-card-body>

          <b-card-footer>
            <b-button class="mr-1" variant="outline-primary" size="sm">Get Summary</b-button>
            <b-button class="mr-1" variant="outline-warning" size="sm">Auto Allocate</b-button>
            <b-button
              @click="removeItem()"
              class="mr-1 float-sm-right"
              variant="outline-danger"
              size="sm"
            >Delete</b-button>
          </b-card-footer>
        </b-collapse>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "billItemDetails",
  props: {
    billItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["deleteBillItem"]),

    formatDate(dateString) {
      const date = new Date(dateString);
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    },

    removeItem() {
      if (confirm("Are you sure want to delete the item?")) {
        this.deleteBillItem(this.billItem._id);
      } else {
        return;
      }
    }
  }
};
</script>