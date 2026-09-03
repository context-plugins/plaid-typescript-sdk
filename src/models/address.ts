import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataSchema, type AddressData } from "./address-data.js";

export type Address = {
  data: AddressData;
  primary?: boolean;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  data: addressDataSchema,
  primary: s.optional(s.boolean()),
});
