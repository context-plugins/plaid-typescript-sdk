import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionLocation = {
  address: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
  lat: number | null;
  lon: number | null;
  storeNumber: string | null;
};

export const transactionLocationSchema: Schema<TransactionLocation> = s.object<TransactionLocation>({
  address: s.nullable(s.string()),
  city: s.nullable(s.string()),
  region: s.nullable(s.string()),
  postalCode: s.nullable(s.string()),
  country: s.nullable(s.string()),
  lat: s.nullable(s.number()),
  lon: s.nullable(s.number()),
  storeNumber: s.nullable(s.string()),
  _keysMap: {
    postalCode: "postal_code",
    storeNumber: "store_number",
  },
});
