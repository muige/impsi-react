import * as conversions from "../utils/conversions";

export const conversionCategories = {
  ImperialToSI: {
    title: "Imperial to SI",
    conversions: [
      { text: "Feet to Meters", function: conversions.FtToM, unit: "m" },
      { text: "Yards to Meters", function: conversions.YdToM, unit: "m" },
      {
        text: "Miles to Kilometers",
        function: conversions.MilesToKm,
        unit: "km",
      },
      {
        text: "Inches to Centimeters",
        function: conversions.InToCm,
        unit: "cm",
      },
      {
        text: "Pounds to Kilograms",
        function: conversions.LbsToKg,
        unit: "kg",
      },
      { text: "Ounces to Grams", function: conversions.OzToG, unit: "g" },
      { text: "Gallons to Liters", function: conversions.GalToL, unit: "l" },
      {
        text: "Fluid Ounces to Milliliters",
        function: conversions.FlOzToMl,
        unit: "ml",
      },
      { text: "Fahrenheit to Celsius", function: conversions.FtoC, unit: "C" },
    ],
  },
  SItoImperial: {
    title: "SI to Imperial",
    conversions: [
      { text: "Meters to Feet", function: conversions.MToFt, unit: "Feet" },
      { text: "Meters to Yards", function: conversions.MToYd, unit: "yards" },
      {
        text: "Kilometers to Miles",
        function: conversions.KmToMiles,
        unit: "miles",
      },
      {
        text: "Centimeters to Inches",
        function: conversions.CmToIn,
        unit: "in",
      },
      {
        text: "Kilograms to Pounds",
        function: conversions.KgToLbs,
        unit: "lbs",
      },
      { text: "Grams to Ounces", function: conversions.GToOz, unit: "oz" },
      {
        text: "Liters to Gallons",
        function: conversions.LToGal,
        unit: "Gallons",
      },
      {
        text: "Milliliters to Fluid Ounces",
        function: conversions.MlToFlOz,
        unit: "Fl Oz",
      },
      { text: "Celsius to Fahrenheit", function: conversions.CtoF, unit: "F" },
    ],
  },
};
