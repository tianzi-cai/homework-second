const communicateInterface ={
    template:`
    <div id="wechat">
    <div class="header headerme">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav navchat iconfont">
            <em @click="returncommunicate()">&#xe653;</em>
            <em>&#xe66b;</em>
        </div>
        <!-- <div class="nav navme">
            <em class="iconfont caro">&#xe8c7;</em>
        </div> -->
    </div>

    <!-- 中间区域 -->
    <div class="middle middlefound">
        <div class="list listfound listfoundname">
            <img src="imgs/4.jpg" style="width: 60px; height: 60px;">
            <div class="listfont">
                <p class="name namefound2">撒哈拉的鱼</p>
                <div class="listcontent listcontentname">
                    <p class="name namefound namefound3">微信号:cai-tianzi</p>
                    <p class="name namefound namefound3">地区:江苏 苏州</p>
                </div>
                <!-- <p class="chatcontent">微信号:cai-tianzi</p> -->
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">备注和标签</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">朋友权限</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <br>
        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">朋友圈</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound">更多信息</p>
                    <em class="iconfont iconfound">&#xe611;</em>
                </div>
            </div>
        </div>
        <br>

        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound name2">发消息</p>
                </div>
            </div>
        </div>
        <div class="list listfound">
            <div class="listfont">
                <div class="listcontent">
                    <p class="name namefound name3">音视频通话</p>
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
        returncommunicate(){
            this.$router.go(-1);
        }
    }
}

export {communicateInterface}