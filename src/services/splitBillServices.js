import apiServices from "./apiServices.js";

const appService = process.env.VUE_APP_HOSTNAME;

const splitBillService = {
  getUserLists() {
    return apiServices.get(`${appService}/api/v1/users/all`, {});
  },

  getBillList() {
    return apiServices.get(`${appService}/api/v1/bills/all`, {});
  }
}

export default splitBillService;
