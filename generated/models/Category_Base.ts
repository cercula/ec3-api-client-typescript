/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Category_Base = {
  name?: string;
  display_name?: string;
  description?: string;
  declared_unit?: string;
  /**
   * A category has "BETA" status. Only beta users can see it.
   */
  beta_only?: boolean;
  /**
   * A category has "Draft" status. Only curators and people with direct permissions can see it.
   */
  draft?: boolean;
  /**
   * Category as defined in EC3
   *
   */
  openepd_name?: string;
  /**
   * Number and title according to CSI Masterformat
   *
   */
  masterformat?: string;
  /**
   * The United Nations Standard Products and Services Code ([UNSPSC](https://www.unspsc.org/))
   * is a taxonomy of products and services for use in eCommerce.
   * It is a four-level hierarchy coded as an eight-digit number, with an optional fifth level adding two more digits.
   *
   */
  unspsc?: string;
  subcategories?: Array<Category_Base>;
};

