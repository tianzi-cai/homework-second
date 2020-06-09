import {store} from "../store/index.js"

// input列表模块化
var needwork={
    data(){
        return {
            message:""
        }
    },
    store:store,
    computed:Vuex.mapState({
        todoList:state=>state.todoList,
        finished:state=>state.finished,
    }),


    template: `
    <div class="app">
        <p>工 作 事 项</p>
        <input type="text" class="addlistvalue" placeholder="此处输入需完成事项" v-model="message">
        <button @click="myclick" class="btn">添加</button>
    </div>
    `,
    methods: {
        myclick() {
            if (this.message.trim()) {

                if (store.state.todoList.indexOf(this.message.trim()) > -1) {
                    alert("已添加过该事项哦~~~~");
                } else {
                    // 添加进dom
                    store.state.todoList.push(this.message);

                    // 添加进本地缓存
                    localStorage.setItem('todoList', JSON.stringify(store.state.todoList));
                }

                } else {
                alert("事项为空哦~~~");
                }

                // 清空
                this.message = "";
        },
    }
}
// :value="value" @input="$emit('input',$event.target.value)"

// 待完成模块化
var todolistComponent ={
    
    store:store,
    computed:Vuex.mapState({
        todoList:state=>state.todoList,
        finished:state=>state.finished,
    }),

    template:`
    <div>
        <p class="unfinshed">待完成</p>
        <div class="todolist" v-for="(item,index) in todoList">
            {{item}}
            <button class="btn-finished" @click="myuncomplete(index)">完成</button>
            <button class="btn-del" @click="mydel(index)">删除</button>
        </div>
    </div>
    `,
    methods:{
        myuncomplete(index){
            this.$store.commit("myuncompletestore",index);
        },
        mydel(index){
            this.$store.commit("mydelstore",index);
        }
    }
}

// 已完成模块化
var finishedComponent ={

    store:store,
    computed:Vuex.mapState({
        todoList:state=>state.todoList,
        finished:state=>state.finished,
    }),

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
            this.$store.commit("mydel2store",index);
        }
    }
}

export {needwork,todolistComponent,finishedComponent};
