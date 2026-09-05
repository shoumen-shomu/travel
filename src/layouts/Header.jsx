import Container from "../components/common/Container";
import Images from "../components/common/Images";
import logo from "../../src/assets/logo.png";
import { Link } from "react-router";
import { MdMessage } from "react-icons/md";
import { FaLocationArrow, FaHeart, FaPlus } from "react-icons/fa";

const Header = () => {
  const navitems = [
    { name: "HOME", path: "/" },
    { name: "PAGES", path: "/pages" },
    { name: "TRAVEL", path: "/travel" },
    { name: "BLOG", path: "/blog" },
    { name: "SHOP", path: "/Shop" },
    { name: "LEMENTS", path: "/lements" },
  ];

  const actionItems = [
    { icon: MdMessage, label: "Message" },
    { icon: FaLocationArrow, label: "Location" },
    { icon: FaHeart, label: "Favourite" },
    { icon: FaPlus, label: "Add" },
  ];
  return (
    <>
      <section>
        <div className="pt-3.25 pb-3.75 bg-white">
          <Container>
            <div className="flex items-center justify-between">
              <div className="logo">
                <Images imgSrc={logo} />
              </div>
              <nav className="menu">
                <ul className="flex gap-12">
                  {navitems.map(({ path, name }) => (
                    <li
                      className="font-mont font-medium text-[15px] text-[#036E8A]"
                      key={path}
                    >
                      <Link to={path}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex gap-[10.5px]">
                {actionItems.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    className="p-2 rounded-full border border-[#036E8A] flex justify-center items-center cursor-pointer"
                  >
                    <Icon className="text-[#036E8A]" />
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
