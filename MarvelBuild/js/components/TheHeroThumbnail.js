export default {
    name: 'TheHeroThumb',

    props: {
        hero: Object
    },

    template:
    `
    <li @click="loadLightBox">
        <img :src='"images/" + hero.biopic' alt="hero image" width="150">
        <div class="sprite" style="background-image: url(../images/" + hero.lbBG')"></div>
        <div class="red-bumper"></div>
        <h5 class={{ hero.name }}</h5>
    </li>
    `,

    methods: {
        loadLightboxData() {
            this.$emit('loadlb',this.hero)
        }
    }

}


