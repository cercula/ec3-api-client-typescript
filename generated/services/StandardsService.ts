/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientError } from '../models/ClientError';
import type { Standard_Edit } from '../models/Standard_Edit';
import type { Standard_Full } from '../models/Standard_Full';
import type { Standard_Ref } from '../models/Standard_Ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StandardsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List standards
   * List standards by pages.
   *
   * @param pageNumber Page number to return. Starts from 1.
   * @param pageSize The number of items per page to return.
   *
   * @returns Standard_Full Returns a list of Standards.
   *
   * The API doesn't return all entities if total count of them is greater than `page_size`.
   * A user should request next portion/page by providing `page_number` parameter in order to get the rest.
   *
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getStandards(
    pageNumber: number = 1,
    pageSize: number = 100,
  ): CancelablePromise<Array<Standard_Full> | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/standards',
      query: {
        'page_number': pageNumber,
        'page_size': pageSize,
      },
    });
  }

  /**
   * Create standard
   * Creates a standard in the system.
   * @param requestBody
   * @returns ClientError An unexpected client error.
   * @returns Standard_Ref Returns a reference object to the created Standard.
   * @throws ApiError
   */
  public postStandards(
    requestBody?: Standard_Edit,
  ): CancelablePromise<ClientError | Standard_Ref> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/standards',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

  /**
   * Get standard
   * Get details about a Standard.
   * @param shortName An short name of Standard
   * @returns Standard_Full Returns a Standard object.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getStandardsId(
    shortName: string,
  ): CancelablePromise<Standard_Full | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/standards/{shortName}',
      path: {
        'shortName': shortName,
      },
      errors: {
        404: `A Standard with the specified \`shortName\` wasn't found in the system`,
      },
    });
  }

  /**
   * Edit standard
   * Edits a standard in the system.
   * @param shortName An short name of Standard
   * @param requestBody
   * @returns Standard_Ref Returns a reference object to the updated Standard.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public putStandardsId(
    shortName: string,
    requestBody?: Standard_Edit,
  ): CancelablePromise<Standard_Ref | ClientError> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/standards/{shortName}',
      path: {
        'shortName': shortName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

}
