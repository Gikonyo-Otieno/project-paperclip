import { Component} from 'react'
import './NavbarStyles.css';



class Navbar extends Component{

   state = {clicked: false};
   handleClick = () => {
    this.setState({clicked: !this.state.clicked});
   };
   render() {
    return (
        <>
            <nav>
                <a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                    </svg>
                </a>

                <div>
                    <ul id="navbar" className={this.state.clicked ?
                    "navbar active" : "navbar"}>
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Shop</a></li>
                        <li><a href="index.html">Blog</a></li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Contact</a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
            </nav>



        </>
    )
}
}

export default Navbar;