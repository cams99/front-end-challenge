import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { MenuRoutes } from '@components/MenuRoutes'

const MenuView = () => {
  const history = useHistory()
  const [key, setKey] = useState('')

  useEffect(() => {
    let actualPath = MenuRoutes.find(m => m.route === history.location.pathname)
    actualPath && setKey(actualPath.key)
  }, [history.location.pathname])

  let returnIcon = iconName => {
    switch (iconName) {
      case 'employees':
        return <UsergroupAddOutlined style={{ fontSize: '18px' }} />
      default:
        return <></>
    }
  }

  return (
    <Menu
      mode='inline'
      selectedKeys={[key]}
      style={{ background: 'transparent' }}
    >
      {MenuRoutes.length &&
        MenuRoutes.map(option => (
          <Menu.Item
            className='center-flex'
            key={option.key}
            icon={returnIcon()}
            style={{ margin: '0', height: '50px' }}
            onClick={() => setKey(option.key)}
          >
            <Link to={option.route}>
              {returnIcon(option.icon)}
              <span className='menu-item-title' style={{ paddingLeft: '13px' }}>
                {option.name}
              </span>
            </Link>
          </Menu.Item>
        ))}
    </Menu>
  )
}
export default MenuView
