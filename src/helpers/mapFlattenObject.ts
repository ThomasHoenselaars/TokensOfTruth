import { isString, isNumber, isObject } from 'lodash-es';

interface MapFlattenObjectConfig<T, U> {
  data: T,
  needle: keyof T,
  transform: (x: [string | number, any]) => U,
  delimeter?: string;
  prefix?: string;
}
export function mapFlattenObject<T, U>(config: MapFlattenObjectConfig<T, U>) {
  const { data, needle, transform, delimeter = '-', prefix } = config;
  let output: Array<U> = [];

  const extractor = (items: T[keyof T] | object, labels: string[]) => {

    const keyValuePairs = Object.entries(items);

    keyValuePairs.forEach(([key, value]) => {
      if (isString(value) || isNumber(value)) {
        const concatKey = labels.length ? `${labels.join(delimeter)}${delimeter}${key}` : key;
        output = [...output, transform([concatKey, value])];
        return;
      }

      if (isObject(value)) {
        extractor(value, [...labels, key]);
        return;
      }

      throw new Error('The value needs to be an object, string or number.');
    })
  };

  extractor(data[needle], prefix ? [prefix] : []);

  return output;
}