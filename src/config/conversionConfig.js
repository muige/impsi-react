import * as conversions from "../utils/conversions";

export const conversionCategories = {
  ImperialToSI: {
    title: "Imperial to SI",
    conversions: [
      { text: "Feet", function: conversions.FtToM, unit: "m" },
      { text: "Yards", function: conversions.YdToM, unit: "m" },
      {
        text: "Miles",
        function: conversions.MilesToKm,
        unit: "km",
      },
      {
        text: "Inches",
        function: conversions.InToCm,
        unit: "cm",
      },
      {
        text: "Pounds",
        function: conversions.LbsToKg,
        unit: "kg",
      },
      { text: "Ounces", function: conversions.OzToG, unit: "g" },
      { text: "Gallons", function: conversions.GalToL, unit: "l" },
      {
        text: "Fluid Oz",
        function: conversions.FlOzToMl,
        unit: "ml",
      },
      { text: "Fahrenheit", function: conversions.FtoC, unit: "C" },
    ],
  },
  SItoImperial: {
    title: "SI to Imperial",
    conversions: [
      { text: "m", function: conversions.MToFt, unit: "Feet" },
      { text: "m", function: conversions.MToYd, unit: "yards" },
      {
        text: "km",
        function: conversions.KmToMiles,
        unit: "miles",
      },
      {
        text: "cm",
        function: conversions.CmToIn,
        unit: "in",
      },
      {
        text: "kg",
        function: conversions.KgToLbs,
        unit: "lbs",
      },
      { text: "g", function: conversions.GToOz, unit: "oz" },
      {
        text: "l",
        function: conversions.LToGal,
        unit: "Gal",
      },
      {
        text: "ml",
        function: conversions.MlToFlOz,
        unit: "Fl Oz",
      },
      { text: "C", function: conversions.CtoF, unit: "F" },
    ],
  },
};
