import PropTypes from 'prop-types'
import { Button, Col, Row, Typography } from 'antd'

const { Title } = Typography

const HeaderPage = ({ showDrawer, title, titleButton }) => {
  const handlerShowDrawer = () => {
    showDrawer()
  }

  return (
    <Row
      type='flex'
      justify='center'
      align='top'
      style={{ marginBottom: '20px' }}
    >
      <Col xs={24} sm={24} md={12} lg={12}>
        <Title>{title}</Title>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} className='header-button'>
        {titleButton && (
          <Button className='new-button' onClick={handlerShowDrawer}>
            {titleButton}
          </Button>
        )}
      </Col>
    </Row>
  )
}

HeaderPage.defaultProps = {
  title: 'Title',
}

HeaderPage.propTypes = {
  title: PropTypes.string,
  titleButton: PropTypes.string,
  showDrawer: PropTypes.func,
}

export default HeaderPage
