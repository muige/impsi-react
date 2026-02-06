import * as conversions from "../utils/conversions";

export const conversionCategories = {
  ImperialToSI: {
    title: "Imperial to SI",
    conversions: [
      { text: "Feet to Meters", function: conversions.FtToM },
      { text: "Yards to Meters", function: conversions.YdToM },
      { text: "Miles to Kilometers", function: conversions.MilesToKm },
      { text: "Inches to Centimeters", function: conversions.InToCm },
      { text: "Pounds to Kilograms", function: conversions.LbsToKg },
      { text: "Ounces to Grams", function: conversions.OzToG },
      { text: "Gallons to Liters", function: conversions.GalToL },
      { text: "Fluid Ounces to Milliliters", function: conversions.FlOzToMl },
      { text: "Fahrenheit to Celsius", function: conversions.FtoC },
    ],
  },
  SItoImperial: {
    title: "SI to Imperial",
    conversions: [
      { text: "Meters to Feet", function: conversions.MToFt },
      { text: "Meters to Yards", function: conversions.MToYd },
      { text: "Kilometers to Miles", function: conversions.KmToMiles },
      { text: "Centimeters to Inches", function: conversions.CmToIn },
      { text: "Kilograms to Pounds", function: conversions.KgToLbs },
      { text: "Grams to Ounces", function: conversions.GToOz },
      { text: "Liters to Gallons", function: conversions.LToGal },
      { text: "Milliliters to Fluid Ounces", function: conversions.MlToFlOz },
      { text: "Celsius to Fahrenheit", function: conversions.CtoF },
    ],
  },
};
