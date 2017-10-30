
/*Vue.component('my-component', {
    template: '<span>{{ message }}</span>',
    data: {
        message: 'hello'
    }
})*/


window.onload = function () {

    var data = { counter: 0 }
    Vue.component('simple-counter', {
        template: '<button v-on:click="counter += 1">{{ counter }}</button>',
        // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
        // 但是我们返回给每个组件的实例的却引用了同一个data对象
        data: function () {
            return data;
        }
    })
    new Vue({
        el: '#example-2'
    })

};