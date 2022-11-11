
import HeroThumb from'./components/TheHeroThumbnail.js';
import Lightbox from './components/TheLightboxComponent.js'

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
           // fetch calls always go here -->retrieve any data you need
           fetch('./data.json')//go and get the remote data
             .then(res => res.json())//convert the json object to plain JS object
             .then(data => this.heroData = data)//store the data un the vue instance
            .catch(error => console.error(error)); //report any errors
        },

        data() {
            return {
                heroData: {},
                lightboxData: {}
            }
        },

    

        methods: {
            loadLightbox(item) { 
                //debugger;
                this.lightboxData = item;
            }
        },

        components: {
            herothumbnail: HeroThumb,
            Lightbox: Lightbox
        }
     

    }).mount('#app')
})()