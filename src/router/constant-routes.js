const ConstantRoutes = [
  {
    path: "/",
    redirect: "/resource_infos",
    meta: {
      hidden: true
    }
  },
  {
    path: "/sign_in",
    name: "login",
    component: "/login/sign_in",
    meta: {
      hidden: true
    }
  }
];


export default ConstantRoutes;