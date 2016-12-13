import { get, has, set } from 'lodash';

export default (object, path, defaultValueCallback) => {
  if (has(object, path)) {
    return get(object, path);
  }

  const value = defaultValueCallback();
  set(object, path, value);
  return value;
};
