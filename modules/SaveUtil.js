const SIZE_G6XY = 0x65600;
const SIZE_G6ORAS = 0x76000;
const SIZE_G6ORASDEMO = 0x5a00;

function GetIsG6SAV(data) {
  const availableSizes = [SIZE_G6XY, SIZE_G6ORAS, SIZE_G6ORASDEMO];

  if (!availableSizes.includes(data.length)) return null;

  switch (data.length) {
    case SIZE_G6XY:
      return "XY";
    case SIZE_G6ORAS:
      return "ORAS";
    default:
      return "ORASDEMO";
  }
}

function getSAVType(data) {
  var ver;

  if ((ver = GetIsG6SAV(data)) != null) return ver;
}

function getVariantSAVInternal(data) {
  var type = getSAVType(data);

  switch (type) {
    case "XY":
      return {
        type: "XY",
      };
    case "ORAS":
      return {
        game: "ORAS",
      };
    case "ORASDEMO":
      return {
        game: "ORASDEMO",
      };
  }
}

function getVariantSAV(data) {
  var sav = getVariantSAVInternal(data);

  if (sav != null) return sav;
}

export default { getVariantSAV };
