import { NavLink } from 'react-router';

export const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to={'/'}>Accueil</NavLink>
        <NavLink to={'/favorites'}>Favoris</NavLink>
      </nav>
    </>
  );
};
