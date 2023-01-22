import React from 'react';
import ReactDOM from 'react-dom';
import Rating from 'react-star-rating';
 
class rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
    <div>
        <h2>Rating from state: {rating}</h2>
        <Rating 
        name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
export default rating 