// 微信聊天主界面
// 聊天的人员信息
var person =[
    {
        headimg:"imgs/1.jpg",
        name:"蔡天姿",
        time:"15:51",
        chatcontent:"哈哈"
    },
    {
        headimg:"imgs/2.jpg",
        name:"懒早",
        time:"15:51",
        chatcontent:"我通过了你的好友验证请求"
    },
    {
        headimg:"imgs/3.jpg",
        name:"寒冰",
        time:"15:51",
        chatcontent:"66666"
    },
    {
        headimg:"imgs/4.jpg",
        name:"撒哈拉的鱼",
        time:"15:51",
        chatcontent:"还不知道"
    },
    {
        headimg:"imgs/5.jpg",
        name:"文件传输助手",
        time:"15:51",
        chatcontent:"[图片]"
    },
    {
        headimg:"imgs/6.jpg",
        name:"空气君",
        time:"15:51",
        chatcontent:"天气君你一定要学习把妹技能"
    },
    {
        headimg:"imgs/7.jpg",
        name:"亮瞎君",
        time:"15:51",
        chatcontent:"今天天气真好"
    },
    {
        headimg:"imgs/8.jpeg",
        name:"大萝",
        time:"15:51",
        chatcontent:"好友"
    },
    {
        headimg:"./imgs/9.jpg",
        name:"夏天的风",
        time:"15:51",
        chatcontent:"我们出去走一走呀"
    },
];

const wechatComponent = {
    data(){
        return {
            personList:person
        }
    },
    template:`
    <div id="wechat">
    <div class="header">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav">
            <p>微信</p>
        </div>
    </div>

    <!-- 中间区域 -->
    <div class="middle">
        <!-- 搜索 -->
        <div class="search">
            <input type="text">
            <p class="searchfont">搜索</p>
        </div>

        <!-- 聊天列表 -->
        <div class="list" v-for="(item,index) in personList" @click="pushwechat(index)">
            <img :src="item.headimg" class="myimgstyle">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">{{item.name}}</p>
                    <p class="time">{{item.time}}</p>
                </div>
                <p class="chatcontent">{{item.chatcontent}}</p>
            </div>
        </div>

    </div>

</div>
    `,
    methods:{
        pushwechat(index){
            // if(index==0){
            //     this.$router.push("wechat");
            // }
            this.$router.push("wechat");
        }
    }
}

export {wechatComponent} 
