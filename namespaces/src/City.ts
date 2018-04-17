/// <reference path="City_extended.ts" />

namespace City {
  export const name: string = 'Kyiv';

  export class CityClass {
    constructor(private name: string) {
      this.name = name;
    }
  }
}