let store = new Vuex.Store({
    state:{
        todoList: [],
        finished: []
    },
    mutations:{

        myuncompletestore(state,index){
            // dom中的操作
            state.finished.push(state.todoList[index]);
            state.todoList.splice(index, 1);

            // 缓存中的操作添加到已完成
            localStorage.setItem('finished', JSON.stringify(state.finished));
            // 在缓存中删除
            localStorage.setItem('todoList', JSON.stringify(state.todoList));

        },

        mydelstore(state,index){
            state.todoList.splice(index, 1);
            localStorage.setItem('todoList', JSON.stringify(state.todoList));
        },
        
        mydel2store(state,index){
            state.finished.splice(index, 1);
            localStorage.setItem('finished', JSON.stringify(state.finished));
        }
        
    }
});

export {store}