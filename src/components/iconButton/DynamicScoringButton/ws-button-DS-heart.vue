<template>
  <div class="rating" style="display: inline-flex">
    <ul class="list">
      <li @click="rate(star)"
          v-for="star in maxStars"
          :class="{'active':star <= stars}"
          class="star">
        <svg class="icon" aria-hidden="true" v-bind="star" >
          <use :xlink:href="star <= stars? '#icon-heart' :'#icon-x-heart'"></use>
        </svg>

      </li>

    </ul>
    <span v-if="hasCounter">[动态]{{stars}} of {{maxStars}}</span>
  </div>
</template>

<script>
  import "../../../assets/icon/iconfont"

  export default {

    data(){
      return{
        stars:3,
        maxStars: 5,
        hasCounter:true
      }
    },
    methods:{
      rate(star){
        this.stars = this.stars === star ? star-1 : star;
      }
    }
  }
</script>

<style scoped lang="scss" >
  @import "../../../assets/styles/mixin.scss";
  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: px2rem(10);
    color: #000000;
  }
  .list {
    margin: 0 0 5px 0;
    padding: 0;
    list-style-type: none;

  }
  .list:hover .star {
    color: #f3d23e;
  }
  .star {
    display: inline-block;
    cursor: pointer;
  }
  .star:hover ~ .star:not(.active) {
    color: inherit;
  }
  .active {
    color: #f3d23e;
  }

  #test{
    color: white;
  }

  #test:hover{
    background-color: orangered;
  }
  .icon{
    width: px2rem(100);
    height: px2rem(100);
  }
</style>
