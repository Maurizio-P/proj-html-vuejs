<template>
  <div class="container">
      <div class="row">
        <div class="col-8">
          <!-- sezione di sinistra -->
          <h5 id="who">WHO WE ARE</h5>
          <div class="main-title my-3">
            <div class="d-flex align-items-center" id="excellence" ><i class="far fa-gem"></i> <h2 class="ps-2">EXCELLENCE </h2></div>
            <h2> in Transport</h2>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis ullam ducimus corporis est harum nam maxime! Odit repellat voluptatum, porro nobis libero ad reprehenderit earum itaque perspiciatis, eos quia?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum veritatis ullam ducimus corporis est harum nam maxime! Odit repellat voluptatum, porro nobis libero ad reprehenderit earum itaque perspiciatis, eos quia?</p>

          <div class="container-italic p-3 my-3">
            <p> Lorp ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea commodi, est eum corporis tempore eligendi ratione. Dolore voluptatum facilis rerum necessitatibus omnis fugiat quas libero autem eaque in. Consequatur?</p>
          </div>

          <p>Sed mauris nulla, tempor eu est vel, dapibus handrerit mauris carabitur dictum pharetra</p>

          <ul class="list">
            <li>lorem ipsum</li>
            <li>Consectetur</li>
            <li>integer</li>
            <li>Facilisis</li>
            <li>Dapibus</li>
          </ul>

        </div>
        <div class="col-4">
          <!-- sezione di destra -->
          <div class="p-2">
            <h5>Vehicle Types</h5>
            <div class="container-vehicle my-3">
              <div v-for="vehicle, i in typesVehicle" :key="i" class="vehicle d-flex py-2">
                <div class="container-img p-1">
                  <img :src="vehicle.img" alt="">
                </div>
                <div class="text-vehicle">
                  <h3>{{vehicle.type}}</h3>
                  <p>Max Weight {{vehicle.maxWeight}} Kg</p>
                </div>
              </div>
            </div>
            <div class="certification">
              <h3>Certification</h3>
              <div class="img-certificate">
                <img class="certificate" src="../assets/certificate.png" alt="">
                <img class="certificate" src="../assets/certificate.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Section1",
    data(){
      return {
        typesVehicle: [
          {
            img: require("@/assets/truck-1.png"),
            type: "Light",
            maxWeight: "1200"
          },
          {
            img: require("@/assets/truck-1.png"),
            type: "Medium",
            maxWeight: "6000"
          },
          {
            img: require("@/assets/truck-1.png"),
            type: "Heavy",
            maxWeight: "24000"
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
.row{
  padding: 100px 0;
  .col-8{
    #who{
      color: $text-color-green;
      font-size: 12px;
    }

    .main-title{
      display: flex;
      align-items: center;
      color: black;

      #excellence{
        background-color: rgba($color: #16928e, $alpha: .2);
        color: $text-color-green;
        font-weight: bold;
        margin-right: 5px;
        padding: 5px;
        
        i{
          font-size: 2rem;
        }
      }


    }
      .container-italic{
        font-style: italic;
        border-left: 5px solid $text-color-grey;
      }

      .list{
        padding-left: 20px;
      }

  }

  .col-4{
    .container-vehicle{

      >:nth-child(2){
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          margin: .5rem 0 ;
          padding: 1rem 0!important;
        }

      .vehicle{

        
        .container-img{
          width: 120px;
          background-color: #7fd2d5;
          border-radius: 5px;
          box-shadow: 0px 0px 20px 0px grey;
          img{
            width: 100%;
            
          }

        }

        .text-vehicle{
          margin-left: 10px;
        }
      }
    }
  }

  .certification{

    
    .img-certificate{
      display: flex;
      justify-content: space-around;
      img{
        width: 150px;
      }

    }
  }
}
</style>