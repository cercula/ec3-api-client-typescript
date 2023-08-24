/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Org_Ref } from './Org_Ref';
import type { PCR_Full } from './PCR_Full';
import type { PCR_Ref } from './PCR_Ref';

export type PCR_Edit = (PCR_Full & {
  /**
   * Organization issuing this PCR
   */
  issuer: Org_Ref;
  /**
   * The parent PCR, base PCR, or 'Part A' PCR
   */
  parent?: PCR_Ref;
});

