
// 订单栏
import { nowOrderComponent } from "../components/now-order-component.js";
import { hangComponent } from "../components/hang-component.js";
import { paidComponent } from "../components/paid-component.js";
import { cancelComponent } from "../components/cancel-component.js";

// 产品栏
import { oftenfoodComponent } from "../components/oftenfood-component.js";
import { mainMenu } from "../components/main-menu.js";

var wrapper = new Vue({
    el: ".wrapper",
    data: {
        // 组件名
        componentName: "now-order-component",
        componentName1: "oftenfood-component",

        // 订单列表
        orderList: [],
        // click索引值
        index:1,
        index2:1,
    },

    methods: {
        // myaddDrink(index) {
        //     if (this.orderList.includes(this.drinkList[index])) {
        //         this.drinkList[index].count++;
        //     } else {
        //         this.orderList.push(this.drinkList[index]);
        //     }
        // },

        // myaddMainfood(index) {
        //     if (this.orderList.includes(this.mainfoodList[index])) {
        //         this.mainfoodList[index].count++;
        //     } else {
        //         this.orderList.push(this.mainfoodList[index]);
        //     }
        // },

        // myaddSnack(index) {
        //     if (this.orderList.includes(this.snackList[index])) {
        //         this.snackList[index].count++;
        //     } else {
        //         this.orderList.push(this.snackList[index]);
        //     }
        // },

        //添加商品
        add(food){
            let index = -1;
            for(let i=0;i<this.orderList.length;i++){
                if(food.name == this.orderList[i].name){
                    index =i ;
                }
            }

            if(index>-1){
                this.orderList[index].count++;
            }else{
                this.orderList.push({
                    name:food.name,
                    price:food.price,
                    count:1,
                });
            }
        },

        mydel(index) {
            this.orderList.splice(index, 1);
        },


        myminus(index) {
            if (this.orderList[index].count == 1) {
                alert("数量为1，最少，不能再减啦~");
                return
            }
            this.orderList[index].count--;
        },

        myplus(index) {
            this.orderList[index].count++;
        },

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