import { SET_SCATTER_SERIES, SET_SCATTER_OPTION } from '../actions'

const initialState = {
  series: [],
  options: {
    chart: {
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy'
      }
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function(val) {
          return parseFloat(val).toFixed(2)
        }
      },
      title: {
        text: "X Axis",
        style: {
          color: '#008FFB',
        }
      },
    },
    yaxis: {
      tickAmount: 7,
      title: {
        text: "Y Axis",
        style: {
          color: '#008FFB',
        }
      },
    },
    title: {
      text: 'Scatter Chart Users Patterns',
      align: 'center',
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
      },
    },
  },
}

const scatterChartReducer = (state = initialState, action) => {
  switch(action.type){

    case SET_SCATTER_SERIES:
      return Object.assign({}, state, {
        series: [...state.series, action.payload]
      })
    case SET_SCATTER_OPTION:
      return Object.assign({}, state, {
        options: {
          ...state.options,
          labels: action.payload
        },
      })
    default:
        return state;
  }
}

export default scatterChartReducer;
