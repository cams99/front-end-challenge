import PropTypes from 'prop-types'

const Avatar = ({ collapsed, userName }) => (
  <div className='user-icon'>
    <img style={{ height: '100%' }} src='usuario.png' alt={'Usuario'} />
    <span
      style={
        collapsed
          ? { display: 'none', marginLeft: '0' }
          : { display: 'block', marginLeft: '10px' }
      }
    >
      {userName}
    </span>
  </div>
)

Avatar.defaultProps = {
  userName: 'User',
}

Avatar.propTypes = {
  userName: PropTypes.string,
  collapsed: PropTypes.bool.isRequired,
}

export default Avatar
