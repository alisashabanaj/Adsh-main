import React from "react";
import Ad from "./Ad";
export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3> "Create best ad for your company",
      </h3>
      </div>
    );
  }
  return (
    <section className="adslist">
      <div className="adslist-center">
        {rooms.map(item => {
          return <Ad key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
