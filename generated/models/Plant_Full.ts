/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Plant_List } from './Plant_List';

export type Plant_Full = (Plant_List & {
  /**
   * Email contact
   */
  contact_email?: string;
  /**
   * Dict of URLs relevant to this entry
   */
  attachments?: Record<string, string>;
});

