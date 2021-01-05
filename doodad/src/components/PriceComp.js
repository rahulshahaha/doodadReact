import React from 'react';
import "../css/PriceComp.css"
import {connect} from 'react-redux'
import Card from "./Card"


class PriceComp extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            price: 0
        };
    }

    componentDidMount(){
        //Call Stock API for current price
        this.setState({
            price: 110
        })
    }


render(){
    // var priceAtPublication = this.props.article !== undefined ? this.props.article.priceAtPublication : 0;
    // var currentPrice = this.state.price;

    // console.log(this.props.article)
    return (
      <div className="PriceComp">
        {/* <div className="PriceCompComponent">
            <p className="PriceCompLabel">Price at publication:</p>
            <p className="PriceCompNumber"> ${priceAtPublication}</p>
        </div>
        <div className="PriceCompComponent">
            <p className="PriceCompLabel">Current Price:</p>
            <p className="PriceCompNumber"> ${currentPrice}</p>
        </div>
        <div className="PriceCompGain">
            <p>Percent Gain/Loss: 10%</p>
        </div> */}
        <Card></Card>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    let key = ownProps.articleID;
    return {
      article: state.articles.find(article => article.key === key)
    }
  }
  
  export default connect(mapStateToProps)(PriceComp);
