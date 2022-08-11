import HomePage from 'pages/HomePage'
import MyKit from 'pages/MyKit'
import OrganizationsPage from 'pages/OrganizationsPage'
import ViewOrganizationPage from 'pages/ViewOrganizationPage'

const publicRoutes = [
  { path: '/', Component: HomePage },
  { path: '/my-kit', Component: MyKit },
  { path: '/organizations', Component: OrganizationsPage },
  { path: '/organizations/:organizationId', Component: ViewOrganizationPage },
  { path: '/users', Component: HomePage },
  { path: '/limits', Component: HomePage },
  // { path: "/", component: HomePage}
]

const protectedRoutes = [
  { path: '/', component: '' },
  // { path: "/", component: HomePage}
]

export { publicRoutes, protectedRoutes }
