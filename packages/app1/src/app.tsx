// export const modifyClientRenderOpts = (memo: any) => {
//   const { history } = memo

//   const originListen = history.listen
//   let added = false
//   const listeners = []
//   let unlistener  = null
  
//   history.listen = function(fn) {
//     listeners.push(fn)
//     if (added === false) {
//       added = true
//       unlistener = originListen((...args) => {
//         listeners.forEach(listener => {
//           const {location: {pathname}} = args[0]
//           if (pathname.startsWith('/sales')) {
//             listener(...args)
//           }
//         })
//       })
//     }

//     return function () {
//       const index = listeners.findIndex(f => f === fn)

//       if (index > -1) {
//         listeners.splice(index, 1)

//         if (listeners.length === 0) {
//           unlistener()
//           added = false
//         }
//       }
//     }
//   }

//   return memo;
// };