<template lang="">
    <div>
        <button @click="GA">GA</button>
    </div>
</template>
<script>
export default {
    name: 'GA',
    methods:{
    GA() {
      this.$gtag.event('GA-test', {
        'event_category': 'documentation',
        'event_label': 'Just a placeholder for testing',
        'value': 1
      })
    }
    }
    
}
</script>
<style lang="">
    
</style>