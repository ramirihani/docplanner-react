import React from "react";

export default function Cart(props) {
  return (
    <div className="Twocart">
      {props.cart.map((el, i) => (
        <div
          className="mainCart"
          style={{ borderRadius: "5%", backgroundColor: `${el.back}` }}
        >
          <p>{el.info}</p>
          <h3>{el.title}</h3>

          {el.select ? (
            <select>
              {el.select.map((el, i) => (
                <option>{el}</option>
              ))}
            </select>
          ) : null}
          <img src={el.image} alt="pc" />
        </div>
      ))}
    </div>
  );
}
