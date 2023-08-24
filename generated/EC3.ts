/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { CategoriesService } from './services/CategoriesService';
import { EpdsService } from './services/EpdsService';
import { OrgsService } from './services/OrgsService';
import { PcrsService } from './services/PcrsService';
import { PlantsService } from './services/PlantsService';
import { StandardsService } from './services/StandardsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class EC3 {

  public readonly categories: CategoriesService;
  public readonly epds: EpdsService;
  public readonly orgs: OrgsService;
  public readonly pcrs: PcrsService;
  public readonly plants: PlantsService;
  public readonly standards: StandardsService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '/api',
      VERSION: config?.VERSION ?? '0.38.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.categories = new CategoriesService(this.request);
    this.epds = new EpdsService(this.request);
    this.orgs = new OrgsService(this.request);
    this.pcrs = new PcrsService(this.request);
    this.plants = new PlantsService(this.request);
    this.standards = new StandardsService(this.request);
  }
}

