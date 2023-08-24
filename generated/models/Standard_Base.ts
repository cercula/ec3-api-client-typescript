/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Standard_Base = {
  /**
   * Short-form of name of standard. Must be unique within all `Standard.short_name`s in lowecase.
   */
  short_name: string;
  /**
   * Full document name. Must be unique within all `Standard.name`s in lowecase.
   */
  name?: string;
  /**
   * Link to the exact standard (including version) referred to.
   */
  link: string;
  /**
   * Reference to this Standard's JSON object
   */
  readonly ref?: string;
};

