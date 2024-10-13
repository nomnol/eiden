const throttle = (callback, time) => {
  let throttleTimer;
  console.log()

  return () => {
    if (throttleTimer) return
    throttleTimer = true

    setTimeout(() => {
      callback()
      throttleTimer = false
    }, time);
  }
}

export default throttle;
