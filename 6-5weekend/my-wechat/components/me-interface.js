const meInterface ={
    template:`
    <div id="wechat">
    <div class="header">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav navchat iconfont">
            <em @click="returnme()">&#xe653;</em>
            <p>个人信息</p>
            <em></em>
        </div>
    </div>

    <!-- 中间区域 -->

    <div class="middle middlechat">
        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">头像</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">名字</p>
                    <span><span class="namecai">蔡天姿</span> <em class="iconfont iconfound">&#xe611;</em></span>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">微信号</p>
                    <span><span class="namecai">cai-tianzi &nbsp;&nbsp;</span> <em class="iconfont iconfound"></em></span>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">我的二维码</p>
                    <span><span class="namecai"></span> <em class="iconfont iconfound">&#xe611;</em></span>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">更多</p>
                    <span><span class="namecai"></span> <em class="iconfont iconfound">&#xe611;</em></span>
                </div>
            </div>
        </div>
        <br>
        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">我的地址</p>
                    <span><span class="namecai"></span> <em class="iconfont iconfound">&#xe611;</em></span>
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
        returnme(){
            this.$router.go(-1);
        }
    }
}

export {meInterface}