/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Predicate for material filter. In case the `arg` is an array, and the `arg_comment` should be used, they should have
 * same length. The `arg_comment` is a list of strings, each string is a comment for the corresponding element in the
 * `arg` array.
 *
 */
export type MaterialFilterPredicate = {
  field: string;
  op: string;
  arg?: (boolean | number | string);
  arg_comment?: (Array<string> | string);
};

