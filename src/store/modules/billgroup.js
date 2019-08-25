import splitBillServices from "@/services/splitBillServices";

const state = {
  billGroup: [],
  billGroupById: {}
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

  async deleteBillItem({ commit }, id) {
    const response = await splitBillServices.deleteBillItem(id);

    commit("removeBillItemInGroup", id);
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
