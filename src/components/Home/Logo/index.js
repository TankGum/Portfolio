import Avatar from '../../../assets/images/avatar.jpg'
import './Logo.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={Avatar}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo