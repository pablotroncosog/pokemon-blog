import React from "react";
import FavoriteContext from "../store/favoritesContext";
import Logo from "../Img/Logo.png"

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav className="bg-danger mb-2">
      <div />
      <div>
        <img src={Logo} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div className="text-light">&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;