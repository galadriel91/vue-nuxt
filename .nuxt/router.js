import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _76fd3b9d = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _a1ccc6a0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _605cb979 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _917dd48e = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _10d73a90 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _08e23112 = () => interopDefault(import('..\\pages\\works.vue' /* webpackChunkName: "pages/works" */))
const _4311c218 = () => interopDefault(import('..\\pages\\post\\_id\\index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _d295d33c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _76fd3b9d,
    name: "about"
  }, {
    path: "/contact",
    component: _a1ccc6a0,
    name: "contact"
  }, {
    path: "/login",
    component: _605cb979,
    name: "login"
  }, {
    path: "/profile",
    component: _917dd48e,
    name: "profile"
  }, {
    path: "/signup",
    component: _10d73a90,
    name: "signup"
  }, {
    path: "/works",
    component: _08e23112,
    name: "works"
  }, {
    path: "/post/:id",
    component: _4311c218,
    name: "post-id"
  }, {
    path: "/",
    component: _d295d33c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
