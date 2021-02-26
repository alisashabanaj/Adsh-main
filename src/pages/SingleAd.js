import React, { Component } from "react";
import defaultBcg from "../images/ad-1.jpeg"; 
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
 
import AdsContext from '../context';
export default class SingleAd extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = AdsContext;
  // componentDidMount() {}
  render() {
    const { getAd } = this.context;
    const ad = getAd(this.state.slug);
    if (!ad) {
      return (
        <div className="error">
          <h3>no such ad could be found...</h3>
          <Link to="/ads" className="btn-primary">
            back to ads
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = ad;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
          <Banner title={`${name} ad`}>
            <Link to="/ads" className="btn-primary">
              back to ads
            </Link>
          </Banner>
        <section className="single-ad">
          <div className="single-ad-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-ad-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="ad-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
