import {Component} from 'react'
import Cookies from 'js-cookie'
import DisplayBrowseContent from '../DisplayBrowseContent'
import './index.css'

class Browse extends Component {
  state = {browseData: []}

  componentDidMount() {
    this.getBrowseSongsData()
  }

  getBrowseSongsData = async () => {
    const token = Cookies.get('pa_token')
    const featuredSongsUrl = `https://api.spotify.com/v1/browse/categories`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const browseSongsResponse = await fetch(featuredSongsUrl, options)
    const browseSongsDetails = await browseSongsResponse.json()
    this.setState({
      browseData: browseSongsDetails.categories.items,
    })
  }

  render() {
    const {browseData} = this.state
    return (
      <div className="new-releases-bg-container">
        <h1 className="title">FEATURED PLAYLISTS</h1>
        <div className="new-releases-content-container">
          {browseData.map(browseSong => (
            <DisplayBrowseContent songData={browseSong} key={browseSong.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Browse
