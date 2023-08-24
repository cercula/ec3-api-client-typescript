/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Org_Ref } from './Org_Ref';
import type { Standard_Base } from './Standard_Base';

export type EPD_Base = {
  /**
   * The unique ID for this EPD.
   * To ensure global uniqueness, should be registered at open-xpd-uuid.cqd.io/register or a coordinating registry.
   *
   */
  readonly id?: string;
  /**
   * What kind of doc this is
   */
  doctype: EPD_Base.doctype;
  /**
   * Version of this document.
   * The document's issuer should increment it anytime even a single character changes,
   * as this value is used to determine the most recent version.
   * Always greater than previous value.
   *
   */
  version?: number;
  /**
   * Language this EPD is captured in, as an [ISO639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code
   *
   */
  language?: string;
  /**
   * Controls publishing and draft status of an EPD
   * When a newly created EPD has `private` field set to `True` then it is created in Draft state. While in Draft state Only owner and specified third parties have access to it. After submitting update with this field set to `False` EPD becomes published and general public receives access to it. The account that published the EPD becomes the new owner, in order to prevent unauthorized changes.
   *
   */
  private?: boolean;
  /**
   * Link to data object on original registrar's site. **Required if `private` == false**.
   */
  declaration_url?: string;
  /**
   * A rich text description containing information for experts reviewing the EPD contents. Text descriptions required
   * by ISO 14025, ISO 21930, EN 15804, relevant PCRs, or program instructions and which do not have specific openEPD
   * fields should be entered here. This field may be large, and may contain multiple sections separated by github
   * flavored markdown formatting.
   *
   */
  lca_discussion?: string;
  /**
   * Document identifier from Program Operator.
   */
  program_operator_doc_id?: string;
  /**
   * Document version number from Program Operator.
   */
  program_operator_version?: string;
  /**
   * Optional link to verification statement.
   */
  third_party_verification_url?: string;
  third_party_verifier_email?: string;
  /**
   * Date the EPD was issued. ISO datetime. **Required if `private` == false**.
   */
  date_of_issue?: string;
  /**
   * Last date the EPD is valid on, including any extensions. ISO datetime. **Required if `private` == false**.
   *
   */
  valid_until?: string;
  /**
   * Declared unit
   */
  declared_unit: {
    /**
     * How much of this in the amount
     */
    qty: number;
    /**
     * Which unit. SI units are preferred.
     */
    unit: string;
  } | null;
  /**
   * mass, in kilograms, per declared unit
   */
  kg_per_declared_unit?: ({
    /**
     * How much of this in the amount
     */
    qty: number;
    /**
     * Which unit. SI units are preferred.
     */
    unit: string;
  } & {
    /**
     * Always kilograms
     */
    unit: EPD_Base.unit;
  });
  /**
   * mass of elemental carbon, per declared unit, contained in the product itself.
   * Used (among other things) to check a carbon balance.
   *
   */
  kg_C_per_declared_unit?: ({
    /**
     * How much of this in the amount
     */
    qty: number;
    /**
     * Which unit. SI units are preferred.
     */
    unit: string;
  } & {
    /**
     * Always kilograms
     */
    unit: EPD_Base.unit;
  });
  /**
   * Name.  Recommended < 40 chars.
   */
  product_name: string;
  /**
   * Unique stock keeping identifier assigned by manufacturer.
   */
  product_sku?: string;
  /**
   * 1-paragraph description of product.
   * Supports plain text or [github flavored markdown](https://github.github.com/gfm/).
   *
   */
  product_description?: string;
  /**
   * pointer to image illustrating the product, which is no more than 200x200 pixels
   */
  product_image_small?: string;
  /**
   * pointer to image illustrating the product no more than 10MB
   */
  product_image?: string;
  /**
   * Reference service life of the product, in years.
   */
  product_service_life_years?: number;
  /**
   * List of classifications, including Masterformat and UNSPSC
   */
  product_classes?: Record<string, (string | Array<string>)>;
  /**
   * Jurisdiction(s) in which EPD is applicable. An empty array, or absent properties, implies global applicability.
   * Accepts
   * [2-letter country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2),
   * [M49 region codes](https://unstats.un.org/unsd/methodology/m49/),
   * or the alias "EU27" for the 27 members of the Euro bloc,
   * or the alias "NAFTA" for the members of North American Free Trade Agreement
   *
   */
  applicable_in?: Array<string>;
  /**
   * Text description of how product is typically used.
   * Can be used to show accessories like fasteners, adhesives, etc.
   * Supports plain text or [github flavored markdown](https://github.github.com/gfm/).
   *
   */
  product_usage_description?: string;
  /**
   * URL to image illustrating how the product is used.
   */
  product_usage_image?: string;
  /**
   * Text description of manufacturing process.
   * Supports plain text or [github flavored markdown](https://github.github.com/gfm/).
   *
   */
  manufacturing_description?: string;
  /**
   * URL to an image illustrating the manufacturing process.
   */
  manufacturing_image?: string;
  readonly ec3?: {
    /**
     * The A1A2A3 uncertainty-adjusted GWP, in kgCO2e per declared unit, calculated for the TRACI 2.1 LCIA method.
     * This is the value that should be used to compare EPDs against each other, or against an uncertainty-adjusted
     * limit/benchmark, once both have been converted to the same declared unit. This is a materialized value provided
     * for the convenience of integrators, and can be regenerated at any time from the specificity and EC3 category.
     * The value is provided per comparison_unit.
     *
     */
    gwp_uncertainty_adjusted_a1a2a3_traci21?: number;
    /**
     * The A1A2A3 uncertainty-adjusted GWP, calculated for the IPCC AR5 LCIA method. This is the value that should be
     * used to compare EPDs against each other, or against an uncertainty-adjusted limit/benchmark, once both have been
     * converted to the same declared unit. This is a materialized value, and can be regenerated at any time from the
     * specificity and EC3 category.
     *
     */
    gwp_uncertainty_adjusted_a1a2a3_ar5?: number;
    /**
     * The category of the EPD in EC3 notation. Same as EC3 category from root EPD's product_classes for EC3.
     *
     */
    category?: string;
    /**
     * An EPD is Manufacturer Specific if it is based on data from a single manufacturer, as opposed to an industry
     * group, sector, or generic process.  This field should always be true for openEPD documents (as opposed to
     * openIndustryEPDs).
     *
     */
    manufacturer_specific?: boolean;
    /**
     * Whether this EPD is plant-specific. An EPD is Plant Specific, if it is based on process, efficiency, and energy
     * source data from a specific, identified facility.  Plant Specific means the same thing as Facility Specific.
     * Plant specific EPDs should have exactly one entry in /plants.
     *
     */
    plant_specific?: boolean;
    /**
     * An EPD is Product Specific if it is based on data regarding the specific product being delivered, as opposed to
     * a range of products whose GWP per unit may vary by more than 10%.
     *
     */
    product_specific?: boolean;
    /**
     * An EPD is Product Specific if it is created with production data for a single production run of no more than 90
     * days.  Typically these must be generated on a just-in-time or on-demand basis.
     *
     */
    batch_specific?: boolean;
    /**
     * An EPD is Supply Chain Specific to the extent that impacts of process inputs are based on product-specific,
     * facility-specific EPDs or third-party verified LCA for those inputs.  For example, a concrete where the cement
     * impacts are based on a plant-specific, product-specific EPD for the actual cement used would have around 85%
     * supply chain specificity.
     *
     */
    supply_chain_specificity?: number;
  };
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
      strength_other_d?: EPD_Base.strength_other_d;
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
    cmu?: {
      /**
       * Compressive strength
       */
      strength?: string;
      /**
       * * `Normal` - Normal weight CMU has a density of 125 lbs/cu. ft.
       * * `Medium` - Medium weight CMU has a density of 105-125 lbs/cu. ft.
       * * `Light` - Normal weight CMU has a density less than 105 lbs/cu. ft.
       *
       */
      weight_classification?: EPD_Base.weight_classification;
      /**
       * List of true/false properties
       */
      options?: {
        /**
         * CMUs intended to be load-bearing, rather than simply cosmetic.
         */
        load_bearing?: boolean;
        /**
         * CMUs with integral insulation.
         */
        insulated?: boolean;
        /**
         * CMUs structured for sound absorbtion.
         */
        sound_absorbing?: boolean;
        /**
         * CMU using white cement and light-colored aggregate.
         */
        white?: boolean;
        /**
         * CMU using primarily reycled aggregates.
         */
        recycled_aggregate?: boolean;
        /**
         * Ground or Honed facing, typically for improved appearance.
         */
        groundface?: boolean;
        /**
         * Rough surface texture via splitting; aggregate can be seen.
         */
        splitface?: boolean;
        /**
         * Standard smooth-faced blocks.
         */
        smoothface?: boolean;
        /**
         * A slightly rounded, random distortion with the look of rustic adobe.
         */
        slumpstone?: boolean;
      };
      /**
       * Concrete reabsorbs CO2 early in the use phase;
       * this effect is proportional to the surface area and is composition-dependent.
       *
       */
      b1_recarbonation?: {
        /**
         * Mean (average) value of the measurement
         */
        mean: number;
        /**
         * Measurement unit
         */
        unit: EPD_Base.unit;
        /**
         * relative standard deviation, i.e. standard_deviation/mean
         */
        rsd?: number;
        dist?: 'log-normal' | 'normal' | 'uniform' | 'triangular' | 'max';
      };
    };
    steel?: ({
      /**
       * Product's form factor
       */
      form_factor?: EPD_Base.form_factor;
      /**
       * Basic chemical composition. Generally the ASTM or EN grade is a subcategory of one of these.
       */
      steel_composition?: EPD_Base.steel_composition;
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
      ASTM?: Array<Standard_Base>;
      /**
       * AISA/SAE standard(s) to which this product complies.
       */
      SAE?: Array<Standard_Base>;
      /**
       * EN 10027 number(s).
       */
      EN?: Array<Standard_Base>;
    });
    timber?: {
      /**
       * Wood species.
       *
       */
      species?: EPD_Base.species;
      /**
       * Type of fabrication applied to the product. Please note that not all product classes might be compatible with
       * all fabrication types. Please refer to the product class documentation for more information.
       *
       */
      fabrication?: EPD_Base.fabrication;
      /**
       * List of organizations that certify forest practices.
       *
       */
      forest_practices_certifiers?: Array<Org_Ref>;
      /**
       * List of true/false properties for product options
       *
       */
      options?: {
        /**
         * Weather Exposed
         */
        weather_exposed?: boolean;
        /**
         * Fire Retardant Treated
         */
        fire_retardant?: boolean;
        /**
         * Decay Resistance Treated
         */
        decay_resistant?: boolean;
      };
    };
    aluminium?: {
      /**
       * Alloy group.
       *
       */
      alloy?: EPD_Base.alloy;
      /**
       * List of true/false properties for product options
       */
      options?: {
        /**
         * Anodized
         */
        anodized?: boolean;
        /**
         * Painted
         */
        painted?: boolean;
        /**
         * Includes a polymer thermal barrier to improve insulation. Often machined to remove any "bridge"
         * of aluminium from one side to the other.
         *
         */
        thermally_improved?: boolean;
      };
    };
    glass?: {
      nafs_performance_class?: {
        /**
         * Residential; commonly used in one- and two-family dwellings.
         *
         */
        'r'?: boolean;
        /**
         * Light Commercial: commonly used in low-rise and mid-rise multi-family dwellings and other buildings where \
         * larger sizes and higher loading requirements are expected.
         *
         */
        lc?: boolean;
        /**
         * Commercial Window: commonly used in low-rise and mid-rise buildings where larger sizes, higher loading
         * requirements, limits on deflection, and heavy use are expected.
         *
         */
        cw?: boolean;
        /**
         * Architectural Window: commonly used in high-rise and mid-rise buildings to meet increased loading requirements
         * and limits on deflection, and in buildings where frequent and extreme use of the fenestration
         * products is expected.
         *
         */
        aw?: boolean;
      };
      intended_application?: {
        /**
         * Intended for curtain walls. Relevant for IGUs.
         */
        curtain_wall?: boolean;
        /**
         * Intended for residential (NAFS 'R') and similar windows, doors, or skylights. Relevant for IGUs.
         */
        r_windows?: boolean;
        /**
         * Intended for light commercial (NAFS 'LC') and similar windows. Relevant for IGUs.
         */
        lc_windows?: boolean;
        /**
         * Intended for commercial (NAFS 'CW') and similar windows. Relevant for IGUs.
         */
        cw_windows?: boolean;
        /**
         * Intended for architectural (NAFS 'AW') and similar windows. Relevant for IGUs.
         */
        aw_windows?: boolean;
        /**
         * Intended for Storefronts and similar applications. Relevant for IGUs.
         */
        storefronts?: boolean;
        /**
         * Intended for Glazed Doors and similar applications. Relevant for IGUs.
         */
        glazed_doors?: boolean;
        /**
         * Intended for Unit Skylights and similar applications. Relevant for IGUs.
         */
        unit_skylights?: boolean;
        /**
         * Intended for sloped glazing, and architectural skylights, and similar. Relevant for IGUs.
         */
        sloped_skylights?: boolean;
        /**
         * Intended for other application not listed. Relevant for IGUs.
         */
        other?: boolean;
      };
      /**
       * NAFS Performance Grade. The NAFS Performance Grade is a number that represents the performance of the glazing
       * product. The higher the number, the better the performance. The NAFS Performance Grade is calculated using
       * the NAFS Performance Class, the NAFS Performance Index, and the NAFS Performance Factor.
       *
       * While it is expressed as pressure, there are specific values which are allowed. The values are listed in the enum.
       *
       */
      nafs_performance_grade?: EPD_Base.nafs_performance_grade;
      /**
       * Number of panes, each separated by a cavity. A 3 pane unit has 2 cavities.
       * example: 3
       *
       */
      glass_panes?: number;
      /**
       * Maximum Differential Pressure, a measure of wind tolerance.
       *
       */
      dp_rating?: string;
      /**
       * Air infiltration, measured at a certain level of Differential Pressure.
       *
       */
      air_infiltration?: string;
      /**
       * Solar heat gain, measured at a certain level of Differential Pressure. Range is 0 to 1.
       *
       */
      solar_heat_gain?: number;
      /**
       * Thickness of the flat glass panes. Relevant for Flat Glass Panes (Openings >> Glazing >> Panes >> Flat Glass
       * according to EC3 classification). Consult actual EC3 category structure for more details.
       *
       */
      flat_glass_panes_thickness?: EPD_Base.flat_glass_panes_thickness;
      /**
       * Weighted average conductance of heat across assembly (including frame).
       *
       */
      assembly_u_factor?: string;
      /**
       * Conductance of heat at center of glass.
       *
       */
      cog_u_factor?: string;
      /**
       * Thermal separation.
       *
       */
      thermal_separation?: EPD_Base.thermal_separation;
      /**
       * Spacer material for Integrated Glass Unit. Relevant for IGUs.
       *
       */
      spacer?: EPD_Base.spacer;
      /**
       * Frame material. Relevant for Framing. See EC3 documentation for actual product classes.
       *
       */
      frame_material?: EPD_Base.frame_material;
      /**
       * Hardware function. Relevant for Window Hardware. See EC3 documentation for actual product classes.
       *
       */
      hardware_function?: EPD_Base.hardware_function;
      /**
       * List of true/false properties for product options
       *
       */
      options?: {
        /**
         * Low Emissivity coatings
         */
        low_emissivity?: boolean;
        /**
         * Glazing with an electrically controllable solar heat gain and/or other properties.
         */
        electrochromic?: boolean;
        /**
         * Flat glass that has undergone a chemical etching process.
         */
        acid_etched?: boolean;
        /**
         * Consists of a single pane that has been heat-treated to give the glass increased impact resistance.
         * Standard typically used in North America.
         *
         */
        tempered?: boolean;
        /**
         * Consists of a single pane that has been specially heat-treated to give the glass increased impact resistance.
         * Standard typically used in Europe.
         *
         */
        toughened?: boolean;
        /**
         * Consists of at least two glass panes lying one on top of the other, with one or several layers of a
         * tear-resistant, viscoelastic film positioned between the panes, which consist of polyvinyl butyral (PVB)
         *
         */
        laminated?: boolean;
        /**
         * At least one coating is applied in a pyrolytic process, typically during float glass production.
         */
        pyrolytic_coated?: boolean;
        /**
         * At least one coating is applied using sputter (vacuum deposition) coating.
         */
        sputter_coat?: boolean;
        /**
         * The product has been designed to resist windborne debris.
         */
        hurricane_resistant?: boolean;
        /**
         * Specifically tested for its ability to block flames and smoke, but not radiant heat. Ranges from  specialty
         * tempered products rated for ~20 minutes to glass ceramics rated up to 3 hours.
         *
         */
        fire_protection?: boolean;
      };
    };
    cement?: {
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
      /**
       * Cement type, per ASTM C150 or C595
       */
      astm_prescriptive?: EPD_Base.astm_prescriptive;
      /**
       * Cement performance specifications, per ASTM C1157
       */
      astm_performance?: Array<'C1157 GU' | 'C1157 HE' | 'C1157 MS' | 'C1157 HS' | 'C1157 MH' | 'C1157 LH'>;
      /**
       * Cement type, per EN197 Table 1
       */
      en197_1_type?: EPD_Base.en197_1_type;
      /**
       * Cement performance specifications, per ASTM C1157
       */
      csa_a3001?: Array<'A3001 GU(L)(b)' | 'A3001 HE(L)(b)' | 'A3001 MS(L)(b)' | 'A3001 HS(L)(b)'>;
    };
  };
  /**
   * Reference to this EPD's JSON object
   */
  readonly ref?: string;
};

export namespace EPD_Base {

  /**
   * What kind of doc this is
   */
  export enum doctype {
    OPEN_EPD = 'OpenEPD',
  }

  /**
   * Always kilograms
   */
  export enum unit {
    KG = 'kg',
  }

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
   * * `Normal` - Normal weight CMU has a density of 125 lbs/cu. ft.
   * * `Medium` - Medium weight CMU has a density of 105-125 lbs/cu. ft.
   * * `Light` - Normal weight CMU has a density less than 105 lbs/cu. ft.
   *
   */
  export enum weight_classification {
    NORMAL = 'Normal',
    MEDIUM = 'Medium',
    LIGHT = 'Light',
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

  /**
   * Wood species.
   *
   */
  export enum species {
    ALASKA_CEDAR = 'Alaska Cedar',
    ALASKA_HEMLOCK = 'Alaska Hemlock',
    ALASKA_SITKA_SPRUCE = 'Alaska Sitka Spruce',
    ALASKA_WHITE_SPRUCE = 'Alaska White Spruce',
    ALASKA_YELLOW_CEDAR = 'Alaska Yellow Cedar',
    ALPINE_FIR = 'Alpine Fir',
    AMABILIS_FIR = 'Amabilis Fir',
    AMERICAN_BEECH = 'American Beech',
    AMERICAN_ELM = 'American Elm',
    BALDCYPRESS = 'Baldcypress',
    BALSAM_FIR = 'Balsam Fir',
    BIG_TOOTH_ASPEN = 'Big Tooth Aspen',
    BIGTOOTH_ASPEN = 'Bigtooth Aspen',
    BITTERNUT_HICKORY = 'Bitternut Hickory',
    BLACK_ASH = 'Black Ash',
    BLACK_MAPLE = 'Black Maple',
    BLACK_OAK = 'Black Oak',
    BLACK_SPRUCE = 'Black Spruce',
    BUR_OAK = 'Bur Oak',
    CALIFORNIA_RED_FIR = 'California Red Fir',
    CHERRYBARK_OAK = 'Cherrybark Oak',
    CHESTNUT_OAK = 'Chestnut Oak',
    COAST_SITKA_SPRUCE = 'Coast Sitka Spruce',
    COTTONWOOD = 'Cottonwood',
    DOUGLAS_FIR = 'Douglas Fir',
    DOUGLAS_FIR_SOUTH = 'Douglas Fir-South',
    EASTERN_COTTONWOOD = 'Eastern Cottonwood',
    EASTERN_HEMLOCK = 'Eastern Hemlock',
    EASTERN_WHITE_PINE = 'Eastern White Pine',
    EASTERN_WHITE_PINE_NORTH_ = 'Eastern White Pine (North)',
    ENGELMANN_SPRUCE = 'Engelmann Spruce',
    GRAND_FIR = 'Grand Fir',
    IDAHO_WHITE_PINE = 'Idaho White Pine',
    INCENSE_CEDAR = 'Incense Cedar',
    JACK_PINE = 'Jack Pine',
    LAUREL_OAK = 'Laurel Oak',
    LIVE_OAK = 'Live Oak',
    LOBLOLLY_PINE = 'Loblolly Pine',
    LODGEPOLE_PINE = 'Lodgepole Pine',
    LONGLEAF_PINE = 'Longleaf Pine',
    SCOTS_PINE = 'Scots Pine',
    MIXED_OAK = 'Mixed Oak',
    MOCKERNUT_HICKORY = 'Mockernut Hickory',
    MOUNTAIN_HEMLOCK = 'Mountain Hemlock',
    NOBLE_FIR = 'Noble Fir',
    NORTHERN_RED_OAK = 'Northern Red Oak',
    NORTHERN_WHITE_CEDAR = 'Northern White Cedar',
    NORWAY_PINE = 'Norway Pine',
    NORWAY_RED_PINE = 'Norway (Red) Pine',
    NORWAY_SPRUCE = 'Norway Spruce',
    NUTMEG_HICKORY = 'Nutmeg Hickory',
    OVERCUP_OAK = 'Overcup Oak',
    PACIFIC_COAST_YELLOW_CEDAR = 'Pacific Coast Yellow Cedar',
    PACIFIC_SILVER_FIR = 'Pacific Silver Fir',
    PECAN_HICKORY = 'Pecan Hickory',
    PIGNUT_HICKORY = 'Pignut Hickory',
    PIN_OAK = 'Pin Oak',
    PITCH_PINE = 'Pitch Pine',
    PONDEROSA_PINE = 'Ponderosa Pine',
    POND_PINE = 'Pond Pine',
    PORT_ORFORD_CEDAR = 'Port Orford Cedar',
    POST_OAK = 'Post Oak',
    QUAKING_ASPEN = 'Quaking Aspen',
    RED_MAPLE = 'Red Maple',
    RED_PINE = 'Red Pine',
    RED_SPRUCE = 'Red Spruce',
    REDWOOD = 'Redwood',
    ROCK_ELM = 'Rock Elm',
    SCARLET_OAK = 'Scarlet Oak',
    SHAGBARK_HICKORY = 'Shagbark Hickory',
    SHELLBARK_HICKORY = 'Shellbark Hickory',
    SHORTLEAF_PINE = 'Shortleaf Pine',
    SILVER_MAPLE = 'Silver Maple',
    SITKA_SPRUCE = 'Sitka Spruce',
    SLASH_PINE = 'Slash Pine',
    SOUTHERN_RED_OAK = 'Southern Red Oak',
    SUBALPINE_FIR = 'Subalpine Fir',
    SUGAR_MAPLE = 'Sugar Maple',
    SUGAR_PINE = 'Sugar Pine',
    SWAMP_CHESTNUT_OAK = 'Swamp Chestnut Oak',
    SWAMP_WHITE_OAK = 'Swamp White Oak',
    SWEET_BIRCH = 'Sweet Birch',
    SWEETGUM_OAK = 'Sweetgum Oak',
    TAMARACK = 'Tamarack',
    VIRGINIA_PINE = 'Virginia Pine',
    WATER_HICKORY = 'Water Hickory',
    WATER_OAK = 'Water Oak',
    WATER_TUPULO = 'Water Tupulo',
    WESTERN_HEMLOCK = 'Western Hemlock',
    WESTERN_HEMLOCK_NORTH_ = 'Western Hemlock (North)',
    WESTERN_LARCH = 'Western Larch',
    WESTERN_RED_CEDAR = 'Western Red Cedar',
    WESTERN_WHITE_PINE = 'Western White Pine',
    WHITE_ASH = 'White Ash',
    WHITE_FIR = 'White Fir',
    WHITE_OAK = 'White Oak',
    WHITE_SPRUCE = 'White Spruce',
    WILLOW_OAK = 'Willow Oak',
    YELLOW_BIRCH = 'Yellow Birch',
    YELLOW_CEDAR = 'Yellow Cedar',
    YELLOW_POPLAR = 'Yellow Poplar',
  }

  /**
   * Type of fabrication applied to the product. Please note that not all product classes might be compatible with
   * all fabrication types. Please refer to the product class documentation for more information.
   *
   */
  export enum fabrication {
    PLYWOOD = 'Plywood',
    OSB = 'OSB',
    FIBERBOARD = 'Fiberboard',
    CLT = 'CLT',
    GLT = 'GLT',
    NLT = 'NLT',
    DLT = 'DLT',
    LVL = 'LVL',
    BONDED_STRAND = 'Bonded Strand',
    BAMBOO = 'Bamboo',
    PARQUET = 'Parquet',
    CORK = 'Cork',
  }

  /**
   * Alloy group.
   *
   */
  export enum alloy {
    _1XXX = '1xxx',
    _2XXX = '2xxx',
    _3XXX = '3xxx',
    _4XXX = '4xxx',
    _5XXX = '5xxx',
    _6XXX = '6xxx',
    _7XXX = '7xxx',
    _8XXX = '8xxx',
    _1XX_X = '1xx.x',
    _2XX_X = '2xx.x',
    _3XX_X = '3xx.x',
    _4XX_X = '4xx.x',
    _5XX_X = '5xx.x',
    _7XX_X = '7xx.x',
    _8XX_X = '8xx.x',
    _9XX_X = '9xx.x',
  }

  /**
   * NAFS Performance Grade. The NAFS Performance Grade is a number that represents the performance of the glazing
   * product. The higher the number, the better the performance. The NAFS Performance Grade is calculated using
   * the NAFS Performance Class, the NAFS Performance Index, and the NAFS Performance Factor.
   *
   * While it is expressed as pressure, there are specific values which are allowed. The values are listed in the enum.
   *
   */
  export enum nafs_performance_grade {
    _15_PSF = '15 psf',
    _20_PSF = '20 psf',
    _25_PSF = '25 psf',
    _30_PSF = '30 psf',
    _35_PSF = '35 psf',
    _40_PSF = '40 psf',
    _45_PSF = '45 psf',
    _50_PSF = '50 psf',
    _55_PSF = '55 psf',
    _60_PSF = '60 psf',
    _65_PSF = '65 psf',
    _70_PSF = '70 psf',
    _75_PSF = '75 psf',
    _80_PSF = '80 psf',
    _85_PSF = '85 psf',
    _90_PSF = '90 psf',
    _95_PSF = '95 psf',
    _100_PSF = '100 psf',
    _105_PSF = '105 psf',
    _110_PSF = '110 psf',
    _115_PSF = '115 psf',
    _120_PSF = '120 psf',
    _125_PSF = '125 psf',
    _130_PSF = '130 psf',
    _135_PSF = '135 psf',
    _140_PSF = '140 psf',
    _145_PSF = '145 psf',
    _150_PSF = '150 psf',
    _155_PSF = '155 psf',
    _160_PSF = '160 psf',
    _165_PSF = '165 psf',
    _170_PSF = '170 psf',
    _175_PSF = '175 psf',
    _180_PSF = '180 psf',
    _185_PSF = '185 psf',
    _190_PSF = '190 psf',
    _195_PSF = '195 psf',
    _200_PSF = '200 psf',
    _205_PSF = '205 psf',
    _210_PSF = '210 psf',
  }

  /**
   * Thickness of the flat glass panes. Relevant for Flat Glass Panes (Openings >> Glazing >> Panes >> Flat Glass
   * according to EC3 classification). Consult actual EC3 category structure for more details.
   *
   */
  export enum flat_glass_panes_thickness {
    _2_MM = '2 mm',
    _3_MM = '3 mm',
    _4_MM = '4 mm',
    _5_MM = '5 mm',
    _6_MM = '6 mm',
    _8_MM = '8 mm',
    _10_MM = '10 mm',
    _12_MM = '12 mm',
    _16_MM = '16 mm',
    _19_MM = '19 mm',
  }

  /**
   * Thermal separation.
   *
   */
  export enum thermal_separation {
    ALUMINIUM = 'Aluminium',
    STEEL = 'Steel',
    THERMALLY_IMPROVED_METAL = 'Thermally Improved Metal',
    THERMALLY_BROKEN_METAL = 'Thermally Broken Metal',
    NONMETAL = 'Nonmetal',
  }

  /**
   * Spacer material for Integrated Glass Unit. Relevant for IGUs.
   *
   */
  export enum spacer {
    ALUMINUM = 'Aluminum',
    STAINLESS_STEEL = 'Stainless steel',
    PLASTIC_AND_STAINLESS_STEEL = 'Plastic and stainless steel',
    THERMOPLASTIC = 'Thermoplastic',
    FOAM = 'Foam',
    STAINLESS_STEEL_OR_TIN_PLATE_U_CHANNEL = 'Stainless steel or tin plate U-channel',
    PLASTIC = 'Plastic',
  }

  /**
   * Frame material. Relevant for Framing. See EC3 documentation for actual product classes.
   *
   */
  export enum frame_material {
    VINYL = 'Vinyl',
    ALUMINIUM = 'Aluminium',
    STEEL = 'Steel',
    WOOD = 'Wood',
    FIBERGLASS = 'Fiberglass',
    COMPOSITE = 'Composite',
    NONE = 'None',
    OTHER = 'Other',
  }

  /**
   * Hardware function. Relevant for Window Hardware. See EC3 documentation for actual product classes.
   *
   */
  export enum hardware_function {
    LOCK = 'Lock',
    HINGE = 'Hinge',
    HANDLE = 'Handle',
    OPERATOR = 'Operator',
    BALANCE = 'Balance',
    OTHER = 'Other',
  }

  /**
   * Cement type, per ASTM C150 or C595
   */
  export enum astm_prescriptive {
    TYPE_I_C150_ = 'Type I (C150)',
    TYPE_I_II_C150_ = 'Type I/II (C150)',
    TYPE_III_C150_ = 'Type III (C150)',
    TYPE_IV_C150_ = 'Type IV (C150)',
    TYPE_II_V_C150_ = 'Type II/V (C150)',
    PLC_C595_ = 'PLC (C595)',
    BLENDED_C595_ = 'Blended (C595)',
  }

  /**
   * Cement type, per EN197 Table 1
   */
  export enum en197_1_type {
    CEM_I = 'CEM I',
    CEM_II_A_S = 'CEM II/A-S',
    CEM_II_A_P = 'CEM II/A-P',
    CEM_II_A_Q = 'CEM II/A-Q',
    CEM_II_A_V = 'CEM II/A-V',
    CEM_II_A_W = 'CEM II/A-W',
    CEM_II_A_T = 'CEM II/A-T',
    CEM_II_A_L = 'CEM II/A-L',
    CEM_II_A_LL = 'CEM II/A-LL',
    CEM_II_A_M = 'CEM II/A-M',
    CEM_II_A_D = 'CEM II/A-D',
    CEM_II_B_S = 'CEM II/B-S',
    CEM_II_B_P = 'CEM II/B-P',
    CEM_II_B_Q = 'CEM II/B-Q',
    CEM_II_B_V = 'CEM II/B-V',
    CEM_II_B_W = 'CEM II/B-W',
    CEM_II_B_T = 'CEM II/B-T',
    CEM_II_B_L = 'CEM II/B-L',
    CEM_II_B_LL = 'CEM II/B-LL',
    CEM_II_B_M = 'CEM II/B-M',
    CEM_II_C = 'CEM II/C',
    CEM_III_A = 'CEM III/A',
    CEM_III_B = 'CEM III/B',
    CEM_III_C = 'CEM III/C',
    CEM_IV_A = 'CEM IV/A',
    CEM_IV_B = 'CEM IV/B',
    CEM_V_A = 'CEM V/A',
    CEM_V_B = 'CEM V/B',
  }


}

