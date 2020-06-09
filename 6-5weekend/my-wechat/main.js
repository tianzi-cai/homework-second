// 主微信组件
import {wechatComponent} from "./components/wechat-component.js"
// 通讯录
import {communicateComponent} from "./components/communicate-component.js"
// 发现
import {foundComponent} from "./components/found-component.js"
// 我的
import {meComponent} from "./components/me-component.js"


import {router} from "./router/index.js"

var app = new Vue({
    el:"#app",
    router:router,
    data:{
        componentName:"wechat-component",
        index:1
    },
    methods:{
        wechatclick(index){
            this.index = index;
            if(index==1){
                this.componentName = "wechat-component";
            }
            if(index==2){
                this.componentName = "communicate-component";
            }
            if(index==3){
                this.componentName = "found-component";
            }
            if(index==4){
                this.componentName = "me-component";
            }
        }
    },
    components:{
        "wechat-component":wechatComponent,
        "communicate-component":communicateComponent,
        "found-component":foundComponent,
        "me-component":meComponent
    }
});
