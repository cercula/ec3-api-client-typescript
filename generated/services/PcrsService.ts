/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientError } from '../models/ClientError';
import type { Org_Ref } from '../models/Org_Ref';
import type { PCR_Edit } from '../models/PCR_Edit';
import type { PCR_Full } from '../models/PCR_Full';
import type { PCR_List } from '../models/PCR_List';
import type { PCR_Ref } from '../models/PCR_Ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PcrsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List PCRs
   * List PCRs by pages.
   *
   * @param pageNumber Page number to return. Starts from 1.
   * @param pageSize The number of items per page to return.
   *
   * @returns PCR_List Returns a list of PCRs.
   *
   * The API doesn't return all entities if total count of them is greater than `page_size`.
   * A user should request next portion/page by providing `page_number` parameter in order to get the rest.
   *
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getPcrs(
    pageNumber: number = 1,
    pageSize: number = 100,
  ): CancelablePromise<Array<PCR_List> | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pcrs',
      query: {
        'page_number': pageNumber,
        'page_size': pageSize,
      },
    });
  }

  /**
   * Create PCR
   * Creates a PCR in the system.
   * @param requestBody
   * @returns ClientError An unexpected client error.
   * @returns PCR_Ref Returns a reference object to the created PCR.
   * @throws ApiError
   */
  public postPcrs(
    requestBody?: ((PCR_Full & {
      /**
       * Organization issuing this PCR
       */
      issuer: Org_Ref;
      /**
       * The parent PCR, base PCR, or 'Part A' PCR
       */
      parent?: PCR_Ref;
    }) & {
      /**
       * The unique ID for this PCR.
       * To ensure global uniqueness, should be registered at open-xpd-uuid.cqd.io/register or a coordinating registry.
       * A user should provide open-xpd-uuid during PCR creation
       * otherwise OpenEPD implementation must take open-xpd-uuid from registry.
       *
       */
      id?: string;
    }),
  ): CancelablePromise<ClientError | PCR_Ref> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/pcrs',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

  /**
   * Get PCR
   * Get details about a PCR.
   * @param openXpdUuid An open-xpd-uuid of PCR
   * @returns PCR_Full Returns a PCR object.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getPcrsId(
    openXpdUuid: string,
  ): CancelablePromise<PCR_Full | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/pcrs/{openXpdUuid}',
      path: {
        'openXpdUuid': openXpdUuid,
      },
      errors: {
        404: `A PCR with the specified \`id\` wasn't found in the system`,
      },
    });
  }

  /**
   * Edit PCR
   * Edits a PCR in the system.
   * @param openXpdUuid An open-xpd-uuid of PCR
   * @param requestBody
   * @returns PCR_Ref Returns a reference object to the updated PCR.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public putPcrsId(
    openXpdUuid: string,
    requestBody?: PCR_Edit,
  ): CancelablePromise<PCR_Ref | ClientError> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/pcrs/{openXpdUuid}',
      path: {
        'openXpdUuid': openXpdUuid,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

}
