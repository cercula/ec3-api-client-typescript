/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EPD_Base } from './EPD_Base';
import type { Org_Ref } from './Org_Ref';
import type { PCR_Ref } from './PCR_Ref';
import type { Plant_Ref } from './Plant_Ref';
import type { ScopeSet } from './ScopeSet';
import type { Standard_Ref } from './Standard_Ref';

export type EPD_Edit = (EPD_Base & {
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
} & {
  /**
   * Data structure(s) describing performance specs of product. Unique for each material type.
   *
   */
  specs?: {
    concrete?: {
      /**
       * Compressive Strength at 28 days
       */
      strength_28d: string;
      /**
       * Minimum test slump
       */
      slump?: string;
      /**
       * One additional strength, which can be early (e.g. 3d) or late (e.g. 96d)
       */
      strength_other?: string;
      /**
       * Days for the strength field above. Required IF `strength_other` is provided.
       */
      strength_other_d?: EPD_Edit.strength_other_d;
      /**
       * Ratio of water to cement
       */
      w_c_ratio?: number;
      /**
       * List of ACI318-19 exposure classes this product meets
       */
      aci_exposure_classes?: Array<'aci.F0' | 'aci.F1' | 'aci.F2' | 'aci.F3' | 'aci.S0' | 'aci.S1' | 'aci.S2' | 'aci.S3' | 'aci.C0' | 'aci.C1' | 'aci.C2' | 'aci.W0' | 'aci.W1' | 'aci.W2'>;
      /**
       * List of CSA A23.1 exposure classes this product meets
       */
      csa_exposure_classes?: Array<'csa.C-XL' | 'csa.C-1' | 'csa.C-2' | 'csa.C-3' | 'csa.C-4' | 'csa.F-1' | 'csa.F-2' | 'csa.N' | 'csa.A-1' | 'csa.A-2' | 'csa.A-3' | 'csa.A-4' | 'csa.S-1' | 'csa.S-2' | 'csa.S-3'>;
      /**
       * List of EN206 exposure classes this product meets
       */
      en_exposure_classes?: Array<'en206.X0' | 'en206.XC1' | 'en206.XC2' | 'en206.XC3' | 'en206.XC4' | 'en206.XS1' | 'en206.XS2' | 'en206.XS3' | 'en206.XD1' | 'en206.XD2' | 'en206.XD3' | 'en206.XF1' | 'en206.XF2' | 'en206.XF3' | 'en206.XF4' | 'en206.XA1' | 'en206.XA2' | 'en206.XA3'>;
      /**
       * List of true/false properties
       */
      application?: {
        /**
         * Foundation. Typically used in direct contact with soil,
         * e.g. footings, piles, mass concrete, mat foundations, and similar applications.
         *
         */
        fnd?: boolean;
        /**
         * Slab on Grade. Typically used in continuously supported horizontal applications
         * e.g. slab on grade, topping slabs, sidewalks, and roadways.
         *
         */
        sog?: boolean;
        /**
         * Elevated Horizontal. Typically used in elevated horizontal applications, either
         * on metal deck or where soffit formwork must be removed,
         * e.g. post-tension plates, rebar plates, beams and slabs, waffle slabs.
         *
         */
        hrz?: boolean;
        /**
         * Vertical. Typically used in columns, walls, sloped surfaces
         * where formwork is required on multiple faces.
         *
         */
        vrt?: boolean;
        /**
         * Shotcrete. Pneumatically applied, without formwork on all sides.
         *
         */
        sht?: boolean;
        /**
         * Flowable Fill (CDF). Typically used to fill voids, backfill retaining walls,
         * as a sub-base, and similar applications.
         * Also called Controlled Density Fill (CDF) or Controlled Low Strength Materials (CLSM).
         *
         */
        cdf?: boolean;
      };
      /**
       * List of true/false properties
       */
      options?: {
        /**
         * Lightweight. True if < 120lb/ft3 or 1900 kg/m3
         */
        lightweight?: boolean;
        /**
         * Self Compacting
         */
        scc?: boolean;
        /**
         * Finishable
         */
        finishable?: boolean;
        /**
         * Air Entrainment
         */
        air?: boolean;
        /**
         * CO2 Curing. Uses intentionally entrained CO2.
         */
        co2?: boolean;
        /**
         * White Cement. Contains White Ordinary Portland Cement (WOPC), typically used for decorative purposes
         * as opposed to the more common gray cement.
         *
         */
        white?: boolean;
        /**
         * PLC (C595). Contains Portland-Limestone Cement, including Type IL or GUL Cement
         */
        plc?: boolean;
        /**
         * Fiber reinforced
         */
        fiber_reinforced?: boolean;
      };
      /**
       * List of cementitious materials, and proportion by mass
       */
      cementitious?: {
        /**
         * Ordinary Gray Portland Cement
         */
        opc?: number;
        /**
         * White Portland Cement
         */
        wht?: number;
        /**
         * Ground Granulated Blast Furnace Slag
         */
        ggbs?: number;
        /**
         * Fly Ash, including types F, CL, and CH
         */
        flyAsh?: number;
        /**
         * Silica Fume
         */
        siFume?: number;
        /**
         * Ground Glass, 45um or smaller
         */
        gg45?: number;
        /**
         * Natural pozzolan
         */
        natPoz?: number;
        /**
         * Metakaolin
         */
        mk?: number;
        /**
         * Limestone
         */
        CaCO3?: number;
        /**
         * Other SCMs
         */
        other?: number;
      };
    };
    steel?: ({
      /**
       * Product's form factor
       */
      form_factor?: EPD_Edit.form_factor;
      /**
       * Basic chemical composition. Generally the ASTM or EN grade is a subcategory of one of these.
       */
      steel_composition?: EPD_Edit.steel_composition;
      /**
       * Minimum Yield Strength
       */
      Fy?: string;
      /**
       * List of true/false properties
       */
      options?: {
        /**
         * Galvanized
         */
        galvanized?: boolean;
        /**
         * Epoxy Coated
         */
        epoxy?: boolean;
        /**
         * Cold Finished
         */
        cold_finished?: boolean;
        /**
         * Fabricated
         */
        steel_fabricated?: boolean;
      };
      /**
       * List of true/false properties for steelmaking route
       */
      making_route?: {
        /**
         * Basic Oxygen Furnace
         */
        bof?: boolean;
        /**
         * Electric Arc Furnace
         */
        eaf?: boolean;
        /**
         * Open Hearth Furnace
         */
        ohf?: boolean;
      };
    } & {
      /**
       * ASTM standard(s) to which this product complies.
       */
      ASTM?: Array<Standard_Ref>;
      /**
       * AISA/SAE standard(s) to which this product complies.
       */
      SAE?: Array<Standard_Ref>;
      /**
       * EN 10027 number(s).
       */
      EN?: Array<Standard_Ref>;
    });
  };
  /**
   * Reference to declaring Org. **Required if `private` == false**.
   *
   */
  manufacturer?: Org_Ref;
  /**
   * List of reference(s) for one or more plant(s) that make the product.
   */
  plants?: Array<Plant_Ref>;
  /**
   * Reference to program operator Org. **Required if `private` == false**.
   */
  program_operator?: Org_Ref;
  /**
   * Reference to Org that verified EPD. **Required if `private` == false**.
   */
  readonly third_party_verifier?: Org_Ref;
  /**
   * JSON object for product category rules.
   * Should point to the most-specific PCR that applies; the PCR entry should point to any parent PCR.
   * **Required if `private` == false**.
   *
   */
  pcr?: PCR_Ref;
  /**
   * Standard(s) to which this declaration is compliant.
   */
  compliance?: Array<Standard_Ref>;
});

export namespace EPD_Edit {

  /**
   * Days for the strength field above. Required IF `strength_other` is provided.
   */
  export enum strength_other_d {
    '_3' = 3,
    '_7' = 7,
    '_14' = 14,
    '_28' = 28,
    '_42' = 42,
    '_56' = 56,
    '_72' = 72,
    '_96' = 96,
    '_120' = 120,
  }

  /**
   * Product's form factor
   */
  export enum form_factor {
    STEEL_COIL = 'Steel >> Coil',
    STEEL_COLD_FORMED = 'Steel >> Cold Formed',
    STEEL_DECKING = 'Steel >> Decking',
    STEEL_MERCHANT_BAR = 'Steel >> Merchant Bar',
    STEEL_POST_TENSIONING = 'Steel >> Post-Tensioning',
    STEEL_PREFAB_ASSEMB_ = 'Steel >> Prefab Assemb.',
    STEEL_PREFAB_ASSEMB_MISC_ = 'Steel >> Prefab Assemb. >> Misc.',
    STEEL_PREFAB_ASSEMB_OPEN_WEB = 'Steel >> Prefab Assemb. >> Open Web',
    STEEL_PREFAB_ASSEMB_RAILINGS = 'Steel >> Prefab Assemb. >> Railings',
    STEEL_PREFAB_ASSEMB_STAIRS = 'Steel >> Prefab Assemb. >> Stairs',
    STEEL_REBAR = 'Steel >> Rebar',
    STEEL_STRUCTURAL_STEEL = 'Steel >> Structural Steel',
    STEEL_STRUCTURAL_STEEL_HOLLOW_SECTIONS = 'Steel >> Structural Steel >> Hollow Sections',
    STEEL_STRUCTURAL_STEEL_HOT_ROLLED_SECTIONS = 'Steel >> Structural Steel >> Hot-Rolled Sections',
    STEEL_STRUCTURAL_STEEL_PLATE = 'Steel >> Structural Steel >> Plate',
    STEEL_WIRE_MESH = 'Steel >> Wire & Mesh',
  }

  /**
   * Basic chemical composition. Generally the ASTM or EN grade is a subcategory of one of these.
   */
  export enum steel_composition {
    CARBON = 'Carbon',
    ALLOY = 'Alloy',
    STAINLESS = 'Stainless',
    TOOL = 'Tool',
    OTHER = 'Other',
  }


}

