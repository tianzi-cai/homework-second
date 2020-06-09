
// 订单栏
import { nowOrderComponent } from "../components/now-order-component.js";
import { hangComponent } from "../components/hang-component.js";
import { paidComponent } from "../components/paid-component.js";
import { cancelComponent } from "../components/cancel-component.js";

// 产品栏
import { oftenfoodComponent } from "../components/oftenfood-component.js";
import { mainMenu } from "../components/main-menu.js";

// 共享数据
import {store} from "../store/order.js"

var wrapper = new Vue({
    el: ".wrapper",
    store:store,
    computed:Vuex.mapState({
        orderList:state=>state.orderList
    }),  
    data: {
        // 组件名
        componentName: "now-order-component",
        componentName1: "oftenfood-component",

        // click索引值
        index:1,
        index2:1,
    },

    

    methods: {

        // 组件click事件
        orderclick(index){
            this.index = index;
            if(index==1){
                this.componentName = "now-order-component";
            }
            if(index==2){
                this.componentName = "hang-component";
            }
            if(index==3){
                this.componentName = "paid-component";
            }
            if(index==4){
                this.componentName = "cancel-component";
            }
        },

        productclick(index){
            this.index2 = index;
            if(index==1){
                this.componentName1 = "oftenfood-component";
            }
            if(index==2){
                this.componentName1 = "main-menu";
            }
        }
    },

    components: {
        "now-order-component": nowOrderComponent,
        "hang-component": hangComponent,
        "paid-component": paidComponent,
        "cancel-component": cancelComponent,

        "oftenfood-component": oftenfoodComponent,
        "main-menu": mainMenu
    },
});