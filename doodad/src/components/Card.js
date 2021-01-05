import React from 'react';
import "../css/Card.css"

class Card extends React.Component {
    static defaultProps = {
        holding:{

        }
    }


    formatDecimal(x) {
        return parseFloat(x).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

 
    render(){

        var price = 110
        var quantity = 1
        var priceBought = 100
        var percentUp = 100*((price - priceBought) / priceBought);
        var dollarsUp = (price * quantity) - (priceBought * quantity);
        var performanceClass = dollarsUp >= 0 ? "overallPerformanceUp noSelect" : "overallPerformanceDown noSelect";
        var percentChange = ((110-109)/109)*100
        var changeType = percentChange >= 0 ? "percentChangeUp noSelect" : "percentChangeDown noSelect";
   

        //Formatting
        percentUp = percentUp.toFixed(2);
        dollarsUp = this.formatDecimal(dollarsUp.toFixed(2));
        price != null ? price = this.formatDecimal(price.toFixed(2)) : price = 0;
        priceBought = this.formatDecimal(priceBought.toFixed(2));
        quantity = this.formatDecimal(quantity.toFixed(2));
        percentChange = this.formatDecimal(percentChange.toFixed(2));


        return(
           <div className="card">
               <h1 className="companyName">Performance Snapshot</h1>
               <div className="performanceData">
                <h1 className="currentPrice">${price} <span className={changeType}>({percentChange}%)</span></h1>
                <h6 className="overall">Price at publication: ${priceBought}</h6>
                <h6 className="overall">Change since publication:<span className={performanceClass}> ${dollarsUp} ({percentUp}%)</span></h6>
               </div>
           </div>
        )
    }
   }


   export default Card;
