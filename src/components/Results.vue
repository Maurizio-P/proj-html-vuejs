<template>
  <div id="background">
    <div class="overlay"></div>
    <div class="container">
      <div class="text">
        <h5 id="subtitle">WHAT ARE WE DOING</h5>
        <div class="main-title my-3">
          <div class="d-flex align-items-center" id="results">
            <h2>Results</h2>
          </div>
          <h2 class="ps-2">in Numbers</h2>
        </div>
      </div>
      <div class="container-data">
          <div class="data" v-for="data, i in dataNumber" :key="i">
              <h2 class="data-number">{{data.number}}</h2>
              <h2 class="data-text">{{data.text}}</h2>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",

  data() {
      return {
          dataNumber: [
              {
                  number: "128",
                  text: "Certifications"
              },
              {
                  number: "230",
                  text: "Employees"
              },
              {
                  number: "517",
                  text: "Customers"
              },
              {
                  number: "94",
                  text: "Countries Served"
              },
          ] 
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#background {
  background-image: url("../assets/bg-10.jpg");
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.6);
  }

  .container {
    position: relative;
    z-index: 1;
    padding: 100px 0;

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;

      #subtitle {
        color: $text-color-green;
        font-size: 12px;
      }

      .main-title {
        display: flex;
        align-items: center;
        color: white;

        #results {
          background-color: rgba($color: #16928e, $alpha: 0.2);
          font-weight: bold;
          margin-right: 5px;
          padding: 5px;
        }
      }
    }

    .container-data{
        display: flex;
        justify-content: space-around;
        padding-top: 100px;

        .data-number{
            color: $text-color-green;
            text-align: center;
        }

        .data-text{
            text-align: center;
            color: white;
        }
    }
  }
}
</style>