import { SET_LINE_SERIES, SET_LINE_OPTION } from '../actions'

const initialState = {
  series: [],
  options: {
    chart: {
      type: 'line',
      zoom: {
        enabled: true
      },
    },
    stroke: {
      width: [3,3,3,3,3],
      curve: 'straight',
      dashArray: [5,5,5,5,5]
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
      title: {
        text: "Y Axis",
        style: {
          color: '#008FFB',
        }
      },
    },
    title: {
      text: 'Users Patterns Line Chart',
      align: 'center',
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
      },
    },
  },
}

const lineChartReducer = (state = initialState, action) => {
  switch(action.type){

    case SET_LINE_SERIES:
      return Object.assign({}, state, {
        series: [...state.series, action.payload]
      })
    case SET_LINE_OPTION:
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

export default lineChartReducer;
