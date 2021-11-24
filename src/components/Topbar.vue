<template>
  <div id="background">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4">
            <h3><i class="far fa-clock me-2"></i>Open Hours: Mon-Sat - 9.00 - 18.00</h3>
          </div>

          <div class="col contact-top">
            <h3 class="me-3"><i class="fas fa-phone"></i> +1(305)1234-5678</h3>
            <h3 class="me-3"><i class="far fa-envelope"></i> hello@example.com</h3>
            <h3 class="me-3"><i class="fab fa-facebook-f me-2"></i> <i class="fab fa-twitter me-2"></i> <i class="fab fa-linkedin-in"></i></h3>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Topbar",
}
</script>

<style lang="scss" scoped>
  #background{
    background-color: #21333e;

    .row{
      color: #c0c3d0;
      align-items: center;
      height: 50px;
      
      h3{
        font-size: 14px;
        margin: 0;
        margin-right: 20px;
      }
    }

    .contact-top{
      display: flex;
      justify-content: flex-end;


    }
  }
</style>