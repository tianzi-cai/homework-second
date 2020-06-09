// input列表模块化
var needwork={
    props: ["message", "value", "todolist", "finished"],
    template: `
    <div class="app">
        <p>工 作 事 项</p>
        <input type="text" class="addlistvalue" placeholder="此处输入需完成事项" :value="value" @input="$emit('input',$event.target.value)">
        <button @click="myclick" class="btn">添加</button>
    </div>
    `,
    methods: {
        myclick(){
           this.$emit("change-myclick");
        }
    }
}

// 待完成模块化
var todolistComponent ={
    props: ["message", "value", "todolist","index","finished"],
    template:`
    <div>
        <p class="unfinshed">待完成</p>
        <div class="todolist" v-for="(item,index) in todolist">
            {{item}}
            <button class="btn-finished" @click="myuncomplete(index)">完成</button>
            <button class="btn-del" @click="mydel(index)">删除</button>
        </div>
    </div>
    `,
    methods:{
        myuncomplete(index){
           this.$emit("change-myuncomplete",index);
        },
        mydel(index){
           this.$emit("change-mydel",index);
        }
    }
}

// 已完成模块化
var finishedComponent ={
    props: ["message", "value", "todolist","index","finished"],
    template:`
    <div>
        <p class="finishedfont">已完成</p>
        <div class="finished" v-for="(item,index) in finished">
            {{item}}
            <button class="btn-del2" @click="mydel2(index)">删除</button>
        </div>
    </div>
    `,
    methods:{
        mydel2(index){
           this.$emit("change-mydel2",index);
        }
    }
}

export {needwork,todolistComponent,finishedComponent};
