/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EPD_List } from './EPD_List';
import type { ScopeSet } from './ScopeSet';

export type EPD_Full = (EPD_List & {
  /**
   * List of URLs relevant to this document
   */
  attachments?: Record<string, string>;
  /**
   * List of JSON objects pointing to product components. Each one should be an EPD or digitized LCI process
   *
   */
  includes?: Array<{
    /**
     * Number of declared units of this consumed. Negative values indicate an outflow.
     */
    qty: number;
    /**
     * Link to this object's OpenEPD declaration. An OpenIndustryEPD or OpenLCI link is also acceptable.
     */
    link: string;
  }>;
  /**
   * Impact set per LCIA method. At least one method is required.
   */
  impacts?: {
    /**
     * Tool for Reduction and Assessment of Chemicals and Other Environmental Impacts, Version 2.1, 2012.
     */
    'TRACI 2.1'?: Record<string, ScopeSet>;
    /**
     * Tool for Reduction and Assessment of Chemicals and Other Environmental Impacts, Version 2.0, 2011
     */
    'TRACI 2.0'?: Record<string, ScopeSet>;
    /**
     * Tool for Reduction and Assessment of Chemicals and Other Environmental Impacts, 2003
     */
    'TRACI 1.0'?: Record<string, ScopeSet>;
    /**
     * GWP factors consistent with the International Panel on Climate Change Assessment Report 5, Chapter 8
     */
    'IPCC AR5'?: Record<string, ScopeSet>;
    /**
     * EF 3.0, 2019, required by EN 15804+A2.  This is the default for European PCRs.
     */
    'EF 3.0'?: Record<string, ScopeSet>;
    /**
     * CML-IA Baseline 4.7 or 4.8 (2016)
     */
    'CML 2016'?: Record<string, ScopeSet>;
    /**
     * CML-IA Baseline 4.1 (2012) or 4.2 (2013).  Required by EN15804+A1 and PEP3.0
     */
    'CML 2012'?: Record<string, ScopeSet>;
    /**
     * CML-IA Baseline 3.0, 2007
     */
    'CML 2007'?: Record<string, ScopeSet>;
    /**
     * CML-IA Baseline 2.0, 2001
     */
    'CML 2001'?: Record<string, ScopeSet>;
    /**
     * CML-IA Baseline 1.0, 1992
     */
    'CML 1992'?: Record<string, ScopeSet>;
    /**
     * ReCiPe 1.1 (2016) Midpoint, with 2017 corrections
     */
    'ReCiPe 2016'?: Record<string, ScopeSet>;
    /**
     * ReCiPe 2008 Midpoint
     */
    'ReCiPe 2008'?: Record<string, ScopeSet>;
    /**
     * Environmental Footprint 2.0, 2018
     */
    'EF 2.0, 2018'?: Record<string, ScopeSet>;
    /**
     * EN 15978:2011, FR EN15978, or BS EN15978.
     * Sustainability of construction works - Assessment of environmental performance of buildings - Calculation method
     *
     */
    'EN 15978:2011'?: Record<string, ScopeSet>;
    /**
     * UNEP/SETAC scientific consensus model for characterizing human toxicological
     * and ecotoxicological impacts of chemical emissions in life cycle assessment.
     *
     */
    'USEtox 2.12'?: Record<string, ScopeSet>;
    /**
     * Impact set, using life cycle impact analysis factors that are not known.
     * Permissible only for digitized legacy (paper or PDF) EPDs.
     *
     */
    'Unknown LCIA'?: Record<string, ScopeSet>;
  };
  resource_uses?: Record<string, any>;
  output_flows?: Record<string, any>;
});

