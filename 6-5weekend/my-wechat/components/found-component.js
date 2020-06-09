const foundComponent ={
    template:`
    <div id="wechat">
    <div class="header">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav">
            <p>发现</p>
        </div>
    </div>

    <!-- 中间区域 -->
    <div class="middle middlefound">
        <div class="list listfound" @click="pushfound()">
            <img src="imgs/icon/5.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">朋友圈</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
        <br>
        <div class="list listfound">
            <img src="imgs/icon/6.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">扫一扫</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
        <div class="list listfound">
            <img src="imgs/icon/7.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">摇一摇</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
        <br>
        <div class="list listfound">
            <img src="imgs/icon/8.png">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">附近的人</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    methods:{
        pushfound(){
            this.$router.push("found");
        }
    }
}

export {foundComponent}