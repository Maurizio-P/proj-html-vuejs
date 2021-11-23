<template>
  <div id="background">
      <div class="container">
          <div class="text">
              <h5 id="subtitle">CUSTOMER TESTIMONIAL</h5>
                  <div class="main-title my-3">
                     <h2 class="pe-2">Trusted</h2>
                     <div class="d-flex align-items-center" id="services">
                         <h2>Feedback</h2>
                     </div>
                  </div>
                    <p>We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition</p>
          </div>
      <div class="card-container">
          <Card2 v-for="card, i in arrayFeedback" :key="i " :card="card" />
      </div>
      </div>
  </div>
</template>

<script>
import Card2 from './Card2.vue'
export default {
  components: { Card2 },

  data(){
      return {
          arrayFeedback: [
              {
                  img: require("@/assets/logo-1.png"),
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta ex amet sint eaque! Fuga quia corporis similique alias blanditiis commodi nulla provident mollitia maxime ea! Consectetur ex nihil perferendis!"
              },
              {
                  img: require("@/assets/logo-2.png"),
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta ex amet sint eaque! Fuga quia corporis similique alias blanditiis commodi nulla provident mollitia maxime ea! Consectetur ex nihil perferendis!"
              },
              {
                  img: require("@/assets/logo-3.png"),
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta ex amet sint eaque! Fuga quia corporis similique alias blanditiis commodi nulla provident mollitia maxime ea! Consectetur ex nihil perferendis!"
              },
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#background{
    background-color: $section-color-black;
    padding: 100px 0;

    .container{

        .text{
            display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 200px;
        text-align: center;
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
    }

    .card-container{
        display: flex;
        justify-content: space-around;
        gap: 20px;
        margin-top: 20px;
    }

}
</style>