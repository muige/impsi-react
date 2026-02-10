const ConversionCard = ({ category, input }) => {
  return (
    <div className="py-2">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {category.title}:
      </h2>
      <div className="space-y-2 border border-2 border-gray-300 dark:border-slate-600 p-4">
        {category.conversions.map((conv, idx) => {
          const result = conv.function(Number(input) || 0);
          return (
            <div
              key={idx}
              className="flex justify-between text-gray-900 dark:text-gray-100"
            >
              <span className="text-sm">{conv.text}:</span>
              <span className="font-mono ml-2">
                {result.toFixed(2)} {conv.unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversionCard;
