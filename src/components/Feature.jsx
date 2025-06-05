import "./styles/Feature.css";

const Feature = () => {
  return (
    <div>
      <section className="feature_section">
        <div>
          <h2>
            More Than <span>10,000</span> Dishes <br /> To Order!
          </h2>
          <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
        </div>
      </section>

      <section id="restaurant">
        <div id="restaurant_images">
          <div>
            <img src="/src/assets/🍕 (1).png" alt="pizza" />
            <p>Pizza</p>
          </div>
          <div>
            <img src="/src/assets/🍔.png" alt="burger" />
            <p>Burger</p>
          </div>
          <div>
            <img src="/src/assets/🍣.png" alt="" />
            <p>Sushi</p>
          </div>
        </div>

        <div id="restaurant_paragraph">
          <p className="paragraph">
            Find <span className="deals">deals</span>,{" "}
            <span className="free">free delivery</span> , and more <br /> from
            our restaurant partners.
          </p>
        </div>
        <div className="bike">
          <img src="/src/assets/Illustrations.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Feature;
