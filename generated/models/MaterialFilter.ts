/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaterialFilterPredicate } from './MaterialFilterPredicate';
import type { PragmaDto } from './PragmaDto';

export type MaterialFilter = {
  pragma: Array<PragmaDto>;
  category: string;
  category_comment?: string;
  filter?: Array<MaterialFilterPredicate>;
};

