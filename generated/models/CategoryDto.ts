/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuantityDto } from './QuantityDto';

/**
 * DTO for Category model, recursive
 */
export type CategoryDto = {
  /**
   * Category short ID (readable unique string)
   */
  id: string;
  /**
   * Category display name (user-friendly)
   */
  name: string;
  /**
   * Category short user-friendly name
   */
  short_name: string;
  openepd_hierarchical_name?: string;
  /**
   * Default category code in Masterformat
   */
  masterformat?: string;
  /**
   * Category verbose description
   */
  description?: string;
  /**
   * Declared unit of category, for example 1 kg
   */
  declared_unit?: QuantityDto;
  /**
   * List of subcategories. This makes categories tree-like structure
   */
  subcategories: Array<CategoryDto>;
};

