/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Link } from "react-scroll";
import "./link.css";
function NavItems(props) {
  const handleItemClick = () => {
    setTimeout(() => {
      if (props.handleClick) {
        props.handleClick();
      }
    }, 320);
  };

  return (
    <div className="cursor-pointer  transition-transform transform duration-300  ">
      <Link
        to={props.to}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onSetActive={handleItemClick}
      >
        <p href="#" className="link-underline">
          :/{props.items}
        </p>
      </Link>
    </div>
  );
}

export default NavItems;
