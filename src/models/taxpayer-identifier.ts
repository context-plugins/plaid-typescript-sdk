import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxpayerIdentifierTypeSchema, type TaxpayerIdentifierType } from "./taxpayer-identifier-type.js";

export type TaxpayerIdentifier = {
  taxpayerIdentifierType: TaxpayerIdentifierType | null;
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
