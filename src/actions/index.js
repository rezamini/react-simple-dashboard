export const SET_PIE_SERIES = 'SET_PIE_SERIES';
export const SET_PIE_OPTION = 'SET_PIE_OPTION';
export const SET_SCATTER_SERIES = 'SET_SCATTER_SERIES';
export const SET_SCATTER_OPTION = 'SET_SCATTER_OPTION';
export const SET_LINE_SERIES = 'SET_LINE_SERIES';
export const SET_LINE_OPTION = 'SET_LINE_OPTION';
export const SET_BAR_SERIES = 'CREATE_BAR_CHART';
export const SET_BAR_OPTION = 'SET_BAR_OPTION';
export const SET_CARD_VALUES = 'SET_CARD_VALUES';

export const setPieSeries = (dataSeries) => {
  return {
    type: SET_PIE_SERIES,
    payload: dataSeries
  };
};

export const setPieOption = (labels) => {
  return {
    type: SET_PIE_OPTION,
    payload: labels
  };
};

export const setScatterSeries = (dataSeries) => {
  return {
    type: SET_SCATTER_SERIES,
    payload: dataSeries
  };
};

export const setLineSeries = (dataSeries) => {
  return {
    type: SET_LINE_SERIES,
    payload: dataSeries
  };
};

export const setBarSeries = (dataSeries) => {
  return {
    type: SET_BAR_SERIES,
    payload: dataSeries
  };
};

export const setBarOption = (labels) => {
  return {
    type: SET_BAR_OPTION,
    payload: labels
  };
};

export const setCardValues = (labels) => {
  return {
    type: SET_CARD_VALUES,
    payload: labels
  };
};

// export const setScatterOption = (labels) => {
//   return {
//     type: SET_SCATTER_OPTION,
//     payload: labels
//   };
// };

// export const setLineOption = (labels) => {
//   return {
//     type: SET_LINE_OPTION,
//     payload: labels
//   };
// };
