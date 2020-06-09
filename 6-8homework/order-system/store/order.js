let store = new Vuex.Store({
    state:{
        // 订单列表
        orderList: [],
    },
    mutations:{
        addstore(state,food){
            let index = -1;
            for(let i=0;i<state.orderList.length;i++){
                if(food.name == state.orderList[i].name){
                    index =i ;
                }
            }

            if(index>-1){
                state.orderList[index].count++;
            }else{
                state.orderList.push({
                    name:food.name,
                    price:food.price,
                    count:1,
                });
            }
        },

        mydelstore(state,index){
            state.orderList.splice(index, 1);
        },

        myminusstore(state,index){
            if (state.orderList[index].count == 1) {
                alert("数量为1，最少，不能再减啦~");
                return
            }
            state.orderList[index].count--;
        },

        myplusstore(state,index){
            state.orderList[index].count++;
        }

        
    }
});

export {store}