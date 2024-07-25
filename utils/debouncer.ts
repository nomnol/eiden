const debouncer = (callback: Function, timeout = 300) => {
  let timer: any

  return (...args: []) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      timer = null

      callback(args)
    }, timeout)
  }
}

export default debouncer;
