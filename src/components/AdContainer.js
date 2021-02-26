import React from "react";
import AdsFilter from "./AdFilter";
import AdsList from "./AdList";
import { withAdConsumer } from "../context";
import Loading from "./Loading";

function AdContainer({ context }) {
  const { loading, sortedAds, ads } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <AdsFilter ads={ads} />
      <AdsList ads={sortedAds} />
    </>
  );
}

export default withAdConsumer(AdContainer);

