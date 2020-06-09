var nowOrderComponent={
    props:["orderlist"],
    template:`
    <div>
        <div class="now-order">
            <span>商品名称</span>
            <span>数量</span>
            <span>价格</span>
            <span>操作</span>
        </div>

        <div class="now-order" v-for="(item,index) in orderlist">
            <span>{{item.name}}</span>
            <span>{{item.count}}</span>
            <span>{{item.price}}</span>
            <span class="del">
                <span @click="$emit('change-mydel',index)">删除 </span>
                <span @click="$emit('change-myminus',index)">- </span>
                <span @click="add(item)"> + </span>
            </span>
        </div>
    </div>
    `,
    methods:{
        add(item){
            this.$emit("add",{
                name:item.name,
                price:item.price
            });
        }
    }
};

export {nowOrderComponent}