const counter = (
  end: number,
  endTime: number,
  setFunc: (number: number) => void
) => {
  let now = end;

  const handle = setInterval(() => {
    if (now < 0) {
      setFunc(end);
      clearInterval(handle);
    }
    setFunc(Math.ceil(end - now));
    const step = now / 10;
    now -= step;
  }, 50);
};

export default counter;
