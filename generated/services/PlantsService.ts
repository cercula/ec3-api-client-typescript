/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientError } from '../models/ClientError';
import type { Plant_Edit } from '../models/Plant_Edit';
import type { Plant_Full } from '../models/Plant_Full';
import type { Plant_List } from '../models/Plant_List';
import type { Plant_Ref } from '../models/Plant_Ref';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PlantsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List plants
   * List plants by pages.
   *
   * @param pageNumber Page number to return. Starts from 1.
   * @param pageSize The number of items per page to return.
   *
   * @param owner Web domain of the owning organisation
   *
   * @returns Plant_List Returns a list of Plants.
   *
   * The API doesn't return all entities if total count of them is greater than `page_size`.
   * A user should request next portion/page by providing `page_number` parameter in order to get the rest.
   *
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getPlants(
    pageNumber: number = 1,
    pageSize: number = 100,
    owner?: string,
  ): CancelablePromise<Array<Plant_List> | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/plants',
      query: {
        'page_number': pageNumber,
        'page_size': pageSize,
        'owner': owner,
      },
    });
  }

  /**
   * Create Plant
   * Creates a plant in the system.
   * @param requestBody
   * @returns ClientError An unexpected client error.
   * @returns Plant_Ref Returns a reference object to the created Plant.
   * @throws ApiError
   */
  public postPlants(
    requestBody?: Plant_Edit,
  ): CancelablePromise<ClientError | Plant_Ref> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/plants',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

  /**
   * Get plant
   * Get details about a Plant.
   * @param id Plus code (aka Open [Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)) of plant's location
   * and owner's web domain joined with `.`(dot).
   * Absolute format, not short form. Domain name extension must match `owner.web_domain`.
   *
   * @returns Plant_Full Returns a Plant object.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public getPlantsId(
    id: string,
  ): CancelablePromise<Plant_Full | ClientError> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/plants/{id}',
      path: {
        'id': id,
      },
      errors: {
        404: `A Plant with the specified \`id\` wasn't found in the system`,
      },
    });
  }

  /**
   * Edit plant
   * Edits a plant in the system.
   * @param id Plus code (aka Open [Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)) of plant's location
   * and owner's web domain joined with `.`(dot).
   * Absolute format, not short form. Domain name extension must match `owner.web_domain`.
   *
   * @param requestBody
   * @returns Plant_Ref Returns a reference object to the updated Plant.
   * @returns ClientError An unexpected client error.
   * @throws ApiError
   */
  public putPlantsId(
    id: string,
    requestBody?: Plant_Edit,
  ): CancelablePromise<Plant_Ref | ClientError> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/plants/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
      },
    });
  }

}
