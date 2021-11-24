<template>
  <div id="background">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <div class="text">
            <h5 id="subtitle">SEND A MESSAGE</h5>
            <div class="main-title my-3">
              <h2 class="pe-2">Get in</h2>
              <div class="d-flex align-items-center" id="services">
                <h2>Touch</h2>
              </div>
            </div>
            <p>We will respond to your message as soon as possile.</p>
          </div>

          <form action="">
            <input type="text" class="name" placeholder="Name" />
            <input type="email" class="email" placeholder="Email" />
            <input
              type="number"
              name=""
              id=""
              class="phone"
              placeholder="Phone"
            />
            <input
              type="text"
              name=""
              id=""
              class="info"
              placeholder="More Info"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button class="btn btn-material-green">SEND</button>
          </form>
        </div>

        <div class="col-5">
          <h2>Example inc.</h2>
          <p>lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            repudiandae
          </p>

          <div class="contact-container">
              <div class="background-icon">
                  <i class="fas fa-phone"></i> 
              </div>
             <h3 class="ms-3">+1 (305)1234-5678</h3>
          </div>
          <div class="contact-container">
              <div class="background-icon">
                  <i class="fas fa-envelope"></i>
              </div>
             <h3 class="ms-3">hello@example.com</h3>
          </div>
          <div class="contact-container">
              <div class="background-icon">
                  <i class="fas fa-map-marker-alt"></i>
              </div>
             <h3 class="ms-3">Main Avenue, 987</h3>
          </div>

          <button class="btn btn-nobg-bordergreen" id="map">VIEW MAP</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#background {
  background-color: white;

  .container {
    padding: 100px 0;

    .col-7 {
      .text {
        #subtitle {
          color: $text-color-green;
          font-size: 12px;
        }

        .main-title {
          display: flex;
          align-items: center;

          #services {
            background-color: rgba($color: #16928e, $alpha: 0.2);
            color: $text-color-green;
            font-weight: bold;
            margin-right: 5px;
            padding: 5px;
          }
        }

        p {
          color: $text-color-grey;
        }
      }

      form {
        margin-top: 30px;

        input {
          border: none;
          background-color: #ececec;
          border-radius: 5px;
          padding: 10px 5px;
        }

        .name,
        .email,
        .phone,
        .info {
          width: calc(100% / 2 - 10px);
          margin-bottom: 10px;
          margin-right: 10px;
        }

        textarea {
          border: none;
          background-color: #ececec;
          border-radius: 5px;
          padding: 10px 5px;
          width: calc(100% - 10px);
          margin-bottom: 20px;
        }
      }
    }

    .col-5 {

        p {
          color: $text-color-grey;
        }

        .contact-container{
            margin-top: 40px;
            display: flex;
            align-items: center;
           

            .background-icon{
                background-color: rgba($color: #16928e, $alpha: .3);
                width: 50px;
                height: 50px;
                border-radius: 50%;
                position: relative;
                display: inline-block;

                i{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 20px;
                    color: $text-color-green;
                }
            }

            h3{
                color: $text-color-green;
                font-weight: lighter;
            }

        }

        #map{
            margin-top: 40px;
            color: $text-color-green;
        }
    }
  }
}
</style>