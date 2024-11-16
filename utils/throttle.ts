const throttle = (callback: Function, time: any) => {
  let throttleTimer: Boolean;
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
