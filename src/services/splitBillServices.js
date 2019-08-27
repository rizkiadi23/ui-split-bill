import apiServices from "./apiServices.js";

const appService = process.env.VUE_APP_HOSTNAME;

const splitBillService = {

  // Bill User APIs
  getUserLists() {
    return apiServices.get(`${appService}/api/v1/users/all`, {});
  },

  getUserById(userId) {
    return apiServices.get(`${appService}/api/v1/users/${userId}`);
  },

  createUser(payload) {
    return apiServices.post(`${appService}/api/v1/users/create`, payload);
  },

  updateUser(userId) {
    return apiServices.patch(`${appService}/api/v1/users/${userId}/update`);
  },

  deleteUser(userId) {
    return apiServices.del(`${appService}/api/v1/users/${userId}/delete`);
  },

  // Billl Group APIs
  getAllBillGroup() {
    return apiServices.get(`${appService}/api/v1/bills/all`);
  },
  
  getBillGroupById(billGroupId) {
    return apiServices.get(`${appService}/api/v1/bills/${billGroupId}`);
  },

  updateBillGroup(billGroupId, payload) {
    return apiServices.patch(`${appService}/api/v1/bills/${billGroupId}/update`, payload);
  },

  addBillItemToBillGroup(payload) {
    return apiServices.patch(`${appService}/api/v1/bills/addBillItem`, payload);
  },

  deleteBillGroup(billGroupId) {
    return apiServices.del(`${appService}/api/v1/bills/${billGroupId}/delete`);
  },

  deleteBillItemFromBillGroup(billItemId, billGroupId) {
    return apiServices.patch(`${appService}/api/v1/bills/${billGroupId}/delete`, { billItemId: billItemId});
  },

  // Bill Item APIs
  getBillItemById(billItemId) {
    return apiServices.get(`${appService}/api/v1/billitems/${billItemId}`);
  },

  getSummaryBill(billItemId) {
    return apiServices.get(`${appService}/api/v1/${billItemId}/summary`);
  },

  createBillItem(payload) {
    return apiServices.post(`${appService}/api/v1/billitems/create`, payload);
  },

  updateBillItem(billItemId, payload) {
    return apiServices.patch(`${appService}/api/v1/billitems/${billItemId}`, payload);
  },

  deleteBillItem(billItemId) {
    return apiServices.del(`${appService}/api/v1/billitems/${billItemId}/delete`);
  },

  allocateBillPayment(payload, billItemId) {
    return apiServices.post(`${appService}/api/v1/billitems/${billItemId}/allocate`, payload);
  }
}

export default splitBillService;
