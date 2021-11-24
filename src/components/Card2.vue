<template>
  <div class="card">
      <img  :src="card.img" alt="">
      <p>{{card.text}}</p>
      <i class="fas fa-quote-right icon-quote"></i>
  </div>
</template>

<script>
export default {
    name: "Card2",
    props: {
        card: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.card{
    padding: 30px;
    background-color: #19191f;
    flex-grow: 1;
    position: relative;

    img{
        width: 150px;
        margin-bottom: 15px;
        filter: invert(1);
    }

    p{
        color: $text-color-grey;
    }

    .icon-quote{
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: 50px;
    }
}
</style>