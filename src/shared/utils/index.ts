export const delay = (delay: number) =>
  new Promise((resolved) => {
    setTimeout(() => {
      resolved(1)
    }, delay)
  })
