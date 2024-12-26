
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header>
      <div className="w-full px-4 py-4 flex justify-between items-center shadow-md">
        <h3 className="font-bold text-2xl">Brainiark</h3>

        {/* Desktop Nav */}
        <nav>
          
        </nav>
        {/* Mobile Nav */}
        <MobileMenu />
      </div>
    </header>
  );
};
export default Navbar;