<template>
  <div class="rating" style="display: inline-flex">
    <ul class="list">
      <li @click="rate(star)"
          v-for="star in maxHeart"
          :class="{'active':star <= stars}"
          class="star">
        <svg class="icon" aria-hidden="true" v-bind="star" >
          <use :xlink:href="star<=stars? '#icon-heart' :'#icon-x-heart'"></use>
        </svg>

      </li>

    </ul>
    <span v-if="hasCounter">[静态]{{stars}} of {{maxHeart}}</span>
  </div>
</template>

<script>
  import "../../../assets/icon/iconfont"


  export default {
    props:{
      grade:{
        type:Number,
        required:true
      },
      maxHeart:{
        type: Number,
        default:5
      },
      hasCounter:{
        type:Boolean,
        default: true
      }
    },
    data(){
      return{
        stars:this.grade
      }
    },
    methods:{
      rate(star){
        ifr(typeof star === 'number' && star <= this.maxHeart && star >=0)
        {
          this.stars = this.stars === star ? star - 1 : star
        }
      }
    }
  }
</script>

<style scoped lang="scss" >
  @import "../../../assets/styles/mixin.scss";
  .rating {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: px2rem(20);
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

  .describe{
    font-size: px2rem(60);
  }
</style>
