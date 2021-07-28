import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'
import { MenuRoutes } from '@components/MenuRoutes'

const NotFound = () => (
  <Result
    status='404'
    title='404'
    subTitle='Oops, la página que visitaste no existe.'
    extra={
      <Button type='primary'>
        <Link to={`${MenuRoutes.find(route => route.route).route}`}>
          Volver al Home
        </Link>
      </Button>
    }
  />
)

export default NotFound
