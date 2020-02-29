<template>

    <div class="goods-div">
        <div class="goodsLeft selected">

            <ul class="content">

                <div :class="{goodsLeft:true,selected:index == curSelectd}" 
                     v-for="(item,index) in data" :key="item.name" 
                     @click="clickTitle(index)">
                    <img style="width:12px" src="../assets/imgs/特.png" v-show="item.type==1" alt="">
                    <img style="width:12px" src="../assets/imgs/特.png" v-show="item.type==2" alt="">
                    <span>{{item.name}}</span> 
                 
                </div>
            </ul>
           
           
            
        </div>
        <div class="goods-right">
            <ul class="content">
                <div :id="index" class="goods-all" v-for="(item,index) in data" :key="item.id">
                    
                    <h2>{{item.name}}</h2>
                    <div class="goods-contant" v-for="(v,a) in item.foods" :key="a">
                    <img :src="v.image">
                    <div class="goods-contant-right">
                        <h3>{{v.name}}</h3>
                        <p>月销售{{v.sellCount}}份 好评率{{v.rating}}%</p>
                        <p>
                                <span class="goods-price">￥{{v.price}}</span>  
                                <span class="goods-oldprice">{{v.oldPrice}}</span> 
                                <span class="goods-add">
                                    <Icon type="md-add-circle" size="24" />
                                
                                </span>
                        </p>
                    </div>
                        
                    </div>
                </div>
            </ul>
           
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import { getGoods } from '../api/apis.js';


    export default {
        data(){
            return{
               data:[],
               curSelectd: 0
            }
        },
        created(){
            getGoods().then((res)=>{
                 console.log(res.data.data)
                 this.data = res.data.data
            })
        },
        mounted(){
            new BScroll(document.querySelector('.goodsLeft'),{click:true})
             this.rightDiv = new BScroll(document.querySelector('.goods-right'))
        },
        methods:{
            clickTitle(index){
                this.curSelectd = index;
                // console.log(111)
                 this.rightDiv.scrollToElement(document.getElementById(index), 600);
                
            }
        }

       
    }
            
       

    
</script>

<style lang="less" scoped>
    .goods-div{
        width: 100%;
        height: 100%;
        display: flex;

        .selected{
            background: #fff;
        }
        
        .goodsLeft{
            width: 100px;
            height: 350px;
            overflow: hidden;
            
            div{
                height: 100%;
                // line-height: 55px;
                padding: 8px;
                background: rgb(248, 243, 243);
                border-top: 1px solid #ccc;
                
                
            }
        }
        .goods-right{
            width: 100%;
            height:600px;
            overflow: hidden;
            .goods-all{
                width: 100%;
                // height: 160px;
                // background: salmon;
                h2{
                    background: #ccc;
                    padding-left: 20px;
                }
                .goods-contant{
                    display: flex;
                    width: 100%;
                    height: 100%;
                    background: #fff;;
                    padding: 10px 10px 10px 20px;
                    img{
                        width: 80px;
                        height: 80px;
                    }
                    .goods-contant-right{
                        margin-left: 10px;
                        width: 100%;
                        height: 100%;
                        p{
                            // width: 200px;
                            .goods-add{
                                margin-left: 63px;
                               
                            }
                            // .goods-price{

                            // }
                            span{
                                display: inline-block;
                                width: 50px;
                            }
                        }
                    }

                }
            }
        }

    }
</style>