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
        <li>Or</li>
        <li><a href="" class="button">New Smartlist</a></li>
        <li>
            <a href="" class="dropdown">Products</a>
            <a href="" class="dropdown">Alert</a>
            <a href="" class="dropdown">Learn</a>
        </li>
        <li class="pull-right">
            <a href="">
              <img
                      src="../images/default.png"
                      srcset="../images/default@2x.png 2x,../images/default@3x.png 3x"
                      class="chrome-logo">
            </a>
            <a href="" class="dropdown group-copy">
              <img
                      src="../images/group-copy.png"
                      srcset="../images/group-copy@2x.png 2x,../images/group-copy@3x.png 3x"
                      >
            </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'TopNav'
};
</script>
