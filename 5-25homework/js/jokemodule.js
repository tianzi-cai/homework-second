var jokesList ={
    props:["message","head","text","name","image","passtime","up","down"],
    template:`
    <div class="inner">
        <img :src="head" class="header" alt="">
        <div class="text">{{text}}</div>
        <div class="name">{{name}}</div>
        <img :src="image" class="images" alt="">
        <div class="passtime">{{passtime}}</div>
        <div class="up">点赞{{up}}</div>
        <div class="down">不点赞{{down}}</div>
    </div>
    `
}

export {jokesList}