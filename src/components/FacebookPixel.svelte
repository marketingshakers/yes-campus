<script>
  import { onMount } from 'svelte'

  export let id
  export let enabled = true
  export let version = '2.0'
  let pixels
  let _fbq
  export function enable () {
    init()
    track()
  }

  function startComponent () {
    if (window['fbq']) {
      _fbq = window['fbq']
      return
    }
    if (!id) {
      throw new Error(
        `id configuration parameter is required, try <FacebookPixel id="12345" /> or <FacebookPixel id={['12345', '67890']} /> for multiple pixels`
      )
    }
    pixels = Array.isArray(id) ? id : [ id ]
    /* eslint-disable */
    const scr = (f, b, e, v, n, t, s) => {
      if (f.fbq) return; n = f.fbq = function (...args) {
        n.callMethod ?
          n.callMethod.apply(n, args) : n.queue.push(args)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = version;
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.defer = true;
      t.src = v;
      s = b.getElementsByTagName('body')[0];
      s.parentNode.appendChild(t, s);
    }

    scr(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    _fbq = window['fbq']

    if (enabled) {
      enable()
    }
  }
  function init () {
    pixels.forEach(id => {
      query('init', id)
    })
  }
  export function track (event = 'PageView', data = undefined, id = undefined) {
    if (id) {
      if (pixels.includes(id)) {
        query('trackSingle', id, event, data)
        console.info('Tracked single event:', id, event, data)
      } else {
        console.warn('Attempted to send event to unknown pixel', id)
      }
    } else {
      query('track', event, data)
      console.info('Tracked event:', event, data)
    }
  }
  export function query (cmd, ...option) {
    _fbq(cmd, ...option)
  }

  onMount(startComponent)
</script>
