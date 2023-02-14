import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeId: 0,
  }

  onClickRightArrow = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props

    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeId: prevState.activeId + 1,
      }))
    }
  }

  changeActiveReviewList = currentReviewList => {
    const {imgUrl, username, companyName, description} = currentReviewList

    return (
      <div className="review-item-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeId} = this.state

    if (activeId > 0) {
      this.setState(prevState => ({
        activeId: prevState.activeId - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state
    const currentReviewList = reviewsList[activeId]

    return (
      <div className="reviews-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.changeActiveReviewList(currentReviewList)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
