import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxpayerIdentifierTypeSchema, type TaxpayerIdentifierType } from "./taxpayer-identifier-type.js";

/**
 * Information about the Taxpayer identification values assigned to the individual or legal entity.
 */
export type TaxpayerIdentifier = {
  /**
   * A value from a MISMO prescribed list that classifies identification numbers used by the
   * Internal Revenue Service (IRS) in the administration of tax laws. A Social Security number
   * (SSN) is issued by the SSA; all other taxpayer identification numbers are issued by the IRS.
   */
  taxpayerIdentifierType: TaxpayerIdentifierType | null;
  /**
   * The value of the taxpayer identifier as assigned by the IRS to the individual or legal entity.
   */
  taxpayerIdentifierValue: string | null;
};

export const taxpayerIdentifierSchema: Schema<TaxpayerIdentifier> = s.object<TaxpayerIdentifier>({
  taxpayerIdentifierType: s.nullable(s.lazy(() => taxpayerIdentifierTypeSchema)),
  taxpayerIdentifierValue: s.nullable(s.string()),
  _keysMap: {
    taxpayerIdentifierType: "TaxpayerIdentifierType",
    taxpayerIdentifierValue: "TaxpayerIdentifierValue",
  },
});
