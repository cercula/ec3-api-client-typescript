/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Org_Base } from './Org_Base';
import type { Org_List } from './Org_List';

export type Org_Full = (Org_List & {
  /**
   * Dict of URLs relevant to this entry
   */
  attachments?: Record<string, string>;
  /**
   * Organizations controlled by this organization
   */
  readonly subsidiaries?: Array<Org_Base>;
});

