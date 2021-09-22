import {Component} from 'react'
import {IconContext} from 'react-icons'
import {FaHeart, FaSearch, FaHeadphones, FaPlayCircle} from 'react-icons/fa'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
import './index.css'

class SideNavBar extends Component {
  render() {
    const {userName} = this.props
    return (
      <div className="navbar-container">
        <div className="profile-container">
          <img
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            className="profile"
            alt="profile-img"
          />
          <h1 className="user-name">{userName}</h1>
        </div>
        <div className="routes-container">
          <div className="route-container-links">
            <div className="icon-container">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: '#fff'}}}
              >
                <div>
                  <FaHeadphones />
                </div>
              </IconContext.Provider>
            </div>
            <div className="nav-link-container">
              <p className="nav-name">Discover</p>
            </div>
          </div>
          <div className="route-container-links">
            <div className="icon-container">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: '#fff'}}}
              >
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider>
            </div>
            <div className="nav-link-container">
              <p className="nav-name">Search</p>
            </div>
          </div>
          <div className="route-container-links">
            <div className="icon-container">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: '#fff'}}}
              >
                <div>
                  <FaHeart />
                </div>
              </IconContext.Provider>
            </div>
            <div className="nav-link-container">
              <p className="nav-name">Favourites</p>
            </div>
          </div>
          <div className="route-container-links">
            <div className="icon-container">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: '#fff'}}}
              >
                <div>
                  <FaPlayCircle />
                </div>
              </IconContext.Provider>
            </div>
            <div className="nav-link-container">
              <p className="nav-name">Playlists</p>
            </div>
          </div>
          <div className="route-container-links">
            <div className="icon-container">
              <IconContext.Provider
                value={{style: {fontSize: '20px', color: '#fff'}}}
              >
                <div>
                  <RiBarChartHorizontalLine />
                </div>
              </IconContext.Provider>
            </div>
            <div className="nav-link-container">
              <p className="nav-name">Charts</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SideNavBar
