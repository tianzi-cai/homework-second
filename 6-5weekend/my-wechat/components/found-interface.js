const foundInterface ={
    template:`
    <div id="wechat" class="wechat-friend">
    <!-- 导航栏 -->
    <div class="header">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav nav-friend">
            <em class="iconfont" @click="returnfound()">&#xe653;</em>
            <p>朋友圈</p>
            <em class="iconfont">&#xe8c7;</em>
        </div>
    </div>

    <div class="header headerdown">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav nav-friend">
            <em class="iconfont" @click="returnfound()">&#xe653;</em>
            <p></p>
            <em class="iconfont">&#xe8c7;</em>
        </div>
    </div>

    <!-- 中间区域 -->
    <div class="middle middle2">
        <!-- 图片空白所占区域 -->
        <div class="cover-friend">
            <img src="imgs/10.jpg" class="pic-friend2">
            <p class="name">蔡天姿</p>
            <div class="pic">
                <img src="imgs/1.jpg" class="pic-friend">
            </div>
        </div>

        <div class="list-friend">
            <div class="left">
                <img src="imgs/1.jpg">
            </div>
            <div class="right">
                <p class="id-angel">蔡天姿</p>
                <div class="content-angel">
                    哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666
                </div>
                <div>
                    <img src="imgs/icon/12.png">
                </div>
            </div>
        </div>

        <div class="list-friend">
            <div class="left">
                <img src="imgs/1.jpg">
            </div>
            <div class="right">
                <p class="id-angel">蔡天姿</p>
                <div class="content-angel">
                    哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666
                </div>
                <div>
                    <img src="imgs/icon/12.png">
                </div>
            </div>
        </div>

        <div class="list-friend">
            <div class="left">
                <img src="imgs/1.jpg">
            </div>
            <div class="right">
                <p class="id-angel">蔡天姿</p>
                <div class="content-angel">
                    哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666哈哈，666
                </div>
                <div>
                    <img src="imgs/icon/12.png">
                </div>
            </div>
        </div>


    </div>

    <div class="bottom">
        <div class="label"></div>
        <div class="virtualhome">
            <div class="home"></div>
        </div>
    </div>

</div>
    `,
    methods:{
        returnfound(){
            this.$router.go(-1);
        }

    }
}

export {foundInterface}