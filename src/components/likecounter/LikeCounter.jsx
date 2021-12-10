import React,{Component} from 'react'
import HOC from '../../pages/hoc/HOC'

class LikesCount extends Component {
    render() {
      return (
        <div>
            <div style={{padding: '20px'}}>
                {this.props.CountNumber} <br />
                <button onClick={this.props.handleCLick}>Like👍🏻</button>
          </div>
        </div>
      );
    }
  }
  
  const EnhancedLikes = HOC(LikesCount, 10);
  
  export default EnhancedLikes;

