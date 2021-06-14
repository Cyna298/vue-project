<template>

<div class="outer-share-post">
    <h3>Share to Social Media</h3>
<div class="share-post-div"> 
  <s-facebook
    class="base-social"
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
  >

    <svg class="social-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="#3578E5"
    >
      <path
        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
      />
    </svg>

    
  </s-facebook>

    <s-twitter
        class="base-social"
        :windowFeatures='{"width":600,"height":540}'
        :shareOptions="shareOptions"
        :useNativeBehavior="false"
    >
        <svg
        class="social-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="#1DA1F2"
        >
        <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        />
        </svg>
    </s-twitter>
  
  </div>
</div>
</template>

<script>
  import { SFacebook } from 'vue-socials'
  import {STwitter} from 'vue-socials'

  export default {    
    components: { SFacebook, STwitter },
    
    data() {
      return {
        windowFeatures : {
            width : 900,
            height : 600
        },
        shareOptions: {
          url: 'https://en.meming.world/images/en/6/67/Cowering_Detective_Pikachu.jpg',
          quote: 'OH IT ACTUALLY WORKED HAHA',
          hashtag: '#vue #vue-socials',
          text: 'OH IT WORKS ON TWITTER TOO? HAHA',
          via: "eishatheahmad"
        },
        useNativeBehavior: false,


       
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>

<style scoped>

.outer-share-post
{
border: 1px solid #C2DBFF;
display: flex;
flex-direction: column;
width: 400px;
margin-left:38%;
margin-top: 40px;
background-color: #F2F8FF;
border-radius: 3px;

}



.share-post-div
{
border: 2px  black;

width: fit-content;
align-self: center;


}
.social-icon
{
align-self: flex-start;

align-self: center;

height: 50px;
width:50px;
padding-right: 10px;

padding-left: 10px;
cursor: pointer;


}
.social-icon:hover
{

box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

</style>