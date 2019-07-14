function formatTime(minutes) {
  let days = parseInt(minutes / 1440);
  let hours = parseInt((minutes % 1440) / 60);
  let minutes = (minutes % 1440) % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes`;
}

formatTime(120);
formatTime(59);
formatTime(3601);
