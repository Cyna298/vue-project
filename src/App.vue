<template>
  <Toast/>
  <InputText/>
  <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
</template>

<script>
 import Toast from './components/Toast.vue'
 

export default {
  name: 'App',
   components: {
     Toast
   },
  data() {
	return {
		selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
	}
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
