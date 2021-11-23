<template>
  <div class="logistical">
    <div class="container">
      <div class="text">
        <h5 id="subtitle">HOT IT WORKS IN PRATICE</h5>
        <div class="main-title my-3">
          <div class="d-flex align-items-center" id="logistical">
            <h2>Logistical</h2>
          </div>
          <h2 class="ps-2">Procedure</h2>
        </div>
        <p>
          With all of this expertise and capability comes an unrivalled
          commitment to customer service. We will work hard to understand your
          nedd in order to develop a productive, long-term partneship.
        </p>
      </div>
    </div>
    <div class="procedures">
      <div class="procedure" v-for="(step, i) in arrayProcedures" :key="i">
        <div class="step">
          <h3>0{{ i }}</h3>
        </div>
        <h2>{{ step.title }}</h2>
        <p>{{ step.text }}</p>
      </div>
    </div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: "Logistical",

  data() {
    return {
      arrayProcedures: [
        {
          title: "Collection of information",
          text: "lorem ipsum dolor",
        },
        {
          title: "Service Invoice Sending",
          text: "lorem ipsum dolor",
        },
        {
          title: "Withdrawal of Cargo",
          text: "lorem ipsum dolor",
        },
        {
          title: "Transport Customer Order",
          text: "lorem ipsum dolor",
        },
        {
          title: "Successful Delivery",
          text: "lorem ipsum dolor",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
.logistical {
  padding: 100px 0;
  text-align: center;
  background-color: rgba($color: #e6ece8, $alpha: 1);
  position: relative;
}
.container {
  padding: 0 200px !important;
}
.text {
  #subtitle {
    color: $text-color-green;
    font-size: 12px;
  }

  .main-title {
    display: flex;
    align-items: center;
    justify-content: center;

    #logistical {
      color: $text-color-green;
      background-color: rgba($color: #16928e, $alpha: 0.2);
      font-weight: bold;
      margin-right: 5px;
      padding: 5px;
    }
  }
}

.procedures {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  background-color: rgba($color: #000000, $alpha: 0);

  .procedure {
    display: flex;
    flex-direction: column;
    align-items: center;
    .step {
      background-color: #16928e;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;

      h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: black;
      }
    }
  }
}
.bar {
  height: 10px;
  background-color: rgba($color: #16928e, $alpha: 0.3);
  position: relative;
  top: -115px;
}
</style>