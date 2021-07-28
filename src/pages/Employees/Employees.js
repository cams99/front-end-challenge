import { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button, Space, message } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import HeaderPage from '@components/HeaderPage'
import GeneralTable from '@components/GeneralTable'
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getEmployees,
} from '@actions/employeesActions'
import EmployeesDrawer from './components/EmployeeDrawer'

const Employees = () => {
  const { employees, loading, error, successMessage, employeeError } =
    useSelector(({ employeesReducer }) => employeesReducer)
  const dispatch = useDispatch()
  const searchInput = useRef()
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editDataDrawer, setEditDataDrawer] = useState(null)

  useEffect(() => {
    dispatch(getEmployees())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) message.error(error)
  }, [error])

  useEffect(() => {
    if (employeeError) message.error(employeeError)
    if (successMessage) {
      message.success(successMessage)
      setVisible(false)
    }
  }, [employeeError, successMessage])

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(confirm)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(confirm)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({ closeDropdown: false })
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100)
      }
    },
    render: text => text,
  })

  const handleSearch = confirm => confirm()

  const handleReset = clearFilters => clearFilters()

  const showDrawer = () => {
    setVisible(true)
    setEditMode(false)
  }

  const editRow = data => {
    setEditDataDrawer(data)
    setVisible(true)
    setEditMode(true)
  }

  const deleteRow = row => {
    dispatch(deleteEmployee(row.id))
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      render: (_, data) => <span onClick={() => editRow(data)}>{data.id}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      sorter: (a, b) => a.salary - b.salary,
      responsive: ['md'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
      responsive: ['md'],
    },
  ]

  return (
    <>
      <HeaderPage
        title={'Employees'}
        titleButton={'New employee'}
        showDrawer={showDrawer}
      />
      <GeneralTable
        columns={columns}
        dataSource={employees}
        loading={loading}
        handlerEditRow={editRow}
        handlerDeleteRow={deleteRow}
      />
      <EmployeesDrawer
        closable={() => setVisible(false)}
        visible={visible}
        edit={editMode}
        editData={editDataDrawer}
        editEmployee={(id, data) => dispatch(editEmployee(id, data))}
        addEmployee={data => dispatch(addEmployee(data))}
      />
    </>
  )
}

export default Employees
