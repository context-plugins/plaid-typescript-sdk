import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxpayerIdentifierSchema, type TaxpayerIdentifier } from "./taxpayer-identifier.js";

export type TaxpayerIdentifiers = {
  taxpayerIdentifier: TaxpayerIdentifier;
};

export const taxpayerIdentifiersSchema: Schema<TaxpayerIdentifiers> = s.object<TaxpayerIdentifiers>({
  taxpayerIdentifier: taxpayerIdentifierSchema,
  _keysMap: {
    taxpayerIdentifier: "TAXPAYER_IDENTIFIER",
  },
});
