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
    path: '/movie', //若是这个路由则用下面这个路由
    redirect: '/movie/nowPlaying'
  }
]
}