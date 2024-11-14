/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Link } from "react-scroll";
function NavItems(props) {
  const handleItemClick = () => {
    setTimeout(() => {
      if (props.handleClick) {
        props.handleClick();
      }
    }, 320);
  };

  return (
    <div className="cursor-pointer hover:text-dark_violet transition-transform transform duration-300 hover:dark:text-violet ">
      <Link
        to={props.to}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onSetActive={handleItemClick}
      >
        <a
          href="#"
          class="relative after:content-[''] after:absolute after:width-[100%] after:h-[2px] after:bg-violet"
        >
          :/{props.items}
        </a>
      </Link>
    </div>
  );
}

export default NavItems;
