import React, { useEffect, useState } from "react";
import heroImage from "../images/hero-img.jpg";
import "../components-css/Home.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Home() {
  const [restoList, setRestoList] = useState([]);
  const categories = [
    "Cuisine Classics",
    "Global Gastronomy",
    "Healthy Eats",
    "Dining with a View",
    "Family-Friendly Feasts",
  ];
  const descriptions = [
    "Explore timeless flavors from Italian pasta to Mexican tacos. Satisfy your cravings with our city's best traditional restaurants.",
    "Embark on a culinary journey through international delights. Sample diverse dishes from around the world at our partner eateries.",
    "Discover nutritious and delectable dining options. We've curated a selection of restaurants serving wholesome and delicious meals for a balanced lifestyle.",
    "Dine with a picturesque backdrop. Explore our list of restaurants offering stunning cityscape and waterfront views.",
    "Plan family outings with ease. Find kid-friendly restaurants with menus designed to please both children and adults.",
  ];

  useEffect(() => {
    fetch("https://resto-app-55zy.onrender.com/resturants")
      .then((responce) => {
        responce.json().then((results) => {
          setRestoList(results);
        });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="hero-text-div">
          <h1>
            <span>Welcome</span> To <span>Resto.com</span>
          </h1>
          <p>
            Are you craving mouthwatering cuisine from your favorite local
            restaurants or eager to explore new flavors in your city? Look no
            further than Resto.com.
          </p>
          <button className="join-btn">Join Resto.com</button>
        </div>
        <div className="hero-image-div">
          <img className="hero-image" src={heroImage} alt="" srcset="" />
        </div>
      </div>

      <div className="categories-div-wrapper">
        <h1>Categories</h1>
        <div className="card-wrapper">
          {categories.map((data, i) => (
            <div className="categories-card">
              <h4>{data}</h4>
              <p>{descriptions[i]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="resgistered-resto-wrapper">
        <h1>Resturants</h1>
        <div className="resto-card-list">
          {restoList && restoList.map((data) => (
            <div className="card">
              <h1>{data.name}</h1>
              <p className="card-p">{data.description}</p>
              <span className="card-s">{data.rating}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-wrapper">
        <h1>About Us</h1>
        <div className="about-us-card-wrapper">
          <div className="cards-container">
            <div className="aboutus-cards">
              <h3>1. Introduction</h3>
              <p>
                "Resto.com: Your Gateway to Culinary Delights! Discover a world
                of delectable dining experiences as top restaurants collaborate
                to offer exclusive promotions and unforgettable tastes. Join us
                today!
              </p>
            </div>
            <div className="aboutus-cards">
              <h3>2. Mission Values</h3>
              <p>
                Mission: "To unite restaurants, fuel local culinary culture, and
                delight food lovers. We empower restaurants to grow and offer
                diners irresistible promotions, fostering a vibrant dining
                community."
              </p>
            </div>
            <div className="aboutus-cards">
              <h3>3. Promotions and Offers</h3>
              <p>
                "Resto.com brings you culinary magic with exclusive promotions
                and irresistible offers from diverse restaurants. Explore a
                world of flavors while enjoying fantastic savings. Discover,
                savor, and save!"
              </p>
            </div>
          </div>
          <div className="email-container">
            <div className="emailbox-btn">
              <input type="text" placeholder="email" />
              <button>Email</button>
            </div>
          </div>
        </div>
          <hr style={{ width:'100%',height:'2px', background:"#ffff",outline:'none', border:'none',marginTop:'60px'}}/>
          <div className="social-media-div">
            <span style={{color:'#ffff'}}>&copy;don't copy the contect</span>
            <FacebookIcon  className="icon" style={{color:"cadetblue"}}/>
            <InstagramIcon className="icon" style={{color:"cadetblue"}}/>
            <TwitterIcon className="icon" style={{color:"cadetblue"}}/>
          </div>
      </div>
    </div>
  );
}

export default Home;
