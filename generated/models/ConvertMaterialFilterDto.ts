/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaterialFilter } from './MaterialFilter';
import type { SerializationStyle } from './SerializationStyle';

/**
 * DTO for converting a material filter to a string; used both in request and response.
 */
export type ConvertMaterialFilterDto = {
  material_filter?: MaterialFilter;
  material_filter_hash?: string;
  material_filter_str?: string;
  material_filter_str_format_style?: SerializationStyle;
};

