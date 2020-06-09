// 路由组件
import {wechatInterface} from "../components/wechat-interface.js"
import {communicateInterface} from "../components/communicate-interface.js"
import {foundInterface} from "../components/found-interface.js"
import {meInterface} from "../components/me-interface.js"


const routes =[
    {
        path:"/wechat",
        component:wechatInterface
    },
    {
        path:"/communicate",
        component:communicateInterface
    },
    {
        path:"/found",
        component:foundInterface
    },
    {
        path:"/me",
        component:meInterface
    },
];

const router = new VueRouter({
    routes:routes
});

export {router}

