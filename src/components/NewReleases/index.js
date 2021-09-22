import {Component} from 'react'
import Cookies from 'js-cookie'
import DisplayNewReleases from '../DisplayNewReleases'
import './index.css'

class NewReleases extends Component {
  state = {newReleasesData: []}

  componentDidUpdate() {
    this.userNewReleasesData()
  }

  userNewReleasesData = async () => {
    const {country} = this.props
    const token = Cookies.get('pa_token')
    const newReleasesapiUrl = `https://api.spotify.com/v1/browse/new-releases?country=${country}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const userNewReleasesResponse = await fetch(newReleasesapiUrl, options)
    const userNewReleasesDetails = await userNewReleasesResponse.json()
    this.setState({
      newReleasesData: userNewReleasesDetails.albums.items,
    })
  }

  render() {
    const {newReleasesData} = this.state
    return (
      <div className="new-releases-bg-container">
        <h1 className="title">RELEASED THIS WEEK</h1>
        <div className="new-releases-content-container">
          {newReleasesData.map(newReleasesSong => (
            <DisplayNewReleases
              songData={newReleasesSong}
              key={newReleasesSong.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default NewReleases
