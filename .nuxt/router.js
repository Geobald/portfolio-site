import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _666a5867 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _087bb6bf = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _cb08c79c = () => interopDefault(import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */))
const _01b41e46 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _666a5867,
    name: "blog"
  }, {
    path: "/projects",
    component: _087bb6bf,
    name: "projects"
  }, {
    path: "/resume",
    component: _cb08c79c,
    name: "resume"
  }, {
    path: "/",
    component: _01b41e46,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
