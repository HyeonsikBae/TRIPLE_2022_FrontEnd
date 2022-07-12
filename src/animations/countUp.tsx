const counter = (end: number, endTime: number, setFunc: object) => {
  let now = end;

  const handle = setInterval(() => {
    const time = Number(new Date());
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
