<template>
  <div role="tablist">
    <b-container md="6" offset-md="3">
      <b-card no-body class="mb-3">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            href="#"
            @click="toggle(billItem._id)"
            variant="info"
          >{{billItem.billName}}</b-button>
        </b-card-header>

        <b-collapse v-bind:id="billItem._id" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-row>
                <b-col>
                  <b-list-group>
                    <b-list-group-item>Item(s)</b-list-group-item>
                    <b-list-group-item button v-for="billItm in billItem.item" :key="billItm._id">
                      {{ billItm.itemName }}
                      <b-badge variant="danger" pill>{{ billItm.quantity}}</b-badge>&nbsp;
                      <b-badge
                        variant="success"
                        pill
                        v-for="person in billItm.itemOwner"
                        :key="person.user"
                      >{{ mapUserNameWithIds(person.user) }}</b-badge>&nbsp;
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
              <br />
              <b-row>
                <b-col>
                  <ul>
                    <li>Event Date : {{ formatDate(billItem.createdDate) }}</li>
                    <li>Total Amount (Include Tax) : Rp.{{ billItem.totalAmount }}</li>
                    <li>Tax : {{ billItem.tax }} %</li>
                    <li>Payor:</li>
                    <ul v-html="formatPayor(billItem.payor)"></ul>
                  </ul>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "billItemDetails",
  props: {
    billItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["billGroupById"])
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
    },

    mapUserNameWithIds(user_id) {
      let member = this.billGroupById.billMemberList;

      for (let i = 0; i < member.length; i++) {
        if (member[i].billMember._id == user_id) {
          return member[i].billMember.username;
        }
      }
      return "N/A";
    },

    formatPayor(payor) {
      let elHtml = "";

      payor.forEach(el => {
        let user = this.mapUserNameWithIds(el.user);
        elHtml = elHtml + `<li>${user} paid Rp.${el.amount}</li>`;
      });

      return elHtml;
    },

    toggle(id) {
      let element = document.getElementById(id).style.display;
      element == "none"
        ? (document.getElementById(id).style.display = "block")
        : (document.getElementById(id).style.display = "none");
    }
  }
};
</script>

<style scoped>
</style>