import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.googleMapAPIKey, // YOUR_API_TOKEN
    libraries: 'places'
  },
  installComponents: true
})
