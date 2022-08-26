import SaveUtil from "./SaveUtil.js";

function tryGetSAV(data, sav) {
  Object.assign(sav, SaveUtil.getVariantSAV(data));

  return sav != null;
}

function getSupportedFile(data) {
  var sav = {};
  if (tryGetSAV(data, sav)) return sav;
}

export default { getSupportedFile };
