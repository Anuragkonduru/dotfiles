/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const EducationItems = (props) => {
  return (
    <div className="w-11/12 lg:w-2/3 xl:w-2/4 overflow-auto shadow-md ring-1 ring-black/5 transition-transform ease-in-out hover:scale-110 hover:bg-white dark:ring-white/10 hover:dark:bg-gray-800 sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        <li>
          <a
            className="block hover:bg-gray-50 dark:hover:bg-gray-900"
            target="_blank"
            href={props.url}
            rel="noreferrer"
          >
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-md text-gray-700 dark:text-white md:truncate">
                  {props.institution}
                </p>
                <div className="ml-2 flex flex-shrink-0">
                  <p className="inline-flex rounded-fullpx-2 text-xs font-semibold leading-5 ">
                    {props.studyType} - {props.area}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="text-md flex items-center font-light text-gray-500 dark:text-gray-300">
                    {props.endDate}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default EducationItems;
