<script>
  import Navbar, { height } from '/$components/navigation/Navbar.svelte'
  import Cursor from '/$components/Cursor.svelte'
  import Footer from '/$components/Footer.svelte'
  import { styles } from '/$lib/styles'

  $: cssGlobals = {
    navbarHeight: `${$height}px`,
    navbarHeightNegative: `-${$height}px`,
  }
</script>

<!-- routify:options preload="proximity" -->

<Cursor/>

<div class="flex flex-col w-full min-h-screen blend duration-200" use:styles={cssGlobals}>
  <div class="z-40">
    <Navbar/>
  </div>
  <main class="flex justify-center flex-grow h-full duration-100" style="margin-top: var(--navbarHeight)">
    <slot/>
  </main>
  <Footer/>
</div>
