/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Org_Ref } from './Org_Ref';
import type { Plant_Full } from './Plant_Full';

export type Plant_Edit = (Plant_Full & {
  /**
   * Org that owns this plant
   */
  owner: Org_Ref;
});

