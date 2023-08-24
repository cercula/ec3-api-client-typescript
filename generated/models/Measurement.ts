/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Measurement = {
  /**
   * Mean (average) value of the measurement
   */
  mean: number;
  /**
   * Measurement unit
   */
  unit: Measurement.unit;
  /**
   * relative standard deviation, i.e. standard_deviation/mean
   */
  rsd?: number;
  dist?: 'log-normal' | 'normal' | 'uniform' | 'triangular' | 'max';
};

export namespace Measurement {

  /**
   * Measurement unit
   */
  export enum unit {
    KG_CO2E = 'kgCO2e',
    KG_CFC11E = 'kgCFC11e',
    KG_SO2E = 'kgSO2e',
    KG_NE = 'kgNe',
    KG_O3E = 'kgO3e',
  }


}

