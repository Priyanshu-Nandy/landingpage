import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero">
        <div className="big-text">
        <h1>Transform Your</h1>
        <h1>Marketing with Proactiv</h1>
        </div>
        <div className="smaller-text">
        <h3>Automate Campaigns, Engage Audiences, and Boost</h3> 
        <h3>Lead Generation with Our All-in-One Marketing Solution</h3>
        </div>
        <div className="avatars-rating">
        <div className="avatars">
            <img className="avatar" src="src\assets\hero-image\girl.jpg" alt="" />
            <img className="avatar" src="src\assets\hero-image\boy.jpg" alt="" />
            <img className="avatar" src="src\assets\hero-image\girl.jpg" alt="" />
            <img className="avatar" src="src\assets\hero-image\boy.jpg" alt="" />
            <img className="avatar" src="src\assets\hero-image\girl.jpg" alt="" />
            <img className="avatar" src="src\assets\hero-image\boy.jpg" alt="" />
        </div>
        <div className="rating">
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        </div>
        </div>
        <p>Trusted by 27,000+ creators</p>
        <button>Book a Demo</button>
    </div>
  )
}

export default Hero