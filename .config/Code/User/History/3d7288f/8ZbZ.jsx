/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import IconItems from "./IconItems";
const SkillItems = (props) => {
  return (
    <div>
      <li className="z-10 mb-2 flex flex-row rounded-lg transition-transform hover:scale-125 hover:bg-white hover:backdrop-blur-none hover:dark:bg-gray-800 dark:hover:backdrop-blur-none">
        <div className="flex transform cursor-pointer select-none flex-col items-center justify-center gap-4   p-2 hover:shadow-lg">
          <div className="mx-4 flex h-fit w-fit flex-col justify-center pb-2">
            <div className="h-10">
              <IconItems icon={props.icon} size={"5px"} />
            </div>
          </div>
          <div className="flex-1 justify-center text-center md:w-full">
            <div className="items-center font-medium dark:text-white">
              {props.name}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SkillItems;
