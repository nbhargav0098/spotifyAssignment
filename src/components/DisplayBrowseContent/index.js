import {Component} from 'react'
import './index.css'

class DisplayBrowseContent extends Component {
  truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str)

  render() {
    const {songData} = this.props
    return (
      <div className="new-release-song-container">
        <img
          src={songData.icons[0].url}
          className="new-releases-img"
          alt={`${songData.name}`}
        />
        <p className="album-name">{this.truncate(songData?.name, 8)}</p>
      </div>
    )
  }
}
export default DisplayBrowseContent
