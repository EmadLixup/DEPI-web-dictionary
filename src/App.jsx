import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { IoSearch } from "react-icons/io5";
import Heading from "./components/heading/heading";
import Content from "./components/content/content";

function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Word Not Found");
      }
      const data = await response.json();
      setResults(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.error(error.message);
    }
  };
  const heading = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "").audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <nav className="mb-4">
          <h3 className="font-bold">WebDictionary</h3>
        </nav>
        <div className="flex items-center border border-gray-400 rounded-xl overflow-hidden">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="w-full border-none outline-none px-4 py-2"
            placeholder="Search..."
          />
          <button className="px-4 py-2" onClick={handleSearch}>
            <IoSearch className="w-5 h-5 text-purple-500 font-bold" />
          </button>
        </div>
        {results?.meanings?.length > 0 && (
          <>
            <Heading {...heading()} />

            {results.meanings.map((content, index) => (
              <Content key={index} {...content} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
