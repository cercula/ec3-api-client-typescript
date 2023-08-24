/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Measurement } from './Measurement';

export type ScopeSet = (({
  /**
   * Sum of A1..A3.
   */
  A1A2A3: Measurement;
  /**
   * Raw Material Supply
   */
  A1?: Measurement;
  /**
   * Transport to Manufacturing
   */
  A2?: Measurement;
  /**
   * Manufacturing
   */
  A3?: Measurement;
  /**
   * Transport to Construction
   */
  A4?: Measurement;
  /**
   * Construction
   */
  A5?: Measurement;
} & {
  /**
   * Use or application of the installed product
   */
  B1?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B1_years?: string;
  /**
   * Maintenance
   */
  B2?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B2_years?: string;
  /**
   * Repair
   */
  B3?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B3_years?: string;
  /**
   * Replacement
   */
  B4?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B4_years?: string;
  /**
   * Refurbishment
   */
  B5?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B5_years?: string;
  /**
   * Operational energy use
   */
  B6?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B6_years?: string;
  /**
   * Operational water use
   */
  B7?: Measurement;
  /**
   * Lifespan in years. Valid values should be in range from 0 years (excluding) up to 100.0 years.
   */
  B7_years?: string;
} & {
  /**
   * De-construction, demolition
   */
  C1?: Measurement;
  /**
   * Transport to waste processing
   */
  C2?: Measurement;
  /**
   * Waste processing for reuse, recovery and/or recycling
   */
  C3?: Measurement;
  /**
   * Disposal
   */
  C4?: Measurement;
} & {
  'D'?: Measurement;
}) & {
  C_scenarios?: Array<({
    /**
     * De-construction, demolition
     */
    C1?: Measurement;
    /**
     * Transport to waste processing
     */
    C2?: Measurement;
    /**
     * Waste processing for reuse, recovery and/or recycling
     */
    C3?: Measurement;
    /**
     * Disposal
     */
    C4?: Measurement;
  } & {
    'D'?: Measurement;
  } & {
    /**
     * A brief text description of the scenario.
     */
    name: string;
    /**
     * The weigting of this scenario used in the C1 .. C4 dataset. For example, the overall C1 should be equal to
     * weighted sum of C1 from all the scenarios, weighted by likelihood.
     *
     */
    likelihood?: number;
  })>;
});

