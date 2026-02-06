// Distance and length conversions

const FtToM = (feet) => {
  return feet * 0.3048;
};

const MToFt = (meters) => {
  return meters / 0.3048;
};

const YdToM = (yards) => {
  return yards * 0.9144;
};

const MToYd = (meters) => {
  return meters / 0.9144;
};

const MilesToKm = (miles) => {
  return miles * 1.60934;
};

const KmToMiles = (kilometers) => {
  return kilometers / 1.60934;
};

const InToCm = (inches) => {
  return inches * 2.54;
};

const CmToIn = (centimeters) => {
  return centimeters / 2.54;
};

// Weight and mass conversions

const LbsToKg = (pounds) => {
  return pounds * 0.453592;
};

const KgToLbs = (kilograms) => {
  return kilograms / 0.453592;
};

const OzToG = (ounces) => {
  return ounces * 28.3495;
};

const GToOz = (grams) => {
  return grams / 28.3495;
};

// Volume conversions

const GalToL = (gallons) => {
  return gallons * 3.78541;
};

const LToGal = (liters) => {
  return liters / 3.78541;
};

const FlOzToMl = (fluidOunces) => {
  return fluidOunces * 29.5735;
};

const MlToFlOz = (milliliters) => {
  return milliliters / 29.5735;
};

// Temperature conversions

const FtoC = (fahrenheit) => {
  return fahrenheit - 32 * (5 / 9);
};

const CtoF = (celsius) => {
  return celsius * (9 / 5) + 32;
};

// Export all conversion functions
export {
  // Distance and length conversions
  FtToM,
  MToFt,
  YdToM,
  MToYd,
  MilesToKm,
  KmToMiles,
  InToCm,
  CmToIn,
  // Weight and mass conversions
  LbsToKg,
  KgToLbs,
  OzToG,
  GToOz,
  // Volume conversions
  GalToL,
  LToGal,
  FlOzToMl,
  MlToFlOz,
  // Temperature conversions
  FtoC,
  CtoF
};
