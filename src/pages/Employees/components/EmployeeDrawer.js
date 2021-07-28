import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  Button,
  Col,
  Divider,
  Drawer,
  Input,
  Row,
  Typography,
  message,
  Image,
} from 'antd'
import { validateQuantity } from '@utils/utils'

const { Title } = Typography

function EmployeesDrawer({
  edit,
  editData,
  visible,
  closable,
  editEmployee,
  addEmployee,
}) {
  const { employeeLoading } = useSelector(
    ({ employeesReducer }) => employeesReducer
  )
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')
  const [age, setAge] = useState(null)

  const loadInformation = () => {
    setId(edit ? editData.id : '')
    setName(edit ? editData.name : '')
    setSalary(edit ? editData.salary : '')
    setAge(edit ? editData.age : '')
  }

  useEffect(() => {
    loadInformation()
    if (employeeLoading) closable()
    // eslint-disable-next-line
  }, [visible])

  const saveData = () => {
    if (
      [name, salary, age].includes('') ||
      [name, salary, age].includes(null)
    ) {
      return message.warning('All fields are required')
    } else if (validateQuantity(salary)) {
      return message.warning('Salary field is not a number')
    } else if (validateQuantity(age)) {
      return message.warning('Age field is not a number')
    }

    let data = {
      name,
      salary,
      age,
    }

    if (edit) {
      editEmployee(id, data)
    } else {
      addEmployee(data)
    }
  }

  return (
    <Drawer
      className={'employees-drawer'}
      placement='right'
      closable={false}
      onClose={closable}
      visible={visible}
      width={'65vw'}
      zIndex={1050}
    >
      <Row gutter={16}>
        <Title> {edit ? 'Edit Employee' : 'New Employee'} </Title>
        <Divider className={'divider-custom-margins'} />
        {edit && editData.name && (
          <Row gutter={16} className={'section-space-field'}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              className='employee-image-container'
            >
              <div>
                <div className={'title-space-field'}>Image</div>
                <Image
                  className='employee-image'
                  src={`https://robohash.org/${editData.name}`}
                  alt='Employee'
                  preview={false}
                />
              </div>
            </Col>
          </Row>
        )}
        <Row gutter={16} className={'section-space-field'}>
          {edit && (
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className={'title-space-field'}>Id</div>
              <Input
                value={id}
                disabled={true}
                placeholder={'Id'}
                size={'large'}
              />
            </Col>
          )}
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={'title-space-field'}>Name*</div>
            <Input
              value={name}
              onChange={value => setName(value.target.value)}
              placeholder={'Name'}
              size={'large'}
            />
          </Col>
        </Row>
        <Row gutter={16} className={'section-space-field'}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={'title-space-field'}>Salary*</div>
            <Input
              value={salary}
              onChange={value => setSalary(value.target.value)}
              placeholder={'Salary'}
              size={'large'}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={'title-space-field'}>Age*</div>
            <Input
              value={age}
              onChange={value => setAge(value.target.value)}
              placeholder={'Age'}
              size={'large'}
            />
          </Col>
        </Row>
      </Row>

      <Row gutter={16}>
        <Divider className={'divider-custom-margins'} />
        <Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'right' }}>
          <Button type={'link'} className='cancel-button' onClick={closable}>
            Cancel
          </Button>
          <Button
            loading={employeeLoading}
            htmlType='submit'
            className='new-button'
            onClick={saveData}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Drawer>
  )
}

EmployeesDrawer.propTypes = {
  edit: PropTypes.bool.isRequired,
  editData: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  closable: PropTypes.func.isRequired,
  editEmployee: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
}

export default EmployeesDrawer
