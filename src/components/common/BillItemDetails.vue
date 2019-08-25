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
            <b-card-text>
              <b-row>
                <b-col>
                  <b-list-group>
                    <b-list-group-item>Item(s)</b-list-group-item>
                    <b-list-group-item button v-for="billItm in billItem.item" :key="billItm._id">
                      {{ billItm.itemName }}
                      <b-badge variant="danger" pill>{{ billItm.quantity}}</b-badge>
                      <b-badge
                        variant="success"
                        pill
                        v-for="person in billItm.itemOwner"
                        :key="person.user"
                      >{{ person.user}}</b-badge>
                    </b-list-group-item>
                  </b-list-group>
                </b-col>
                <b-col>
                  <b-list-group>
                    <b-list-group-item>Price Before Tax</b-list-group-item>
                    <b-list-group-item
                      button
                      v-for="billItm in billItem.item"
                      :key="billItm._id"
                    >Rp.{{ billItm.priceBeforeTax }}</b-list-group-item>
                  </b-list-group>
                </b-col>
                <b-col>
                  <b-list-group>
                    <b-list-group-item>Price After Tax</b-list-group-item>
                    <b-list-group-item
                      button
                      v-for="billItm in billItem.item"
                      :key="billItm._id"
                    >Rp.{{ billItm.priceAfterTax }}</b-list-group-item>
                  </b-list-group>
                </b-col>
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
        this.deleteBillItem({
          billItemId: this.billItem._id,
          billGroupId: this.$route.params.id
        });
      } else {
        return;
      }
    }
  }
};
</script>