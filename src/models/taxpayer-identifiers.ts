import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxpayerIdentifierSchema, type TaxpayerIdentifier } from "./taxpayer-identifier.js";

/** The collection of `TAXPAYER_IDENTIFICATION` elements */
export type TaxpayerIdentifiers = {
  /**
   * Information about the Taxpayer identification values assigned to the individual or legal
   * entity.
   */
  taxpayerIdentifier: TaxpayerIdentifier;
};

export const taxpayerIdentifiersSchema: Schema<TaxpayerIdentifiers> = s.object<TaxpayerIdentifiers>({
  taxpayerIdentifier: taxpayerIdentifierSchema,
  _keysMap: {
    taxpayerIdentifier: "TAXPAYER_IDENTIFIER",
  },
});
