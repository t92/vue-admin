/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const myRouter = {
  path: '/my',
  component: Layout,
  redirect: '/my',
  name: 'Table',
  meta: {
    title: 'my-views',
    icon: 'table'
  },
  children: [
    {
      path: 'table',
      component: () => import('@/views/my-views/table'),
      name: 'MyTable',
      meta: { title: 'My Table' }
    },
    {
      path: 'abtn',
      component: () => import('@/views/my-views/btn-action'),
      name: 'abtn',
      meta: { title: 'action-button' }
    },
    {
      path: 'editor',
      component: () => import('@/views/my-views/editor'),
      name: 'editor',
      meta: { title: 'editor' }
    }
  ]
}
export default myRouter
