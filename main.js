// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'
import Echarts from 'echarts'
import Myaxios from '@/assets/js/myaxios.js'
import Bread from '@/components/pages/common/breadcrumb.vue'
import VueQuillEditor from 'vue-quill-editor'
import ElTreeGrid from 'element-tree-grid'


import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI)
Vue.use(Myaxios)
Vue.use(VueQuillEditor)

Vue.component(Bread.name, Bread)
Vue.component(ElTreeGrid.name, ElTreeGrid)
Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})