const wechatInterface ={
    template:`
    <div id="wechat">
    <div class="header">
        <div class="state iconfont">
            <span class="span1">14:50</span>
            <span class="span2">&#xe61c; 4G <span class="span3"> &#xe638;</span> </span>
        </div>
        <div class="nav navchat iconfont">
            <em @click="returnwechat">&#xe653;</em>
            <p>蔡天姿</p>
            <em>&#xe66b;</em>
        </div>
    </div>

    <!-- 中间区域 -->

    <div class="middle middlechat">

        <div class="you">
            <div>
                <img src="imgs/4.jpg">
            </div>
            <div class="recond">
                <p>你最近赶紧找对象吧，你妈现在连小苹果都不跳了，天天在相亲的那个角猫着
                    给你寻摸着，连饭都不做了！！！！
                </p>
            </div>
        </div>

        <div class="me">
            <div class="recond2">
                <p>那能怪我吗？您也要学着自己做饭吃，不能只知道泡面，这么大的人了。</p>
            </div>
            <div>
                <img src="imgs/1.jpg">
            </div>
        </div>

        
        <div class="you">
            <div>
                <img src="imgs/4.jpg">
            </div>
            <div class="recond">
                <p>我现在还会炒饭和煮面，谁说只会泡面
                </p>
            </div>
        </div>

        <div class="me">
            <div class="recond2">
                <p>那我就放心了</p>
            </div>
            <div>
                <img src="imgs/1.jpg">
            </div>
        </div>

        <div class="you">
            <div>
                <img src="imgs/4.jpg">
            </div>
            <div class="recond">
                <p>那你妈那边？
                </p>
            </div>
        </div>

        <div class="me">
            <div class="recond2">
                <p>不用管她。她愿去就去吧，反正我不相亲</p>
            </div>
            <div>
                <img src="imgs/1.jpg">
            </div>
        </div>

        <div class="you">
            <div>
                <img src="imgs/4.jpg">
            </div>
            <div class="recond">
                <p>王八羔子！家里康师傅快没了！再邮点过来！
                </p>
            </div>
        </div>

        <div class="me">
            <div class="recond2">
                <p>。。。。。</p>
            </div>
            <div>
                <img src="imgs/1.jpg">
            </div>
        </div>

        <div class="you">
            <div>
                <img src="imgs/4.jpg">
            </div>
            <div class="recond">
                <p>快！
                </p>
            </div>
        </div>

    </div>

    <div class="bottom">

        <div class="label labelchat iconfont">
            <em>&#xe68d;</em>
            <input type="text">
            <em>&#xe659;</em>
            <em>&#xe630;</em>
        </div>


        <div class="virtualhome">
            <div class="home"></div>
        </div>
    </div>

</div>
    `,
    methods:{
        returnwechat(){
            this.$router.go(-1);
        }
    }
}

export {wechatInterface}