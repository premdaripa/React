import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [ammount, setAmmount] = useState(null);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  //getting api resposnse in json format
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const BackgroundImage = "https://images.pexels.com/photos/1036644/pexels-photo-1036644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
    setAmmount(convertedAmmount);
  };

  const convert = () => {
    setConvertedAmmount(ammount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From" 
              ammount={ammount}
              onAmmountChange={setAmmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
              ammount={convertedAmmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              ammountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toLowerCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
