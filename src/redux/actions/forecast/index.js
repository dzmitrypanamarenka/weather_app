import receiveForecastAsync from './actions_async';
import forecastActions from './actions';

export default {
  receiveForecastAsync,
  ...forecastActions,
};


