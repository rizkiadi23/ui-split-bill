import splitBillServices from "@/services/splitBillServices";

const state = {
  billGroup: [],
  billGroupById: []
};

const getters = {
  allBillGroup: state => state.billGroup,
  billGroupById: state => state.billGroupById
};

const actions = {
  async fetchBillGroup({ commit }) {
    const response = await splitBillServices.getAllBillGroup();

    commit("setBillGroup", response.data);
  },

  async fetchBillItem({ commit }, id) {
    const response = await splitBillServices.getBillGroupById(id);

    commit("setBillItemGroup", response.data);
  },

  async createBillGroup({ commit }, payloads) {
    const response = await splitBillServices.createBillGroup(payloads);
  },

  async updateBillItem({ commit }, payloads) {
    const response = await splitBillServices.updateBillGroup(payloads._id, payloads);
    
    commit("setBillItemGroup", response.data);
  },

  async deleteBillItem({ commit }, ids) {
    const response = await splitBillServices.deleteBillItem(ids.billItemId);
    const response2 = await splitBillServices.deleteBillItemFromBillGroup(ids.billItemId, ids.billGroupId);

    commit("removeBillItemInGroup", ids.billItemId);
  }
};

const mutations = {
  setBillGroup: (state, billGroup) => (state.billGroup = billGroup),
  setBillItemGroup: (state, billGroupById) => (state.billGroupById = billGroupById),
  removeBillItemInGroup: (state, id) => state.billGroup.filter(bill => bill._id != id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
