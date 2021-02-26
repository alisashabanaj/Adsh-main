import React, { Component } from "react";
import  AdsContext  from "../context";

import Loading from "./Loading";
import Ad from "./Ad";
import Title from "./Title";
export default class FeaturedAds extends Component {
  static contextType = AdsContext;
  render() {
    let { loading, featuredAds: ads } = this.context;
    ads = ads.map(Ad => {
      return <Ad key={Ad.id} Ad={Ad} />
    });
    

    return (
      <section className="featured-ads">
        <Title title="featured ads" />
        <div className="featured-ads-center">
          {loading ? <Loading /> : ads}
        </div>
      </section>
    );
  }
}
