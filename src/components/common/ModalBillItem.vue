<template>
  <div>
    <b-button class="mr-1" :to="`/splitbill/${billGroupId}`" variant="success">Check</b-button>
    <b-button @click="$bvModal.show('bv-modal-edit')" variant="info" class="mr-1">Edit</b-button>
    <b-button @click="$bvModal.show('bv-modal-delete')" variant="danger" class="mr-1">Delete</b-button>

    <b-modal id="bv-modal-read" hide-footer>
      <template slot="modal-title">
        Using
        <code>$bvModal</code> Methods
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-read')">Close Me</b-button>
    </b-modal>

    <b-modal id="bv-modal-edit" hide-footer>
      <template slot="modal-title">
        Using
        <code>$bvModal</code> Methods
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-edit')">Close Me</b-button>
    </b-modal>

    <b-modal id="bv-modal-delete" hide-footer>
      <template slot="modal-title">
        Using
        <code>$bvModal</code> Methods
      </template>
      <div class="d-block text-center">
        <h3>Hello From This Modal!</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-delete')">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>
import splitBillServices from "@/services/splitBillServices.js";

export default {
  name: "modalbillitem",
  props: {
    billGroupId: {
      type: String
    }
  },
  methods: {}
};
</script>