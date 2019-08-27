import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreateBillItem from "./components/common/CreateBillItem.vue";
import EditBillItem from "./components/common/EditBillItem.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/splitbill",
      name: "splitbill",
      component: () =>
        import(/* webpackChunkName: "splitbill-chunk" */ "./views/SplitBill.vue"),
      children: [
        {
          name: "splitbill-id",
          path: ":id",
          component: () =>
            import(/* webpackChunkName: "splitbill-detail-chunk" */ "./components/BillItem.vue")
        },
        {
          name: "create",
          path: ":id/create",
          component: CreateBillItem
        },
        {
          name: "edit",
          path: ":id/edit",
          component: EditBillItem
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
