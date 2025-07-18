import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="\media\images\kite.png"
        ProductTitle="Kite"
        ProductDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        playStore=""
        appleStore=""
      />
      <RightSection
        imageUrl="\media\images\console.png"
        ProductTitle="Console"
        ProductDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.

"
        learnMore=""
      />
      <LeftSection
        imageUrl="\media\images\coin.png"
        ProductTitle="Coin"
        ProductDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        playStore=""
        appleStore=""
      />
      <RightSection
        imageUrl="\media\images\kiteconnect.png"
        ProductTitle="Kite Connect API"
        ProductDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />

      <LeftSection
        imageUrl="\media\images\varsity.png"
        ProductTitle="Varsity mobile"
        ProductDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        playStore=""
        appleStore=""
      />
        <h5 className="text-center text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
      <Universe />
    </>
  );
}

export default ProductPage;
