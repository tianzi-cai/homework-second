import {store} from "../store/order.js"


var oftenfoodComponent ={
    data(){
        return {
            drinklist:[
                {
                    img: "images/coco.jpg",
                    name: "可口可乐",
                    price: 7
                },
                {
                    img: "images/spirit.jpeg",
                    name: "雪碧",
                    price: 7
                },
                {
                    img: "images/fenda.jpg",
                    name: "芬达",
                    price: 7
                }
            ],
            mainfoodlist:[
                {
                    img: "images/hamburger.jpeg",
                    name: "藤香鸡腿堡",
                    price: 18
                },
                {
                    img: "images/aoerliangham.jpg",
                    name: "奥尔良鸡腿堡",
                    price: 15
                },
                {
                    img: "images/jituiham.jpeg",
                    name: "鸡腿堡",
                    price: 10
                }
            ],
            snacklist:[
                {
                    img: "images/shutiaoL.jpg",
                    name: "大薯",
                    price: 16
                },
                {
                    img: "images/shutiaoM.jpg",
                    name: "中薯",
                    price: 10
                },
                {
                    img: "images/shutiaoS.jpeg",
                    name: "小薯",
                    price: 6
                }
            ]
        }
    },
    template: `
    <div class="oftenFood">
        <div class="drink">
            <h3>饮料</h3>
            <div class="proimgs">
                <!-- 饮料产品类 -->
                <div class="coco" v-for="(item,index) in drinklist">
                    <p class="imgp">
                        <img :src="item.img" alt="">
                    </p>
                    <p>{{item.name}} {{item.price}}（元）</p>
                    <button class="addbtn" @click="addFood(item)">点击添加</button>
                </div>
            </div>
        </div>
        <div class="mainfood">
            <h3>主食</h3>
            <div class="proimgs">
                <!-- 主食产品类 -->
                <div class="coco" v-for="(item,index) in mainfoodlist">
                    <p class="imgp">
                        <img :src="item.img" alt="">
                    </p>
                    <p>{{item.name}} {{item.price}}（元）</p>
                    <button class="addbtn" @click="addFood(item)">点击添加</button>
                </div>
            </div>
        </div>
        <div class="snack">
            <h3>小食</h3>
            <div class="proimgs">
                <!-- 小食产品类 -->
                <div class="coco" v-for="(item,index) in snacklist">
                    <p class="imgp">
                        <img :src="item.img" alt="">
                    </p>
                    <p>{{item.name}} {{item.price}}（元）</p>
                    <button class="addbtn" @click="addFood(item)">点击添加</button>
                </div>
            </div>
        </div>
    </div>
    `,
    store:store,
    computed:Vuex.mapState({
        orderList:state=>state.orderList
    }),  
    methods:{
        addFood(item){
            this.$store.commit("addstore",item);
        },
    }
};

export {oftenfoodComponent}
