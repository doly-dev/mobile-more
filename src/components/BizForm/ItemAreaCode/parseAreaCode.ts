type ParseItem = { label: string; value: string } | null;

function parseAreaCode(
  areaCode: string,
  data: { label: string; value: string }[]
): [ParseItem, ParseItem, ParseItem] {
  const provinceCode = areaCode.substring(0, 2) + '0000';
  const cityCode = areaCode.substring(0, 4) + '00';

  const province: ParseItem = data.find((item) => item.value === provinceCode) || null;
  let city: ParseItem = null;
  let area: ParseItem = null;

  if (province && cityCode !== provinceCode) {
    city = data.find((item) => item.value === cityCode) || null;
  }

  if (city && areaCode !== cityCode) {
    area = data.find((item) => item.value === areaCode) || null;
  }

  return [province, city, area];
}

export default parseAreaCode;
