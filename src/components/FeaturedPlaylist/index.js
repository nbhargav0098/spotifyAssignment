import {Component} from 'react'
import Cookies from 'js-cookie'
import DisplayNewReleases from '../DisplayNewReleases'
import './index.css'

class FeaturedPlaylist extends Component {
  state = {featuredData: []}

  componentDidUpdate() {
    this.getFeaturedSongsData()
  }

  getFeaturedSongsData = async () => {
    const token = Cookies.get('pa_token')
    const featuredSongsUrl = `https://api.spotify.com/v1/browse/featured-playlists`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const featuredSongsResponse = await fetch(featuredSongsUrl, options)
    const featuredSongsDetails = await featuredSongsResponse.json()
    this.setState({
      featuredData: featuredSongsDetails.playlists.items,
    })
  }

  render() {
    const {featuredData} = this.state
    return (
      <div className="new-releases-bg-container">
        <h1 className="title">FEATURED PLAYLISTS</h1>
        <div className="new-releases-content-container">
          {featuredData.map(featuredSong => (
            <DisplayNewReleases songData={featuredSong} key={featuredSong.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default FeaturedPlaylist
