/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EPD_Base } from './EPD_Base';
import type { Org_Base } from './Org_Base';
import type { PCR_Base } from './PCR_Base';
import type { Plant_Base } from './Plant_Base';
import type { Standard_Base } from './Standard_Base';

export type EPD_List = (EPD_Base & {
  /**
   * JSON object for declaring Org. Sometimes called the "Declaration Holder" or "Declaration Owner".
   */
  manufacturer?: Org_Base;
  /**
   * List of JSON object(s) for one or more plant(s) that make the product.
   */
  plants?: Array<Plant_Base>;
  /**
   * JSON object for program operator Org
   */
  program_operator?: Org_Base;
  /**
   * JSON object for Org that verified EPD
   */
  third_party_verifier?: Org_Base;
  /**
   * JSON object for product category rules.
   * Should point to the most-specific PCR that applies; the PCR entry should point to any parent PCR.
   *
   */
  readonly pcr?: PCR_Base;
  /**
   * Standard(s) to which this declaration is compliant.
   */
  compliance?: Array<Standard_Base>;
});

