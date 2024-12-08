type Callback = (...args: any[]) => void;

const throttle = (callback: Callback, time: number) => {
  let isThrottled: Boolean = false;

  return () => {
    if (isThrottled) return
    isThrottled = true

    setTimeout(() => {
      callback()
      isThrottled = false
    }, time);
  }
}

export default throttle;
