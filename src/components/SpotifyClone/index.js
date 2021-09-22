import {Component} from 'react'
import Cookies from 'js-cookie'
import SideNavBar from '../SideNavBar'
import FeaturedPlaylist from '../FeaturedPlaylist'
import Browse from '../Browse'
import NewReleases from '../NewReleases'
import './index.css'

class SpotifyClone extends Component {
  state = {country: '', userName: ''}

  componentDidMount() {
    this.getInfo()
  }

  getInfo = async () => {
    const token = Cookies.get('pa_token')
    const apiUrl = `https://api.spotify.com/v1/me`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    this.setState({
      country: fetchedData.country,
      userName: fetchedData.display_name,
    })
  }

  render() {
    const {country, userName} = this.state
    return (
      <div className="home-page-bg-container">
        <SideNavBar userName={userName} />
        <div className="homepage-content-container">
          <div className="header-container">
            <div className="columns-container">
              <h1 className="description-heading">Your favourite tunes</h1>
              <spam className="description-sub-heading">
                All
                <img
                  src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
                  alt="sun-img"
                  className="sun"
                />{' '}
                and all{' '}
                <img
                  src="https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-black-512.png"
                  alt="moon-img"
                  className="moon"
                />
              </spam>
            </div>
          </div>
          <div className="content-container">
            <div>
              <NewReleases country={country} />
            </div>
            <div>
              <FeaturedPlaylist />
            </div>
            <div>
              <Browse />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotifyClone
