import * as conversions from "../utils/conversions";

export const conversionCategories = {
  ImperialToSI: {
    title: "Imperial to SI",
    conversions: [
      { text: "Ft to m", function: conversions.FtToM, unit: "m" },
      { text: "Yds to m", function: conversions.YdToM, unit: "m" },
      {
        text: "M to Km",
        function: conversions.MilesToKm,
        unit: "km",
      },
      {
        text: "In to Cm",
        function: conversions.InToCm,
        unit: "cm",
      },
      {
        text: "lbs to kg",
        function: conversions.LbsToKg,
        unit: "kg",
      },
      { text: "Oz to g", function: conversions.OzToG, unit: "g" },
      { text: "Gal to l", function: conversions.GalToL, unit: "l" },
      {
        text: "Fl Oz to ml",
        function: conversions.FlOzToMl,
        unit: "ml",
      },
      { text: "F to C", function: conversions.FtoC, unit: "C" },
    ],
  },
  SItoImperial: {
    title: "SI to Imperial",
    conversions: [
      { text: "m to Ft", function: conversions.MToFt, unit: "Feet" },
      { text: "m to Yds", function: conversions.MToYd, unit: "yards" },
      {
        text: "km to Mi",
        function: conversions.KmToMiles,
        unit: "miles",
      },
      {
        text: "cm to in",
        function: conversions.CmToIn,
        unit: "in",
      },
      {
        text: "km to lbs",
        function: conversions.KgToLbs,
        unit: "lbs",
      },
      { text: "g to Oz", function: conversions.GToOz, unit: "oz" },
      {
        text: "l to Gal",
        function: conversions.LToGal,
        unit: "Gal",
      },
      {
        text: "ml to Fl Oz",
        function: conversions.MlToFlOz,
        unit: "Fl Oz",
      },
      { text: "C to F", function: conversions.CtoF, unit: "F" },
    ],
  },
};
