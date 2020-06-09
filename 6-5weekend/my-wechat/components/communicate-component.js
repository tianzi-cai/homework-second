const communicateComponent ={
    template:`
    <div id="wechat">
    <div class="header">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav">
            <p>通讯录</p>
        </div>
    </div>

    <!-- 中间区域 -->
    <div class="middle">
        <!-- 搜索 -->
        <div class="search">
            <input type="text">
            <p class="searchfont">搜索</p>
        </div>

        <!-- 列表 -->
        <div class="list listfound">
            <img src="imgs/icon/1.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">新的朋友</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/icon/2.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">群聊</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/icon/3.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">标签</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/icon/4.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">公众号</p>
                </div>
            </div>
        </div>

        <div class="letter">
            A
        </div>

        <div class="list listfound" @click="pushcommunicate()">
            <img src="imgs/4.jpg">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">撒哈拉的鱼</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/2.jpg">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">懒早</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/3.jpg">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">寒冰</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/8.jpeg">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">大萝</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/7.jpg">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name">亮瞎君</p>
                </div>
            </div>
        </div>

        <div class="list listfound">
        <img src="imgs/7.jpg">
        <div class="listfont">
            <div class="listcontent">
                <p class="name">亮瞎君</p>
            </div>
        </div>
    </div>

    <div class="list listfound">
    <img src="imgs/7.jpg">
    <div class="listfont">
        <div class="listcontent">
            <p class="name">亮瞎君</p>
        </div>
    </div>
</div>

        <div class="list listfound">
        <img src="imgs/7.jpg">
        <div class="listfont">
            <div class="listcontent">
                <p class="name">亮瞎君</p>
            </div>
        </div>
        </div>   

    </div>
</div>
    `,
    methods:{
        pushcommunicate(){
            this.$router.push("communicate");
        }
    }
}

export {communicateComponent}