/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category_Base } from '../models/Category_Base';
import type { ClientError } from '../models/ClientError';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CategoriesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * EC3 Category information
   * Retrives EC3 Category Tree.
   * @returns Category_Base EC3 Category tree.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getCategories(): CancelablePromise<Category_Base | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/categories',
    });
  }

}
