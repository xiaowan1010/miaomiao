export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [{
    path: 'city',//不加斜杠（不绝对引用）
    component: () => import('@/components/City')
  },
  {
    path: 'nowPlaying',
    component: () => import('@/components/NowPlaying')
  },
  {
    path: 'comingSoon',
    component: () => import('@/components/ComingSoon')
  },
  {
    path: 'search',
    component: () => import('@/components/Search')
  },
  {
    path: '/movie', //找不到路由默认走这个路径
    redirect: '/movie/nowPlaying'
  }
]
}