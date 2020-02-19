import { SET_BAR_SERIES, SET_BAR_OPTION } from '../actions'

const initialState = {
  series: [],
  options: {
    title: {
      text: 'Total Users Speed',
      align: 'center',
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      title: {
        text: "Users",
        style: {
          color: '#008FFB',
        }
      },
    },
    yaxis: {
      title: {
        text: "Meter / Minute",
        style: {
          color: '#008FFB',
        }
      },
    }
  },
}

const barChartReducer = (state = initialState, action) => {
  switch(action.type){

    case SET_BAR_SERIES:
      return Object.assign({}, state, {
        series: [{data: action.payload}]
      })
    case SET_BAR_OPTION:
      return Object.assign({}, state, {
        options: {
          ...state.options,
          xaxis: {categories: action.payload}
        },
      })
    default:
        return state;
  }
}

export default barChartReducer;
