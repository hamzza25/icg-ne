/* eslint-disable react/prop-types */
function Card({ title, paragraph }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl flex flex-col p-4">
      {title && (
        <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      )}
      {paragraph && (
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-4 text-justify">
          {paragraph}
        </p>
      )}
    </div>
  );
}

export default Card;