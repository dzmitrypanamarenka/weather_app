export default (weather) => {
  const url = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/';
  const icon = `${weather[0].icon}.png`;
  return url + icon;
};
