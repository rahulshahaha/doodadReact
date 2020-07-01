import React from 'react';
import {Helmet} from 'react-helmet-async';



class Description extends React.Component {



render(){
    var title = this.props.title === undefined ? "Doodad Capital" : this.props.title;
    var description = this.props.description === undefined ? "Hello, we are Doodad Capital. We specialize in equity research for traditionally uncovered companies." : this.props.description;
    var image = this.props.image === undefined ? "https://firebasestorage.googleapis.com/v0/b/doodad-capital.appspot.com/o/Images%2FsiteAssets%2FsquareLogo.jpg?alt=media&token=63354da3-f72a-4adc-b976-46ee40592e9f" : this.props.image;
    var type = this.props.type === undefined ? "website" : this.props.type;
    var locale = "en_US"

    return (
      <div className="Description">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content={locale} />
          </Helmet>
      </div>
    );
  }
}

export default Description;
