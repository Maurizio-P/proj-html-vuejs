<template>
  <div id="background">
    <div class="container">
      <div class="row">
        <div class="col my-col-1">
          <div class="logo-container">
            <Logo />
          </div>
          <p>A Functional HTML Template for Corporate & Business.</p>

          <div class="contact">
            <i class="fas fa-phone"></i> 
            <h3 class="ms-3">+1 (305)1234-5678</h3>
          </div>
          <div class="contact">
            <i class="fas fa-envelope"></i>
            <h3 class="ms-3">hello@example.com</h3>
          </div>
          <div class="contact">
            <i class="fas fa-map-marker-alt"></i>
            <h3 class="ms-3">Main Avenue, 987</h3>
          </div>
          <button class="btn btn-nobg-bordergreen">GET IN TOUCH</button>
        </div>
        <div class="col link-container">
            <ul>
                <li><h2 class="title-link">About</h2></li>
                <li class="link" v-for="link, i in aboutLink" :key="i"><i class="fas fa-chevron-right"></i><a class="ms-3" href="">{{link}}</a></li>
            </ul>
        </div>
        <div class="col link-container">
              <ul>
                <li><h2 class="title-link">Transport</h2></li>
                <li class="link" v-for="link, i in transportLink" :key="i"><i class="fas fa-chevron-right"></i><a class="ms-3" href="">{{link}}</a></li>
            </ul>
        </div>
        <div class="col link-container">
            <ul>
                <li><h2 class="title-link">Support</h2></li>
                <li class="link" v-for="link, i in supportLink" :key="i"><i class="fas fa-chevron-right"></i><a class="ms-3" href="">{{link}}</a></li>
            </ul>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
        <div class="container">
            <div class="text-container d-flex justify-content-around align-items-center">
                <h2>Enjoy the low price. We are tracking any intention of piracy.</h2>
                <h2>© 2020 NEXGEN is Proudly Powered by <a id="codings" href="">Codings</a></h2>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo },
  name: "Footer",

  data(){
      return {
          aboutLink: [
              "The Company", "Institutional", "Social & Events", "Innovation", "Environment", "Technology"
          ],
          transportLink: [
              "Industrialized", "Chemicals", "Packaged Liquids", "Costruction", "Laminated Wood", "And others"
          ],
          supportLink: [
              "Responsibility", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"
          ]
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

#background {
  background-color: $section-color-black;

  .container {
    padding: 100px 0;

    .row {
        gap: 20px;
      .my-col-1 {
          color: $text-color-grey;

        .logo-container {
          height: 50px;
        }

        p {
          color: $text-color-grey;
          margin: 20px 0;
        }

        .contact{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 16px;

            h3{
                font-weight: lighter;
                margin: 0;
            }
        }

        button{
            margin-top: 10px;
        }
      }

      .link-container{
          background-color: #19191f;
          border-radius: 10px;
          padding: 30px 20px;

          ul{
              list-style: none;

              .title-link{
                  color: white;
                  margin-bottom: 20px;
              }

            .link{
                margin-bottom: 10px;
            }
              a{
                  text-decoration: none;
                  color: $text-color-grey;
              }
          }
      }
    }
  }

  .bottom-bar{
      background-color: black;

      .container{
          padding: 0;

          .text-container{
              height: 50px;
          }

          h2{
              font-size: 16px;
              color: $text-color-grey;

              a{
                  color: $text-color-green;
                  text-decoration: none;
              }
          }
      }
  }
}
</style>