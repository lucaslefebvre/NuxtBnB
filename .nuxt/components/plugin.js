import Vue from 'vue'

const components = {
  HomeCard: () => import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => c.default || c),
  ShortText: () => import('../../components/ShortText.vue' /* webpackChunkName: "components/short-text" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
