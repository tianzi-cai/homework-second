import {store} from "../store/order.js"

var nowOrderComponent={
    store:store,
    computed:Vuex.mapState({
        orderList:state=>state.orderList
    }),  
    template:`
    <div>
        <div class="now-order">
            <span>商品名称</span>
            <span>数量</span>
            <span>价格</span>
            <span>操作</span>
        </div>

        <div class="now-order" v-for="(item,index) in orderList">
            <span>{{item.name}}</span>
            <span>{{item.count}}</span>
            <span>{{item.price}}</span>
            <span class="del">
                <span @click="mydel(index)">删除 </span>
                <span @click="myminus(index)">- </span>
                <span @click="add(item)"> + </span>
            </span>
        </div>
    </div>
    `,
    methods:{
        //添加商品
        add(food){
            this.$store.commit("addstore",food);
        },

        mydel(index) {
            this.$store.commit("mydelstore",index);
        },


        myminus(index) {
            this.$store.commit("myminusstore",index);
        },

        // myplus(index) {
        //     this.$store.commit("myplusstore",index);
        // },
    }
};

export {nowOrderComponent}