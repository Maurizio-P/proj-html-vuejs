<template>
  <div id="background">
      <div class="container">
          <div class="row">
              <div class="col-8">
                  <h5 id="subtitle">ROAD TRANSPORT</h5>
                  <div class="main-title my-3">
                     <h2 class="pe-2">Main</h2>
                     <div class="d-flex align-items-center" id="services">
                         <h2>Services</h2>
                     </div>
                  </div>
                    <p>With all of this expertise and capability comes an unrivalled commitment to customer service. We will work hard to understand your nedd in order to develop a productive, long-term partneship.</p>
              </div>

                <div class="col-1 ms-auto d-flex align-items-end p-2">
                    <button class="btn" @mouseover="buttonHoverOn()" @mouseout="buttonHoverOff()" :class="hover === true ? 'btn-material-green' : 'btn-nobg-bordergreen' " ><a href="">SE ALL</a></button>
                </div>
          </div>
        <div class="card-container">
            <Card1 v-for="card, i in arrayServices" :key="i" :card="card" />
           
        </div>
      </div>
  </div>
</template>

<script>
import Card1 from './Card1.vue'
export default {
  components: { Card1 },
    name: "MainService",

    data(){
        return{
            hover: false,

            arrayServices: [
                {
                    icon: "fas fa-truck-loading",
                    title: "Technology",
                    text: "We are continually focused on developing technology solutions adapted to our client's needs."
                },
                {
                    icon: "fas fa-thermometer-three-quarters",
                    title: "Refeer Cargo",
                    text: "Regular and frequent monitoring from the receipt of the loaded container to final destination."
                },
                {
                    icon: "fas fa-boxes",
                    title: "Dry Cargo",
                    text: "We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care."
                }
            ]
        }
    },

    methods: {
        buttonHoverOn() {
            this.hover = true
        },

        buttonHoverOff(){
            this.hover = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
#background{
    background-color: $section-color-black;
    padding: 100px 0;

    .row{
        
        .col-8{

            #subtitle{
                color: $text-color-green;
                font-size: 12px;
            }

            .main-title{
                display: flex;
                align-items: center;
                color: white;

                #services{
                    background-color: rgba($color: #16928e, $alpha: .2);
                    color: $text-color-green;
                    font-weight: bold;
                    margin-right: 5px;
                    padding: 5px;
                }
            }

            p{
                color: $text-color-grey;
            }
        }

        .col-1{
            button{

                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }

    .card-container{
        display: flex;
        justify-content: center;
        gap: 20px;
    }
}
</style>