import ListUserHome from "./ListUserHome";
import Logo from "./Logo";
import SearchBy from "./SearchBy";

function Navabar() {
  return (
    <nav className="sticky w-full border-b-0 shadow-sm p-2 ">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="hidden md:block">
          <Logo />
        </div>
        {/* searchBy */}
        <div>
          <SearchBy />
        </div>
        {/* profile */}
        <div>
          <ListUserHome />
        </div>
      </div>
    </nav>
  );
}
export default Navabar;
