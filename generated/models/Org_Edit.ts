/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Org_Full } from './Org_Full';
import type { Org_Ref } from './Org_Ref';

export type Org_Edit = (Org_Full & {
  /**
   * Organization that controls this organization.
   * Owner/subsidiary graph must be a tree, i.e. must not contain loops.
   *
   */
  owner?: Org_Ref;
});

