import { useState } from "react";
import ConversionCard from "./ConversionCard";
import { ArrowLeftRight } from "lucide-react";
import { conversionCategories } from "./config/conversionConfig";

function App() {
  const [input, setInput] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 flex">
              Imperial
              <ArrowLeftRight className="w-14 h-14 text-indigo-600 dark:text-indigo-400" />
              SI
            </h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Convert between imperial and metric units instantly.
          </p>
          <div className="max-w-2xl pb-2 text-lg text-gray-900 dark:text-gray-100">
            Input number to convert:
            <input
              type="number"
              name="my input"
              value={input}
              className="bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 p-2 ml-2 border border-gray-300 dark:border-slate-600"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div className="max-w-2xl">
            <div className="flex flex-col md:flex items-left justify-between max-w-xl p-12 shadow-md bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100">
              <ConversionCard
                category={conversionCategories.ImperialToSI}
                input={input}
              />
              <ConversionCard
                category={conversionCategories.SItoImperial}
                input={input}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
