<template>
  <div class="card-container-2 ">
      <div class="my-card">

        <div class="icon-container">
            <div class="icon" >
              <i id="icon-card" :class="card.icon"></i>
            </div>
            <i class="fas fa-arrow-right" id="arrow-icon"></i>
        </div>

        <div class="text-container">
            <h2 class="title">
                {{card.title}}
            </h2>

            <p class="subtitle">{{card.text}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Card1",
    props: {
        card: Object
    },

    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.card-container-2 {
    padding: 20px;
    background-color: #19191f;
    flex-grow: 1;
    margin-top: 50px;

    .my-card{

        .icon-container{
            position: relative;
    
            .icon{
                background-color: rgba($color: #16928e, $alpha: .3);
                width: 50px;
                height: 50px;
                border-radius: 50%;
                position: relative;
                display: inline-block;
    
                #icon-card{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 20px;
                    color: $text-color-green;
                }
            }
    
            #arrow-icon{
                position: absolute;
                top: 5px;
                right: 5px;
                color: #69696d;
            }   
        }

        .text-container{
            .title{
                color: white;
                margin: 20px 0;

            }

            .subtitle{
                color: $text-color-grey;
            }
        }
    }
}
</style>