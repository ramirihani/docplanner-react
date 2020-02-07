import React from "react";

export default function Platform(props) {
  return (
    <div className="plat">
      <div className="platLeft">
        <h1>The world's biggest healthcare platform</h1>
        <p>
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries.
        </p>
        <img src="https://www.docplanner.com/img/logo.png" alt="logo" />
      </div>
      <div className="flex">
        {props.plat.map((el, i) => (
          <div className="platRight">
            <img src={el.icon} alt="image" />
            <h1>{el.title}</h1>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
