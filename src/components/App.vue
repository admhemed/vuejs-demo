<template>
  <body>
  <top-nav/>
  <div class="wrapper">


    <breadcrumbs/>

    <div class="content">

      <p>In our urban and suburban houses what should we do without cats? In our sitting or bedrooms, our libraries, in our kitchens and storerooms, our farms, barns, and rickyards, in our docks, our granaries, our ships, and our wharves, in our corn markets, meat markets, and other places too numerous to mention, how useful they are! In our ships, however, the rats oft set them at defiance; still they are of great service.</p>

      <p>How wonderfully patient is the cat when watching for rats or mice, awaiting their egress from their place of refuge or that which is their home! How well Shakespeare in Pericles, Act iii., describes this keen attention of the cat to its natural pursuit!</p>

      <blockquote><p>The cat, with eyne of burning coal, Now crouches from (before) the mouse's hole.</p></blockquote>

      <p>A slight rustle, and the fugitive comes forth; a quick, sharp, resolute motion, and the cat has proved its usefulness. Let any one have a plague of rats and mice, as I once had, and let them be delivered therefrom by cats, as I was, and they will have a lasting and kind regard for them.</p>


    </div>

    <blockquote class="leftnav">
      <p>Let any one have a plague of rats and mice, as I once had, and let them be delivered therefrom by cats, as I was, and they will have a lasting and kind regard for them.</p>
    </blockquote>

  </div>
  111111111111<router-view></router-view>2222222222222
  </body>
</template>

<script>
  import TopNav from 'Components/TopNav.vue';
  import Breadcrumbs from 'Components/Breadcrumbs.vue';
  export default {
    components: {
      TopNav,
      Breadcrumbs
    },
    name: 'App'
  };
</script>
