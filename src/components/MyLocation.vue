<template>
  
  <div class="i-map">
  <GoogleMap
  api-key="AIzaSyCI8LGJTKuz_SOtASq4Wjk_KjJHWZvrl9Y"
  style="width: 70%; height: 500px ; margin-top:40px"
  
  :center='center'
  :zoom='zoom'
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>

    
  <button @click="geolocate" class="maps-button"> Click me to get your current location</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },

  methods:{
     getPosition()
      {

        if(navigator.geolocation){
            console.log("hello i exist")

            var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
            };
           

            return new Promise((res, rej) => {
             navigator.geolocation.getCurrentPosition(res, rej,options);

             console.log(res)
         });

           

            
            
        }
        
        if(navigator.geolocation==false)
        {
            
            this.error = "Geolocation is not supported."; 
            console.log(this.error)
        }

        
       
    },

    async showPosition(){

        //console.log(position.coords.latitude);
		//console.log(position.coords.longitude);


        var position = await this.getPosition();  // wait for getPosition to complete
        console.log(position);


       

        let x= position.coords.latitude
        let y = position.coords.longitude

        console.log(x)
        console.log(y)

        this.center1.lat=x
        this.center1.lng=y


        let z= {lat:x, lng:y}

        console.log(this.center1)

        

        return z;
        

    },



    geolocate(){

        navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                this.zoom= 17
      });

    }

},


    data()
    {
        return{
           center: {
            lat : 30.3753,
            lng : 69.3451 } ,

            zoom: 7
        }
    },


  

 
})
</script>



<style scoped>
.i-map
{
display: flex;
flex-direction: column;
align-items: center;


}


.maps-button
{
    margin-top: 20px;
    margin-bottom: 20px;
    height: 40px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #F2F8FF;
    color: black    ;
    cursor: pointer;
    border-radius: 3px;
    border: 2px solid #C2DBFF;
    font-weight: 550;

}

.maps-button:hover
{

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


}
</style>