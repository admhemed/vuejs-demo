<template>
    <nav class="topnav">
      <ul>
        <li><a href="">
            <img
                    src="../images/logo-pink.png"
                    srcset="../images/logo-pink@2x.png 2x,../images/logo-pink@3x.png 3x"
                    class="logo">
        </a></li>
        <li><a href="">
            <input
                v-on:click="$event.preventDefault();"
                type="text"
                name="search"
                placeholder="Search Companies">
        </a></li>
        <li><a href="">Habits</a></li>
        <li><a href="">Trained Cats</a></li>
        <li><a href="">Usefulness of Cats</a></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'TopNav'
};
</script>
