
window.onload = function () {




    var data = {
        name: 'MyTree（第一级目录）',
        children: [
            { name: 'hello（第二级目录）' },
            { name: 'world（第二级目录）' },
            {
                name: 'child ',
                children: [
                    {
                        name: 'child （第三级目录）',
                        children: [
                            { name: 'hello' },
                            { name: 'world' }
                        ]
                    },
                    { name: 'hello' },
                    { name: 'world' },
                    {
                        name: 'child （第三级目录）',
                        children: [
                            { name: 'hello' },
                            { name: 'world' }
                        ]
                    }
                ]
            }
        ]
    }

    // 自定义组件
    Vue.component('item', {
        template: '#item-template',
        props: {
            model: Object
        },
        data: function () {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                if (!this.isFolder) {
                    Vue.set(this.model, 'children', []);
                    this.addChild();
                    this.open = true;
                }
            },
            addChild: function () {
                this.model.children.push({
                    name: 'new stuff',
                })
            }
        }
    })


    //创建根实例
    var demo = new Vue({
        el: '#demo',
        data: {
            treeData: data
        }
    })

    
};





