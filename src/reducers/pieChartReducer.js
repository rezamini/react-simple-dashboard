import { SET_PIE_SERIES, SET_PIE_OPTION } from '../actions'

const initialState = {
  series: [],
  options: {
    title: {
      text: 'Total Users Time (Minutes)',
      align: 'center',
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'right',
        }
      }
    }]
  },
}

const pieChartReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_PIE_SERIES:
      return Object.assign({}, state, {
        series: action.payload
      })
    case SET_PIE_OPTION:
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

export default pieChartReducer;
