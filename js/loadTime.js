function getTime(deadline) {
  // thời gian hết hạn

  const deadlineDate = new Date(deadline);
  // const now = Date.now();
  const now = new Date();

  const distant = (deadlineDate - now) / 1000; //giay
  // console.log(distant); // mili giây

  const days = Math.floor(distant / 3600 / 24);
  const hours = Math.floor(distant / 3600) % 24;
  const mins = Math.floor(distant / 60) % 60;
  const secs = Math.floor(distant) % 60;

  $(".time-days").text(formatTime(days));
  $(".time-hours").text(formatTime(hours));
  $(".time-mins").text(formatTime(mins));
  $(".time-secs").text(formatTime(secs));
}

function formatTime(time) {
  return `0${time}`.slice(-2);
}
setInterval(() => {
  getTime("2022-07-29");
}, 1000);
