<template>
   
    <div class="evaluate-div">
         <div class="score">
                <div class="score-left">
                    <p>3.9</p>
                    <p>综合频分</p>
                    <p>高于周边商家69.2%</p>
                </div>
                <div class="score-right">
                    <p>服务态度:</p>
                    <p>服务态度:</p>
                    <p>送达时间:</p>
                </div>
        </div>
        <div class="evaluate-contant">
            <div class="evaluate-selecte">
                <p class="degree">
                    <Button :size="buttonSize" type="primary">全部</Button>
                    <Button :size="buttonSize" type="info">满意</Button>
                    <Button :size="buttonSize" type="dashed">不满意</Button> 
                </p>
                <p class="text">
                    只看有内容的评价
                </p>
            </div>
            <div class="evaluate-user" v-for="(v,i) in data" :key="i">
                <div class="user-head">
                    <div class="head">
                        <img :src="v.avatar">
                    </div>
                    
                </div>
                <div class="user-information">
                    <p class="first">
                        <span class="username">{{v.username}}</span> 
                        <span class="ratetime">{{v.rateTime}}</span>
                    </p>
                    <p class="sconde">
                       <Rate v-model="valueDisabled" />
                        <span>{{v.deliveryTime}}分钟送达</span>
                    </p>
                    <p>{{v.text}}</p>
                    <p class="third">
                        <span>{{v.rateType}}</span> 
                        <span class="recommend" v-for="(v,i) in data[i].recommend" :key="i">
                            {{v.recommend}}
                        </span>
                    </p>
                </div>
            </div>
        </div>
      
    </div>
    
</template>

<script>
import { getRatings } from '../api/apis.js';
    export default {
        data(){
            return{
                data:[],
                valueDisabled: 0,
                 buttonSize: 'large'

            }
        },
        created(){
            
            getRatings().then((res)=>{
                 console.log(res.data.data)
                 this.data = res.data.data
            })
        
        }
    }
</script>

<style lang="less" scoped>

    
    .evaluate-div{
       
       background: rgb(233, 229, 227);

        .score{
            width: 100%;
            height: 90px;
            background: #fff;
            display: flex;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            .score-left{
                text-align: center;
                width: 40%;
                padding: 10px;
                border-right: 1px solid rgb(196, 182, 182);
            }
             .score-right{
                text-align: center;
                width: 60%;
                padding: 10px;
                
            }
        }
        
        .evaluate-contant{
             
            .evaluate-selecte{
            width: 100%;
            height: 100%;
            background: #fff;
            
            .degree{
                width: 100%;
                height: 60px;
                padding-left: 20px; 
                border-bottom: 1px solid #ccc; 
                Button{
                    margin-right: 20px;
                    margin-top: 10px;
                }

            }
            .text{
                width: 100%;
                height: 50px;
                padding-left: 20px;
                line-height: 50px;
                font-size: 16px; 
                border-bottom: 1px solid #ccc; 
            }
            
            }
            .evaluate-user{
                width: 100%;
                height: 100%;
                background: #fff;
                padding: 15px 15px 0px 15px;
                display: flex;
                .user-head{
                    width: 10%;
                    height: 100px;
                    // background: saddlebrown;
                    .head{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                            img{
                                width: 30px;
                            }
                    }
                   
                }
                .user-information{
                    width: 90%;
                    height: 140px;
                    .first{
                       
                        .ratetime{
                            margin-left: 160px;
                        }
                    }
                    .third{
                        .recommend{
                            width: 60px;
                            height: 20px;
                            margin-left: 5px;
                            display: inline-block;
                            border: 1px solid #ccc;
                        }
                    }
                }
            }
        }
        
        
        

    }
</style>