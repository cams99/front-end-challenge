import { useState } from 'react'
import PropTypes from 'prop-types'

import MenuView from '@components/MenuView'
import Avatar from '@components/Avatar'

import { Layout, Divider } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Content, Sider } = Layout

const AppLayout = ({ router }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className='site-layout-background'>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint='lg'
        theme={'light'}
        style={{ background: '#cbe6f3' }}
      >
        <div className='logo'>
          <div onClick={onCollapse} className={'fold-unfold-menu center-flex'}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <img
            style={{
              height: '100%',
            }}
            alt={'Logo'}
            src={'logo192.png'}
          />
        </div>
        <Divider type={'horizontal'} />
        <Avatar collapsed={collapsed} />
        <Divider type={'horizontal'} />
        <MenuView />
      </Sider>
      <Content className='layout-content'>{router}</Content>
    </Layout>
  )
}

AppLayout.propTypes = {
  router: PropTypes.node.isRequired,
}

export default AppLayout
