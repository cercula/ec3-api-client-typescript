/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientError } from './ClientError';

/**
 * The error that occurs when a user submits invalid data:
 * * improperly-formatted JSON: `{test: 'IS NOT A JSON'}`;
 * * parameters with unexpected values: `?numeric_param=NOT_A_NUMBER`;
 * * body properties with unexpected values: `{"numeric_property": "some text"}`.
 */
export type ValidationError = ClientError;

