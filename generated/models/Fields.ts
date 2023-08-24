/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represent a string of comma-separated fields, e.g. `?fields=id,product_name`.
 * The listed fields that do not exist will be ignored.
 * When the `fields` modifier is present, then return "base" set of fields + listed fields.
 * When the `fields` modifier is not present, return the default schema.
 * "Base" set of fields depends on the endpoint `fields` modifier applies to.
 *
 */
export type Fields = string;
