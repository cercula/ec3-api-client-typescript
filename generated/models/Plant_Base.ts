/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Plant_Base = {
  /**
   * Plus code (aka Open [Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)) of plant's location
   * and owner's web domain joined with `.`(dot).
   * Absolute format, not short form. Domain name extension must match `owner.web_domain`.
   *
   */
  id: string;
  readonly pluscode?: string;
  /**
   * Manufacturer's name for plant. Recommended < 40 chars. Unique per manufacturer
   */
  name: string;
  /**
   * Text address, preferably geocoded
   */
  address?: string;
  /**
   * Reference to this Plant's JSON object
   */
  readonly ref?: string;
};

