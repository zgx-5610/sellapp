<template>
    <div class="business-div">
         <div class="score">
                <div class="score-top">
                    <div class="score-top-left">
                        <p >{{data.name}}</p>
                        <p>
                            <Rate v-model="valueDisabled" />
                            <span>  {{data.rankRate}} </span>
                            <span>月销售{{data.sellCount}}单</span>
                        
                        </p>
                    </div>
                    <div class="score-top-right">
                        <Icon type="md-heart-outline" />
                        <span>已收藏</span>
                    </div>
                   
                   
                </div>
                <div class="score-bottom">
                    <div class="first">
                        <p>起送价</p>
                        <p>
                            <span class="font">{{data.minPrice}}</span>元
                        </p>
                    </div>
                    <div class="scende">
                        <p>商家配送</p>
                        
                        <p><span class="font">{{data.deliveryPrice}}</span>元</p>
                    </div>
                    <div class="third">
                        <p>平均配送时间</p>
                        
                        <p><span class="font">{{data.deliveryTime}}</span>分钟</p>
                    </div>
                </div>
        </div>
        <div class="business-bottom">
            <div class="notice">
                <h2>公告与活动</h2>
                <p class="notice-text">{{data.bulletin}}</p>
            </div>
            <div class="activity">
                <p>
                    <img src="../assets/imgs/减2.png" alt="">
                    {{data.supports ? data.supports[0].description : ''}}
                </p>
                <p>
                    <img src="../assets/imgs/折.png" alt="">
                    {{data.supports ? data.supports[1].description : ''}}
                </p>
                 <p>
                     <img src="../assets/imgs/特.png" alt="">
                    {{data.supports ? data.supports[2].description : ''}}
                </p>
                 <p>
                     <img src="../assets/imgs/票.png" alt="">
                   {{data.infos[0]}}
                </p>
               
                
                 
            </div>
        </div>
        <div class="business-scene">
                <h2>商家实景</h2>
                <div class="scene">
                    <div>
                        <img :src="data.pics[0]" alt="">
                    </div>
                    <div>
                        <img :src="data.pics[1]" alt="">
                    </div>
                    <div>
                        <img :src="data.pics[2]" alt="">
                    </div>
                    
                </div>
                <p></p>
        </div>
        <div class="business-information">
            <h2>商家信息</h2>
            <!-- <div class="information-box">

            </div> -->
                <p class="information">
                    {{data.infos[0]}}
                </p>
                <p class="information">
                     {{data.infos[1]}}
                </p>
                 <p class="information">
                     {{data.infos[2]}}
                </p>
                <p class="information">
                    {{data.infos[3]}}
                </p>
        </div>
    </div>
</template>

<script>
import { getSeller } from '../api/apis.js';
    export default {
         data(){
            return{
               data:{},
               valueDisabled: 0
            }
        },
        created(){
            getSeller().then((res)=>{
                 console.log(res.data.data)
                 this.data = res.data.data
            })
        },
    }
</script>

<style lang="less" scoped>
     .business-div{
        height: 100%;
        margin-bottom: 60px;
        background: rgb(233, 229, 227);

         .score{
            width: 100%;
            height: 150px;
            background: #fff;
           
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            .score-top{
                // text-align: center;
                width: 100%;
                padding: 10px;
                border-bottom: 1px solid rgb(196, 182, 182);
                display: flex;
                .score-top-left{
                    width: 80%;
                }
                .score-top-right{
                    width: 20%;
                }
            }
             .score-bottom{
                display: flex;
                width: 100%;
               
                padding: 10px;
                display: flex;
                text-align: center;
                .first{
                    flex: 1;
                    .font{
                        font-size: 22px;
                    }
                }
                .scende{
                   flex: 1;
                    .font{
                        font-size: 22px;
                    }

                }
                .third{
                    flex: 1;
                     .font{
                        font-size: 22px;
                    }
                    
                }
            }
        }
        
        .business-bottom{
            padding: 15px;
            width: 100%;
            height: 100%;
            background: #fff;
            .notice-text{
                color: rgb(204, 80, 80);
                margin-left: 10px;
            }
            .activity{
                width: 100%;
                p{
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    img{
                        width: 20px;
                       vertical-align:top;
                       margin-top: 9px;
                    }
                }
            }
        }
        .business-scene{
            margin-top: 20px;
            padding: 15px;
            width: 100%;
            height: 100%;
            background: #fff;
           
            .scene{
                 display: flex;
                 div{
                     img{
                         margin-left: 10px;
                        width: 120px;
                        height: 100px;
                }
                 }
                
            }
        }
        .business-information{
            margin-top: 20px;
            padding: 15px;
            width: 100%;
            height: 100%;
            background: #fff;
            .information{
                width: 100%;
                height: 40px;
                line-height: 40px;
            }
        }
       

    }
</style>