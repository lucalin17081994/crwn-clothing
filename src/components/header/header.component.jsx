import React from 'react'

//modify component to have access to redux
//higher order component
import {connect} from 'react-redux'

import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
  
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <Link className='option' to='' onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
)

//state=root reducer
const mapStateToProps=state=>({
  //state.user==userReducer from root reducer
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);