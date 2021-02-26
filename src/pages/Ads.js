import React from "react"; 
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import AdContainer from "../components/AdContainer";
const Ads = () => {
  return (
    <>
        <Banner title="our ads">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner> 
      <AdContainer />
    </>
  );
};

export default Ads;
