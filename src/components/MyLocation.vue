<template>
  <GoogleMap
  ref="mapRef"
  api-key="AIzaSyCI8LGJTKuz_SOtASq4Wjk_KjJHWZvrl9Y"
  class="map"
  :center="center"
  :zoom="2"
  />
  <label for="lng">Longitude</label>
  <input v-model.number="lng" id="lng" type="number" min="-180" max="180" step="10" />

  <button>click me</button>

</template>


<script>
import { defineComponent, ref, computed, watch } from 'vue'
import { GoogleMap } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap },

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
        

    }

},

  setup() {
    const mapRef = ref(null)
    const center = { lat: 0, lng: 0 }

    const _lng = ref(0)
    const lng = computed({
      get: () => _lng.value,
      set: v => {
        if (!Number.isFinite(v)) {
          _lng.value = 0
        } else if (v > 180) {
          _lng.value = 180
        } else if (v < -180) {
          _lng.value = -180
        } else {
          _lng.value = v
        }
      },
    })

    watch(lng, () => {
      if (mapRef.value?.ready) {
        mapRef.value.map.panTo({ lat: 0, lng: lng.value })
      }
    })

    return { mapRef, center, lng }
  },
    


 
})
</script>


<style scoped>
.map {
  position: relative;
  width: 100%;
  height: 500px;
}

.map::after {
  position: absolute;
  content: '';
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: red;
}

input[type='number'] {
  width: 200px;
  margin-top: 20px;
  margin-left: 10px;
}
</style>