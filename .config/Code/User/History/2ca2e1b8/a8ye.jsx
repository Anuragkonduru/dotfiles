/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const EducationItems = (props) => {
  return (
    <div className="overflow-auto shadow-md transition-transform ease-in-out hover:scale-110 hover:bg-white dark:ring-white/10 hover:dark:bg-gray-800 sm:rounded-md">
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
                  {props.studyType} - {props.area}
                </p>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="text-md flex items-center font-light text-gray-500 dark:text-gray-300">
                    {props.institution} - {props.endDate}
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
