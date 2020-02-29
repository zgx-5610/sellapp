<template>
    <div class="main">
        <!-- 头部 -->
        <div class="top-header" :style="{backgroundImage:'url('+data.avatar+')'}">
            <div class="header-contant">
                 <div class="header-left"><img :src="data.avatar"></div>
                <div class="header-right">
                    <h3><img src="../assets/imgs/品牌.png"> {{data.name}}</h3>
                    <p>{{data.description}} / {{data.deliveryTime}}分钟送达</p>
                    <p><img src="../assets/imgs/减.png">{{data.supports ? data.supports[0].description : ''}}</p>
                </div>
            </div>
           
            <div class="header-bottom"><img src="../assets/imgs/公告.png">{{data.bulletin}}</div>
        </div>

        <!-- 内容 -->
        <div class="router-link-div">
            <router-link to='/goods'>商品</router-link>
            <router-link to='/evaluate'>评价</router-link>
            <router-link to='/business'>商家</router-link>
        </div>

        <!-- 二级路由出口 -->
        <router-view></router-view>


        <!-- 占位 -->
        <div class="space"></div>
        <!-- 购物车 -->
        <div class="shopcar">
            <div class="shopcar-left">
                <div class="shopcar-img"><img src="../assets/imgs/购物车空.png"></div>
                
                <div class="shopcar-text">
                    <span>￥</span>
                    <span>|</span>
                    <span>另需配送费￥{{data.deliveryPrice}}元</span>
                </div>
            </div>
            <div class="shopcar-right">
                <p>￥{{data.minPrice}}起送</p>
            </div>
        </div>
    </div>
</template>

<script>
import {getSeller} from '../api/apis.js'

    export default {
        data(){
            return{
                data:{}
            }
        },
        created(){
            getSeller().then((res)=>{
                // console.log(res.data.data)
                this.data = res.data.data
            })
        }
    }
</script>

<style lang="less" scoped>

    .main{
        height: 100%;
            .router-link-div{
            height: 40px;
            line-height: 40px;
            flex: 1;
            display: flex;
            justify-content: space-around;
            a{
                color: rgb(161, 153, 153);
            }
        
        }   
        .top-header{
            width: 100%;
            height: 120px;
            flex: 1;
            // background: rgb(82, 71, 63);
            display: flex;
            position: relative;

            .header-contant{
                display: flex;
                padding: 20px;
                width: 100%;
                height: 100%;
                    .header-left{
                        img{
                            width: 60px;
                        }
                    }
                    .header-right{
                        margin-left: 20px;
                        font-size: 13px;
                        h3{
                            color: #fff;
                            img{
                                width: 30px;
                                vertical-align:top;
                                margin-top: 2px;
                            }
                        }
                        p{
                            color: rgb(224, 218, 218);
                                img{
                                    width: 15px;
                                    vertical-align:top;
                                    margin-top: 2px;
                                }
                        }
                    }
            }

            
            .header-bottom{
                position: absolute;
                bottom: 0;
                width: 100%;
                height:25px;
                line-height: 25px;
                background: rgb(126, 105, 103);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
                font-size: 12px;
                color: rgb(224, 218, 218);
                img{
                    width: 30px;
                    margin-right: 5px;
                    vertical-align:top;
                    margin-top: 5px;
                    margin-left: 10px;
                }
            }
        }
        .space{
            width: 100%;
            height: 60px;
        }
        .shopcar{
            position: fixed;
            bottom: 0;
            background: skyblue;
            width: 100%;
            height: 60px;
            display: flex;
            .shopcar-left{
                width: 70%;
                height: 100%;
                background: rgb(15, 15, 15);
                position: relative;
                line-height: 60px;
                .shopcar-text{
                    margin-left: 100px;
                    span{
                        margin-right: 10px;
                    }
                }
                .shopcar-img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgb(48, 49, 48);
                    text-align: center;
                    padding-top: 5px;
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                img{
                    width: 45px;
                }
                }
            }
            .shopcar-right{
                width: 30%;
                height: 100%;
                line-height: 60px;
                text-align: center;
                font-size: 16px;
                background: rgb(48, 49, 48);
                p{
                    color: rgb(224, 218, 218);
                }
            }
        }
    }
  
</style>