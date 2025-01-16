import menu from '../assets/menu.svg';
import target from '../assets/target.svg';
const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex">
          <img src={target} alt="" />
          <h1 className="pl-1">Untitled UI</h1>
        </div>
        <div>
          <button className="lg:hidden sm:block">
            <img src={menu} alt="" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
