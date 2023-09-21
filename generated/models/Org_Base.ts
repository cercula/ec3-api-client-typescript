/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Org_Base = {
  /**
   * A web [domain name](https://en.wikipedia.org/wiki/Domain_name) owned by organization.
   * Typically is the org's home website address without `www` and `http`. Domains are case-insensitive.
   *
   */
  web_domain: string;
  /**
   * Common name for organization
   */
  name: string;
  /**
   * List of other names for organization
   */
  alt_names?: Array<string>;
  /**
   * Reference to this Org's JSON object
   */
  readonly ref?: string;
};

