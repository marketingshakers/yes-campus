<script>
  import { height } from '../../navigation/Navbar.svelte'
  import { fly, scale } from 'svelte/transition'
  import MouseParallax from '../../motion/MouseParallax.svelte'
  import C from '../../motion/ParallaxContainer.svelte'
  import P from '../../motion/ParallaxObject.svelte'
  import { hoverable } from '../../Cursor.svelte'
</script>

<div
  class="relative h-screen overflow-hidden lg:py-12"
  style="height: calc(100vh - {$height}px); color: white;"
>
  <div class="absolute hidden w-full h-full lg:block" in:fly={{x: 100, duration: 800}}>
    <MouseParallax
      class="absolute w-64 h-64" style=" top: 10%; right: 20%"
      scaleFactor={5}
    >
      <img src="/images/floating/YESCAMP.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-40 h-40" style="right: 0%"
      scaleFactor={20}
    >
      <img src="/images/floating/YOUNG.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-28 h-28" style="top: 60%; left: 60%"
      scaleFactor={10}
    >
      <img src="/images/floating/LEADERS.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-32 h-32" style="top: 40%; right: 10%"
      scaleFactor={6}
      negative
    >
      <img src="/images/floating/FULL.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-28 h-28" style="top: 40%; right: 10%"
      scaleFactor={4}
    >
      <img src="/images/floating/KIDS.svg" alt="" class="m-auto">
    </MouseParallax>

    <MouseParallax
      class="absolute w-52 h-52" style="top: 30%; right: 30%"
      scaleFactor={10}
      negative
    >
      <img src="/images/floating/GIRL.svg" alt="" class="m-auto">
    </MouseParallax>
  </div>

  <C class="absolute w-full h-full overflow-hidden lg:hidden" let:offset>
    <div class="absolute w-full h-full" in:fly={{y: 100, duration: 800}}>
      <P
        class="absolute w-28 h-28" style=" top: 5%; left: 5%"
        offset={offset}
        scaleFactor={5}
      >
        <img src="/images/floating/FULL.svg" alt="" class="m-auto">
      </P>

      <P
        class="absolute w-24 h-24" style=" bottom: 20%; right: 5%"
        offset={offset}
        scaleFactor={14}
      >
        <img src="/images/floating/GIRL.svg" alt="" class="m-auto">
      </P>

      <P
        class="absolute w-24 h-24" style=" top: 20%; right: 5%"
        offset={offset}
        scaleFactor={10}
      >
        <img src="/images/floating/KIDS.svg" alt="" class="m-auto">
      </P>

      <P
        class="absolute w-16 h-16" style=" bottom: 15%; left: 10%"
        offset={offset}
        scaleFactor={8}
      >
        <img src="/images/floating/YOUNG.svg" alt="" class="m-auto">
      </P>

      <P
        class="absolute w-28 h-28" style=" top: 10%; right: 24%"
        offset={offset}
        scaleFactor={4}
      >
        <img src="/images/floating/YESCAMP.svg" alt="" class="m-auto">
      </P>

      <P
        class="absolute w-24 h-24" style=" bottom: 5%; right: 40%"
        offset={offset}
        scaleFactor={10}
      >
        <img src="/images/floating/LEADERS.svg" alt="" class="m-auto">
      </P>
    </div>
  </C>

  <div class="relative flex flex-col items-center h-full transform lg:flex-row content">
    <div class="flex flex-col my-auto lg:w-1/2" in:fly={{x: -100, duration: 800}}>
      <p class="text-4xl font-bold leading-none md:text-6xl font-title" style="line-height: 0.9">
      Somos tu ecosistema de emprendimiento
      </p>
      <p class="mt-4 text-xl text-white dark:text-yes-gray-200">
      Desarrolla habilidades y despréndete de tus límites gracias a nuestros cursos y programas especializados
      </p>
      <a
        use:hoverable
        href="#servicios"
        class="mt-4 mr-auto btn-primary"
        in:fly={{x: -20, duration: 800, delay: 200}}
        >Inicia el viaje con nosotros</a
      >
    </div>
  </div>
</div>
