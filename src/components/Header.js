import React from 'react';
import home from '../assets/home.png'
//import search from '../assets/search.png'

const Header = () => {
  const styles = {
    form: {
      width: "100%",
      margin:"5px",
    },
    input: {
      height:"3rem",
      width: "50%",
      background:"#9B9B8B",
      
    },
   
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid shadow justify-content-between">
        <form className="d-flex  " style={styles.form} role="search">
        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
        <input className="form-control me-10 p-2 " type="search" style={styles.input} placeholder="Search" aria-label="Search"></input>
       
      </form>
      <img src={home} alt="home"  />
        </div>
 
</nav>
  );
}

export default Header;
