import React from "react";
import { useContext } from "react";
import  AdsContext  from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function AdFilter({ ads }) {
  const context = useContext(AdsContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    simplead,
    vectorsAdded
  } = context;
  // get unique types
  let types = getUnique(ads, "type");
  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(ads, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search ads" />
      <form className="filter-form">
        {/*select type  */}
        <div className="form-group">
          <label htmlFor="type">ad type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/*guests   */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests  */}
        {/* ad price */}
        <div className="form-group">
          <label htmlFor="price">ad price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of ad price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">ad size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras  */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="simplead"
              id="simplead"
              checked={simplead}
              onChange={handleChange}
            />
            <label htmlFor="simplead">simplead</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="vectorsAdded"
              id="vectorsAdded"
              checked={vectorsAdded}
              onChange={handleChange}
            />
            <label htmlFor="vectorsAdded">vectorsAdded</label>
          </div>
        </div>
        {/* end of extras  */}
      </form>
    </section>
  );
}
