import React, { Component } from "react";
import items from "./data";
// import Client from "./Contentful";

const AdsContext = React.createContext();
// <AdsContext.Provider value={'hello'}
export class AdsProvider extends Component {
  state = {
    ads: [],
    sortedAds: [],
    featuredAds: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    simpleAd: false,
    vector: false
  };
   
  componentDidMount() {
    // this.getData();
    let ads = this.formatData(items);
    let featuredAds = ads.filter(ad => ad.featured === true);
    let maxPrice = Math.max(...ads.map(item => item.price));
    let maxSize = Math.max(...ads.map(item => item.size));
    this.setState({
      ads,
      featuredAds,
      sortedAds: ads,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let ad = { ...item.fields, images, id };
      return ad;
    });
    return tempItems;
  }
  getAds = slug => {
    let tempAds = [...this.state.ads];
    const ad = tempAds.find(ad => ad.slug === slug);
    return ad;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterAds
    );
  };
  filterAds = () => {
    let {
      ads: ads,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      simpleAd,
      vector
    } = this.state;
    // all the ads
    let tempAds = [...ads];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempAds = tempAds.filter(ad => ad.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempAds = tempAds.filter(ad => ad.capacity >= capacity);
    }
    // filter by price
    tempAds = tempAds.filter(ad => ad.price <= price);
    // filter by size
    tempAds = tempAds.filter(
      ad => ad.size >= minSize && ad.size <= maxSize
    );
    // filter by simpleAd
    if (simpleAd) {
      tempAds = tempAds.filter(ad => ad.simpleAd === true);
    }
    // filter by vector
    if (vector) {
      tempAds = tempAds.filter(ad => ad.vector === true);
    }
    // change state
    this.setState({
      sortedAds: tempAds
    });
  };
  render() {
    return (
      <AdsContext.Provider
        value={{
          ...this.state,
          getAds: this.getAds,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </AdsContext.Provider>
    );
  }
}

const AdConsumer = AdsContext.Consumer;

export function withAdConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <AdConsumer>
        {value => <Component {...props} context={value} />}
      </AdConsumer>
    );
  };
}

export default { AdsProvider, AdConsumer, AdsContext };
