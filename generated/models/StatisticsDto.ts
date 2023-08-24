/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuantityDto } from './QuantityDto';

export type StatisticsDto = {
  /**
   * 10th percentile GWP for this statistics
   */
  pct10_gwp?: number;
  /**
   * Achievable target.20th percentile of GWP per declared unit
   */
  achievable_target: number;
  /**
   * 30th percentile GWP for this statistics
   */
  pct30_gwp?: number;
  /**
   * 40th percentile GWP for this statistics
   */
  pct40_gwp?: number;
  /**
   * 50th percentile GWP for this statistics
   */
  pct50_gwp?: number;
  /**
   * 60th percentile GWP for this statistics
   */
  pct60_gwp?: number;
  /**
   * 70th percentile GWP for this statistics
   */
  pct70_gwp?: number;
  /**
   * Conservative estimate. 80th percentile of GWP per declared unit
   */
  conservative_estimate: number;
  /**
   * 70th percentile GWP for this statistics
   */
  pct90_gwp?: number;
  /**
   * Average GWP in kgCO2e per declared unit
   */
  average: number;
  /**
   * Min GWP of returned results
   */
  min: number;
  /**
   * Max GWP of returned results
   */
  max: number;
  /**
   * 20th percentile of GWP, no burden of doubt
   */
  pct20_gwp_no_bod: number;
  /**
   * 40th percentile of GWP, no burden of doubt
   */
  pct40_gwp_no_bod: number;
  /**
   * 60th percentile of GWP, no burden of doubt
   */
  pct60_gwp_no_bod: number;
  /**
   * 80th percentile of GWP, no burden of doubt
   */
  pct80_gwp_no_bod: number;
  /**
   * Average GWP, no burden of doubt
   */
  average_gwp_no_bod: number;
  /**
   * Standard deviation
   */
  standard_deviation: number;
  /**
   * Number of EPDs participated in statistics
   */
  epds_count: number;
  /**
   * Number of Industry-wide EPDs participated in statistics
   */
  industry_epds_count: number;
  /**
   * Number of Generic Estimates participated in statistics
   */
  generic_estimates_count: number;
  /**
   * Declared unit for the statistics. Statistical values - percentiles, averages etc - are based on this unit of
   * product
   *
   */
  declared_unit: QuantityDto;
};

