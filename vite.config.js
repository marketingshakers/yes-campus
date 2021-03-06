import path from 'path'
// import svite from 'svite'

// const sviteConfig = {
//   hot: true,
//   useTransformCache: false, // default is true, but HMR is broken then
// }

let config = {
  alias: {
    '/$/': path.resolve(__dirname, './src'),
    '/$collections': path.resolve(__dirname, './src/collections'),
    '/$components/': path.resolve(__dirname, './src/components'),
    '/$lib/': path.resolve(__dirname, './src/lib'),
  },
  // plugins: [
  //   svite(sviteConfig),
  // ],
  optimizeDeps: {
    include: ['paper/dist/paper-core'],
    exclude: ['@roxi/routify'],
    include: ['dayjs/esm', 'dayjs/esm/plugin/calendar'],
  },
}

export default config
