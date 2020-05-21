<template>
  <GmapMap
    :center="{lat: 35.68, lng: 139.76}"
    :zoom="14"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      :icon="{url: require('@/assets/999.png')}"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
    export default {
        data() {
            return {
                markers: [
                    { position: { lat: 35.68, lng: 139.76 } }
                ],
            }
        },
        methods:
            console.log(process.env.googleMapAPIKey)
    }
</script>

<style scoped>

</style>
