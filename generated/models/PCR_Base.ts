/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PCR_Base = {
  /**
   * The unique ID for this PCR.
   * To ensure global uniqueness, should be registered at open-xpd-uuid.cqd.io/register or a coordinating registry.
   *
   */
  id?: string;
  /**
   * Document ID or code created by issuer.
   */
  issuer_doc_id?: string;
  /**
   * Full document name as listed in source document
   */
  name: string;
  /**
   * A shortened name without boilerplate text
   */
  short_name: string;
  /**
   * Document version, as expressed in document.
   */
  version?: string;
  /**
   * First day on which the document is valid.
   */
  date_of_issue: string;
  /**
   * Last day on which the document is valid.
   */
  valid_until?: string;
  /**
   * The declared units, if specified.
   */
  declared_units?: Array<{
    /**
     * How much of this in the amount
     */
    qty: number;
    /**
     * Which unit. SI units are preferred.
     */
    unit: string;
  }>;
  /**
   * URL to original document, preferably directly to a PDF.
   */
  doc?: string;
  status?: 'InDevelopment' | 'Published' | 'NonPublic' | 'Expired' | 'Sunset';
  /**
   * List of classifications, including Masterformat and UNSPSC
   */
  product_classes?: Record<string, (string | Array<string>)>;
  /**
   * Reference to this PCR's JSON object
   */
  ref?: string;
};

