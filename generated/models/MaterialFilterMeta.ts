/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaterialFilterDefinition } from './MaterialFilterDefinition';

/**
 * MaterialFilter related meta
 */
export type MaterialFilterMeta = {
  /**
   * list of fields excluded by server process for any reason
   */
  excluded_fields?: Array<string>;
  /**
   * Effective OpenMaterialFilter as applied to search, after transformations if any
   */
  effective_omf: MaterialFilterDefinition;
};

