import {
  EMPLOYEE_ACTIONS,
  EMPLOYEE_ERROR,
  EMPLOYEE_LOADING,
  ERROR,
  GET_EMPLOYEES,
  LOADING,
} from '../types/employeesTypes'

const INITIAL_STATE = {
  employees: [],
  successMessage: false,
  loading: false,
  employeeLoading: false,
  error: '',
  employeeError: '',
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, employees: action.payload, loading: false, error: '' }

    case EMPLOYEE_ACTIONS:
      return {
        ...state,
        successMessage: action.payload,
        employeeLoading: false,
        employeeError: '',
      }

    case LOADING:
      return { ...state, loading: true, error: '' }

    case EMPLOYEE_LOADING:
      return {
        ...state,
        employeeLoading: true,
        employeeError: '',
        successMessage: '',
      }

    case ERROR:
      return { ...state, error: action.payload, loading: false }

    case EMPLOYEE_ERROR:
      return { ...state, employeeError: action.payload, employeeLoading: false }

    default:
      return state
  }
}

export default usersReducer
