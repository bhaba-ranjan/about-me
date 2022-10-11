import React, { Component } from 'react';

class Header extends Component {


   componentDidMount = () =>{
     setTimeout(()=>{
      document.getElementById('aboutId').click()
     },50)
   }
  render() {

    if(this.props.data){
      var name = "Bhabaranjan";
      var occupation= this.props.data.occupation;
      var description= "Currently employed by ";
      var description2 = " where I enhance developer experience by providing a solid platform. This website is an attempt to share my work and experience to help the community."
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a id = 'aboutId' className="smoothscroll" href="#about">About</a></li>	         
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>            
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi! I'm {name}.</h1>            
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
