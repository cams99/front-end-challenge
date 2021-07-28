import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  Col,
  Button,
  Row,
  Card,
  Popover,
  Divider,
  Popconfirm,
} from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const GeneralTable = ({
  columns,
  dataSource,
  loading,
  handlerEditRow,
  handlerDeleteRow,
}) => {
  const handlerControls = [
    {
      title: '',
      dataIndex: 'id',
      align: 'right',
      render: (_, data) => (
        <Popover
          placement='left'
          content={
            <div>
              {handlerEditRow && (
                <span
                  className={'options-items'}
                  onClick={() => handlerEditRow(data)}
                >
                  Edit
                </span>
              )}
              {handlerEditRow && handlerDeleteRow && (
                <Divider className={'divider-margins'} type={'horizontal'} />
              )}
              {handlerDeleteRow && (
                <Popconfirm
                  title='Estas seguro de borrar el elemento selccionado?'
                  onConfirm={() => handlerDeleteRow(data)}
                  okText='Yes'
                  cancelText='No'
                >
                  <span className={'options-items'}>Delete</span>
                </Popconfirm>
              )}
            </div>
          }
          trigger='click'
        >
          {(handlerEditRow || handlerDeleteRow) && (
            <Button shape={'circle'} className={'settings-button'}>
              <MoreOutlined />
            </Button>
          )}
        </Popover>
      ),
    },
  ]

  const [dataColumns] = useState(columns.concat(handlerControls))

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Card className={'card-border-radius'} style={{ marginTop: '20px' }}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Table
                className={'CustomTableClass'}
                dataSource={dataSource}
                columns={dataColumns}
                pagination={{
                  pageSize: 5,
                  responsive: true,
                }}
                loading={loading}
                rowKey='id'
                scroll={{ x: true }}
                filtered={e => console.log(e)}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

GeneralTable.defaultProps = {
  loading: false,
}

GeneralTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  handlerEditRow: PropTypes.func,
  handlerDeleteRow: PropTypes.func,
}

export default GeneralTable
