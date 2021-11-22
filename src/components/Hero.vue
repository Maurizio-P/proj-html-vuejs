<template>
  <div id="background">
      <div class="container">
          <Navbar />
          <div class="row">
              <div class="col-5">
                  <div class="text-container">
                      <div class="logistics">logistics Services</div>
                      <h1 class="main-title">Cargo Transport</h1>
                      <p>Fractional or eclusive road cargo transportation to all regions, with small, medium and large vechicles.</p>
                      <div class="button-container">
                          <button class="btn btn-material-green me-2">GET IN TOUCH</button>
                          <button class="btn btn-nobg-bordergreen">READ MORE</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="overlay"></div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },
    name: "Hero"
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
#background{
    background-image: url("../assets/bg-9.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba($color: #000000, $alpha: .6);
    }

    .container{
        position: relative;
        z-index: 1;

        .row{
        height: 800px;
        align-items: center;
        
        .col-5{

            .text-container{
                color: #bcbdbd;
                .logistics{
                    color: $text-color-green;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 12px;
                }

                .main-title{
                    color: white;
                    font-size: 60px;
                    text-transform: uppercase;
                    font-weight: bold;
                    margin: 10px 0 ;
                }
            }
        }
    }
    }
    
}
</style>