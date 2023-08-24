/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientError } from '../models/ClientError';
import type { Org_Edit } from '../models/Org_Edit';
import type { Org_Full } from '../models/Org_Full';
import type { Org_List } from '../models/Org_List';
import type { Org_Ref } from '../models/Org_Ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrgsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List orgs
   * List orgs by pages.
   *
   * @param pageNumber Page number to return. Starts from 1.
   * @param pageSize The number of items per page to return.
   *
   * @returns Org_List Returns a list of Orgs.
   *
   * The API doesn't return all entities if total count of them is greater than `page_size`.
   * A user should request next portion/page by providing `page_number` parameter in order to get the rest.
   *
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getOrgs(
    pageNumber: number = 1,
    pageSize: number = 100,
  ): CancelablePromise<Array<Org_List> | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/orgs',
      query: {
        'page_number': pageNumber,
        'page_size': pageSize,
      },
    });
  }

  /**
   * Create org
   * Creates an org in the system.
   * @param requestBody
   * @returns ClientError An unexpected client error.
   * @returns Org_Ref Returns a reference object to the created Org.
   * @throws ApiError
   */
  public postOrgs(
    requestBody?: Org_Edit,
  ): CancelablePromise<ClientError | Org_Ref> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/orgs',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

  /**
   * Get org
   * Get details about an Org.
   * @param webDomain A web [domain name](https://en.wikipedia.org/wiki/Domain_name) owned by organization.
   *
   * @returns Org_Full Returns an Org object.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getOrgsId(
    webDomain: string,
  ): CancelablePromise<Org_Full | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/orgs/{webDomain}',
      path: {
        'webDomain': webDomain,
      },
      errors: {
        404: `An Org with the specified \`web_domain\` wasn't found in the system`,
      },
    });
  }

  /**
   * Edit org
   * Edits an org in the system.
   * @param webDomain A web [domain name](https://en.wikipedia.org/wiki/Domain_name) owned by organization.
   *
   * @param requestBody
   * @returns Org_Ref Returns a reference object to the updated Org.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public putOrgsId(
    webDomain: string,
    requestBody?: Org_Edit,
  ): CancelablePromise<Org_Ref | ClientError> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/orgs/{webDomain}',
      path: {
        'webDomain': webDomain,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

}
