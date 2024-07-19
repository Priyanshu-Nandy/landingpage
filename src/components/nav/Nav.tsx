import "./Nav.css"
const Nav = () => {
  return (
    <div id="nav">
    <div id="left-part">
        <span className="highlight">Proactiv</span>
        <span className="hover-grey">Features</span>
        <span className="hover-grey">Pricing</span>
        <span className="hover-grey">Blog</span>
        <span className="hover-grey">Contact</span>
    </div>
    <div id="right-part">
        <span className="hover-blue">Register</span>
        <button>Book a Demo</button>
    </div>
    </div>
    
  )
}

export default Nav