export default function reducer(state, action) {
  switch (action.type) {
    case 'setWeather':
      return {
        ...state,
        weather: action.value,
      };
    default:
      return state;
  }
}
