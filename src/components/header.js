import { Link } from "react-router-dom";


function Header({ logOut }) {


  const handleLogOut = () => {
    logOut();
  }

  return (
    <nav className="flex items-center justify-between  bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/barbers" className="font-semibold text-xl tracking-tight">Barber</Link>
      </div>
      <div>
        <a href="#" className="inline-block 
          text-sm px-4 py-2 leading-none border
           rounded text-white border-white 
           hover:border-transparent 
           hover:text-teal-500 
           hover:bg-white mt-4 lg:mt-0"
          onClick={handleLogOut}>Log out</a>
      </div>
    </nav>
  )
}

export default Header;
