import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOQPRSTUYWVZXabcdefghijklmnoqprstuvwyzx";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyPasswordHandeler = useCallback(() => {
    //select password just gives a visual change
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full h-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center py-4">Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            //passing ref to passwordRef
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordHandeler}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-3 px-4 w-full pb-3">
          <label className="flex gap-x-2 items-center">
            Length : {length}
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
          </label>
          <label className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed(!characterAllowed)}
            />
            Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
