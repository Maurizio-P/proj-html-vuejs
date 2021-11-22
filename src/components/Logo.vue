<template>
  <div class="logo">
      <div class="nex">
        <h2 id="nex">NEX</h2>
      </div>
      <div class="gen">
        <h2 id="gen">GEN</h2>
      </div>
  </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
    .logo{
      display: flex;
      height: 100%;
      h2{
        margin: 0;
        color: #bcbdbd;
      }

        .nex{
            background-color: rgba(0, 161, 161, 0.2);
            padding: 5px;
            padding-left: 15px;
            padding-right: 0;
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
        }
        
        .nex, .gen{
            display: flex;
            align-items: center;
        }

        #nex{
          font-size: 18px;
          color: #16928e;
        }

        #gen{
          font-size: 18px;
        }
    }
</style>