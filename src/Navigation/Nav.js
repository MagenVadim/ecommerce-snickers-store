 import "./Nav.css";
 import {FiHeart} from 'react-icons/fi';
 import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';


 function Nav() {
  return (

  <nav>
    <div className="nav-container">
      <input type="text"
      className="search-input"
      placeholder="Enter your search shoes"/>
    </div>

    <div className="profile-container">
      <a href="#">
        <FiHeart className="nav-icons"/>
      </a>
      <a href="#">
        <AiOutlineShoppingCart className="nav-icons"/>
      </a>
      <a href="#">
        <AiOutlineUser className="nav-icons"/>
      </a>
    </div>

  </nav>

  )
}

export default Nav
