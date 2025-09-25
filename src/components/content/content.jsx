import React from "react";

const Content = ({ partOfSpeech, definitions, synonyms }) => {
  return (
    <>
      <div className="my-3">
        <div className="flex flex-row items-center text-lg font-bold font-serif">
          <p>{partOfSpeech}</p>
          <hr className="w-full ml-10" />
        </div>
        <p className="text-gray-400 mt-3 text-lg"> Meaning</p>
        <ul className="list-disc px-10 text-gray-700 text-sm space-y-2">
          {definitions.map((def, index) => (
            <li key={index}>{def.definition}</li>
          ))}
        </ul>
        {synonyms.length > 0 && (
          <p className="text-gray-400 text-sm my-2">
            Synonyms{" "}
            {synonyms.map((synonym, index) => (
              <span key={index} className="text-purple-500 font-semibold">
                {synonym}
              </span>
            ))}
          </p>
        )}
      </div>
    </>
  );
};

export default Content;
