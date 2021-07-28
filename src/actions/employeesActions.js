import axios from 'axios'
import {
  EMPLOYEE_ACTIONS,
  EMPLOYEE_ERROR,
  EMPLOYEE_LOADING,
  ERROR,
  GET_EMPLOYEES,
  LOADING,
} from '../types/employeesTypes'

export const getEmployees = () => async dispatch => {
  dispatch({
    type: LOADING,
  })
  try {
    const employees = await axios.get(
      'https://dummy.restapiexample.com/api/v1/employees'
    )
    dispatch({
      type: GET_EMPLOYEES,
      payload: employees.data.data.map(employee => ({
        id: employee.id,
        name: employee.employee_name,
        salary: employee.employee_salary,
        age: employee.employee_age,
      })),
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: ERROR,
      payload: error.response.data.message,
    })
  }
}

export const addEmployee = data => async dispatch => {
  dispatch({
    type: EMPLOYEE_LOADING,
  })
  try {
    const response = await axios.post(
      'http://dummy.restapiexample.com/api/v1/create',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    )
    dispatch({
      type: EMPLOYEE_ACTIONS,
      payload: response.data.message,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: EMPLOYEE_ERROR,
      payload: error.response.data.message,
    })
  }
}

export const editEmployee = (id, data) => async dispatch => {
  dispatch({
    type: EMPLOYEE_LOADING,
  })
  try {
    const response = await axios.put(
      `http://dummy.restapiexample.com/api/v1/update/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    )
    dispatch({
      type: EMPLOYEE_ACTIONS,
      payload: response.data.message,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: EMPLOYEE_ERROR,
      payload: error.response.data.message,
    })
  }
}

export const deleteEmployee = id => async dispatch => {
  dispatch({
    type: EMPLOYEE_LOADING,
  })
  try {
    const response = await axios.delete(
      `http://dummy.restapiexample.com/api/v1/delete/${id}`
    )
    dispatch({
      type: EMPLOYEE_ACTIONS,
      payload: response.data.message,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: EMPLOYEE_ERROR,
      payload: error.response.data.message,
    })
  }
}
