import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeturedAds from "../components/FeaturedAds";
export default function Home() {
  return (
    <>
      
        <Banner
          title="luxurious ads"
          subtitle="deluxe ads starting only $99"
        >
          <Link to="/ads" className="btn-primary">
            Our ads
             "Create best ad for your company",
          </Link>
        </Banner>
      <Services />
      <FeturedAds />
    </>
  );
}
