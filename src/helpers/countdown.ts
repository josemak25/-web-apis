const SECOND = 1000;
const COUNT_DOWN_TIMER = 5 * 60;

export const getTimer = (duration: number) => {
  // get current time in seconds and find when the next run starts in seconds
  const seconds = Math.round(Date.now() / SECOND);
  const nextRun = duration * Math.ceil(seconds / duration);

  const timeLeft = nextRun - seconds;

  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  return {
    timeLeft,
    secondsLeft,
    minutesLeft,
  };
};

export const countDown = (duration: number = COUNT_DOWN_TIMER) => {
  let t = "";
  const interval = setInterval(() => {
    const { minutesLeft, secondsLeft, timeLeft } = getTimer(duration);
    t = minutesLeft + ":" + ("0" + secondsLeft).slice(-2);

    if (timeLeft <= 0) {
      clearInterval(interval);
    }
  }, SECOND);

  return t;
};
