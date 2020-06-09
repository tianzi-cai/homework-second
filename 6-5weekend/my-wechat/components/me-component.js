const meComponent ={
    template:`
    <div id="wechat">
    <div class="header headerme">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav navme">
            <em class="iconfont caro">&#xe8c7;</em>
        </div>
    </div>

    <!-- 中间区域 -->
    <div class="middle middlefound">
        <div class="list listfound listfoundname" @click="pushme()">
            <img src="imgs/1.jpg" style="width: 60px; height: 60px;">
            <div class="listfont">
                <p class="name namefound2">蔡天姿</p>
                <div class="listcontent">
                    <p class="name namefound namefound3">微信号:cai-tianzi</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
                <!-- <p class="chatcontent">微信号:cai-tianzi</p> -->
            </div>
        </div>
        <br>
        <div class="list listfound">
            <img src="imgs/icon/9.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">支付</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
        <br>
        <div class="list listfound">
            <img src="imgs/icon/10.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">收藏</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/icon/11.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">相册</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/icon/12.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">卡包</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <img src="imgs/icon/13.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">表情</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
        <br>
        <div class="list listfound">
            <img src="imgs/icon/14.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">设置</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    methods:{
        pushme(){
            this.$router.push("me");
        }
    }
}

export {meComponent}