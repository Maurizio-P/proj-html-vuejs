<template>
  <div id="navbar" class="py-4">
      <div class="logo-container">
        <Logo />
      </div>
      <div class="link-container ms-auto">
          <h2 v-for="link,i in navbarLink" :key="i"><a :href="link.link">{{link.text}}</a></h2>
          <button class="btn btn-material-green">GET IN TOUCH</button>
      </div>
    
  </div>
</template>

<script>
import Logo from "./Logo.vue"
export default {
    name: "Navbar",
    components: {
        Logo
    },

    data(){
        return{
            navbarLink: [
                {
                    text: "Home",
                    link: "/home"
                },
                {
                    text: "About",
                    link: "/about"
                },
                {
                    text: "Services",
                    link: "/services"
                },
                {
                    text: "Process",
                    link: "/process"
                },
                {
                    text: "Testimonials",
                    link: "/testimonials"
                },
                {
                    text: "Profile",
                    link: "/profile"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

#navbar{
    display: flex;

    .link-container{
        display: flex;
        align-items: center;
        
        h2{
            display: inline-block;
            padding: 10px;
            text-transform: uppercase;
            margin: 0;
            font-size: 16px;

            a{
                text-decoration: none;
                color: white;
            }
        }

        button{
            font-size: 16px;
        }
    }
}
</style>