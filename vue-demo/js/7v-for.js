
window.onload = function () {

    var showContent = new Vue({
        el: '#EMS-list',
        data: {
            ems: [
                {name:'公子小白',companyName: '牛皮公司',telephone:'15000000000',zip:'666666',address:'亚历山大',remark:'来自星星的猪'},
                {name:'公主刁蛮',companyName: '魔法城堡',telephone:'16666666666',zip:'000000',address:'普罗旺斯',remark:'未来时空'}
            ]
        }
    })

    
    /*var example1 = new Vue({
        el: '#example-1',
        data: {
            items: [
                {message: 'Foo' },
                {message: 'Bar' }
            ]
        }
    })*/

    
}
