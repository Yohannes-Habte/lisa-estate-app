import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <article className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <NavLink to={'/'}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap hover:underline  hover:text-red-500 ">
            <span className="text-slate-500 ">Lisa</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </NavLink>

        <form
          action=""
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline hover:text-red-500">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline hover:text-red-500">
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li className="text-slate-700 hover:underline hover:text-red-500">
            <NavLink to={'/login'}>Sign In</NavLink>
          </li>
        </ul>
      </article>
    </header>
  );
};

export default Header;
