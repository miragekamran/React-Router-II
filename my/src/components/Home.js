import React from "react";

function Home(props) {
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button className="md-button shop-button" onClick={() => {props.history.push('/shop')}}>Shop now!</button>
    </div>
  );
}

export default Home;