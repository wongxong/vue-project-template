
export default {
  path: '/dashboards',
  component: '/layouts/index',
  children: [
    {
      path: '/dashboards',
      name: 'dashboards',
      component: '/dashboards/index'
    }
  ]
}