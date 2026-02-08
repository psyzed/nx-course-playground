import {getUUID} from './index';

describe(`Base Tests`, () => {
  test(`should generate proper uuid`, () => {
    expect(getUUID()).toBeTruthy();
  });
});