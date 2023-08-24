/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from '../models/CategoryDto';
import type { ClientError } from '../models/ClientError';
import type { ConvertMaterialFilterDto } from '../models/ConvertMaterialFilterDto';
import type { EC3Response } from '../models/EC3Response';
import type { EPD_Create } from '../models/EPD_Create';
import type { EPD_Edit } from '../models/EPD_Edit';
import type { EPD_Full } from '../models/EPD_Full';
import type { EPD_List } from '../models/EPD_List';
import type { EPD_Ref } from '../models/EPD_Ref';
import type { MaterialFilterMetaMixin } from '../models/MaterialFilterMetaMixin';
import type { MetaCollectionDto } from '../models/MetaCollectionDto';
import type { PagingMetaMixin } from '../models/PagingMetaMixin';
import type { StatisticsDto } from '../models/StatisticsDto';
import type { WarningMetaMixin } from '../models/WarningMetaMixin';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EpdsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List EPDs
   * List EPDs by pages.
   *
   * @param pageNumber Page number to return. Starts from 1.
   * @param pageSize The number of items per page to return.
   *
   * @param fields Represent a string of comma-separated fields, e.g. `?fields=id,product_name`.
   * The listed fields that do not exist will be ignored.
   * When the `fields` modifier is present, then return "base" set of fields + listed fields.
   * When the `fields` modifier is not present, return the default schema.
   * "Base" set of fields depends on the endpoint `fields` modifier applies to.
   *
   * @returns EPD_List Returns a list of EPDs.
   *
   * The API doesn't return all entities if total count of them is greater than `page_size`.
   * A user should request next portion/page by providing `page_number` parameter in order to get the rest.
   *
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getEpds(
    pageNumber: number = 1,
    pageSize: number = 100,
    fields?: string,
  ): CancelablePromise<Array<EPD_List> | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/epds',
      query: {
        'page_number': pageNumber,
        'page_size': pageSize,
        'fields': fields,
      },
    });
  }

  /**
   * Create EPD
   * Creates an EPD in the system.
   * @param requestBody
   * @returns ClientError An unexpected client error.
   * @returns EPD_Ref Returns a reference object to the created EPD.
   * @throws ApiError
   */
  public postEpds(
    requestBody?: EPD_Create,
  ): CancelablePromise<ClientError | EPD_Ref> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/epds',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

  /**
   * Get EPD information
   * Get details about an EPD by Open xPD UUID.
   * @param openXpdUuid Open xPD UUID
   * @param fields Represent a string of comma-separated fields, e.g. `?fields=id,product_name`.
   * The listed fields that do not exist will be ignored.
   * When the `fields` modifier is present, then return "base" set of fields + listed fields.
   * When the `fields` modifier is not present, return the default schema.
   * "Base" set of fields depends on the endpoint `fields` modifier applies to.
   *
   * @returns EPD_Full Returns an EPD object.
   * @throws ApiError
   */
  public getEpdsId(
    openXpdUuid: string,
    fields?: string,
  ): CancelablePromise<EPD_Full> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/epds/{openXpdUuid}',
      path: {
        'openXpdUuid': openXpdUuid,
      },
      query: {
        'fields': fields,
      },
      errors: {
        404: `An EPD with specified Open xPD UUID was not found`,
      },
    });
  }

  /**
   * Edit EPD
   * Edits a EPD in the system.
   * @param openXpdUuid Open xPD UUID
   * @param requestBody
   * @returns EPD_Ref Returns a reference object to the updated EPD.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public putEpdsId(
    openXpdUuid: string,
    requestBody?: EPD_Edit,
  ): CancelablePromise<EPD_Ref | ClientError> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/epds/{openXpdUuid}',
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

  /**
   * Get categories tree
   * Get a full tree of EC3 categories
   *
   * @returns any Tree of categories in a standard format.
   *
   * @throws ApiError
   */
  public getCategoriesTree(): CancelablePromise<({
    payload?: CategoryDto;
  } & EC3Response)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/categories/tree',
    });
  }

  /**
   * Search EPDs
   * Search for EPDs by parameters. Parameters are given in a form of MaterialFilter, a query language for searching
   * materials/EPDs, running statistics and so on. It can exist in a string form, which is accepted by most of the
   * endpoints.
   *
   * @param omf OpenMaterialFilter is a query language for searching materials/EPDs, running statistics and so on. Please refer to
   * the documentation for more details.
   *
   * @param pageNumber Page number to return. Starts from 1.
   * @param pageSize The number of items per page to return.
   *
   * @returns any List of found EPDs in a standard format
   *
   * @throws ApiError
   */
  public getEpdsSearch(
    omf: string,
    pageNumber: number = 1,
    pageSize: number = 100,
  ): CancelablePromise<({
    payload?: Array<EPD_List>;
    meta?: (MetaCollectionDto & MaterialFilterMetaMixin & WarningMetaMixin & PagingMetaMixin);
  } & EC3Response)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/epds/search',
      query: {
        'page_number': pageNumber,
        'page_size': pageSize,
        'omf': omf,
      },
    });
  }

  /**
   * Get EPD search statistics
   * Get statistics for a given search query. Statistics contains aggregated parameters such as percentiles distributions
   * of GWP and other parameters. Please note - in addition to product EPDs statistics might include industry-wide EPDs
   * and even generic estimates to provide a more complete picture where there is not enough product EPDs.
   *
   * @param omf OpenMaterialFilter is a query language for searching materials/EPDs, running statistics and so on. Please refer to
   * the documentation for more details.
   *
   * @returns any Statistics object for a given query
   *
   * @throws ApiError
   */
  public getEpdsStatistics(
    omf: string,
  ): CancelablePromise<({
    payload?: Array<StatisticsDto>;
    meta?: (MetaCollectionDto & MaterialFilterMetaMixin & WarningMetaMixin);
  } & EC3Response)> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/epds/statistics',
      query: {
        'omf': omf,
      },
    });
  }

  /**
   * Convert MaterialFilter
   * MaterialFilter is a query language for searching materials/EPDs, running statistics and so on. It can exist in a string
   * form, which is accepted by most of the endpoints, or in a JSON form which is usable for programmatic manipulation.
   *
   * Please use the endpoint string form and serialize the object form of MaterialFilter, implementing your own parser can
   * be tedious and error prone.
   *
   * This method works by 'filling in the gaps'. Client sends a ConvertMaterialFilterDto object with, for example, only
   * the string form, and as a result gets the MaterialFilter object and the hash. Or the client calls the method with the
   * object form, and as a result gets the string form, object form back, and the hash.
   *
   * Either string or object representation should be given, but not both (to remove ambiguity).
   *
   * @param requestBody
   * @returns any Filled MaterialFilterDTO in a standard format, error otherwise.
   *
   * @throws ApiError
   */
  public convertMaterialFilter(
    requestBody?: ConvertMaterialFilterDto,
  ): CancelablePromise<({
    payload?: ConvertMaterialFilterDto;
  } & EC3Response)> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v2/material_filter/convert',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
