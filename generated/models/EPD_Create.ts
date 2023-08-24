/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EPD_Edit } from './EPD_Edit';

export type EPD_Create = (EPD_Edit & {
  /**
   * The unique ID for this EPD.
   * To ensure global uniqueness, should be registered at open-xpd-uuid.cqd.io/register or a coordinating registry.
   * A user should provide open-xpd-uuid during EPD creation
   * otherwise OpenEPD implementation must take open-xpd-uuid from registry.
   *
   */
  id?: string;
});

