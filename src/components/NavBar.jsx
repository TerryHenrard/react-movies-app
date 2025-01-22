import { NavLink } from 'react-router';

export const NavBar = () => {
  const navLinkStyle = ({ isActive }) => {
    return (
      'hover:bg-[#7891ff] px-7 py-1 rounded-full transition-colors ' +
      (isActive ? 'bg-[#546FE4]' : '')
    );
  };

  return (
    <>
      <nav className={'flex gap-3 p-5'}>
        <NavLink to={'/'} className={navLinkStyle}>
          Accueil
        </NavLink>
        <NavLink to={'/favorites'} className={navLinkStyle}>
          Favoris
        </NavLink>
      </nav>
    </>
  );
};
