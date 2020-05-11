export function debounce<T>(fn: (...args: T[]) => void, delay: number) {
  let timeoutID: number;
  return (...args: T[]) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function throttle<T>(fn: (...args: T[]) => void, delay: number) {
  let last: number = 0;
  return (...args: T[]) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
}
