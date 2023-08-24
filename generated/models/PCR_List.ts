/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Org_Base } from './Org_Base';
import type { PCR_Base } from './PCR_Base';

export type PCR_List = (PCR_Base & {
  /**
   * Organization issuing this PCR
   */
  issuer: Org_Base;
  /**
   * The parent PCR, base PCR, or 'Part A' PCR
   */
  parent?: PCR_Base;
});

