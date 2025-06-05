import "./styles/Hero.css";
import HeroImage from "./../assets/hero.png";
import AppStore from "./../assets/AppStore.png";
import GooglePlay from "./../assets/GooglePlay.png";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero">
        <div className="hero_content">
          <h1>Your Favorite Food Delivery Partner</h1>
          <p>
            The food at your doorstep. Why starve when you have us. You <br />
            hunger partner. Straight out of the oven to your doorstep.
          </p>

          <div className="hero_input">
            <input type="text" placeholder="Enter your delivery location" />
            <button>Order Now</button>
          </div>
        </div>
        <div className="hero_img">
          <img src={HeroImage} alt="Hero image" />
        </div>
      </div>

      <div className="app_download">
        <img src={AppStore} alt="" />
        <img src={GooglePlay} alt="" />
      </div>
    </div>
  );
};

export default Hero;
