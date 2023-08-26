import React from 'react';
import home from '../assets/home.png'

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
        <div className="container-fluid shadow">
        <form className="d-flex  justify-content-between" style={styles.form} role="search">
        <input className="form-control me-10 p-2" type="search" style={styles.input} placeholder="Search" aria-label="Search" />
        <img src={home} alt="home"  />
      </form>
        </div>
 
</nav>
  );
}

export default Header;
