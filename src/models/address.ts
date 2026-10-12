import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataSchema, type AddressData } from "./address-data.js";

/** A physical mailing address. */
export type Address = {
  /** Data about the components comprising an address. */
  data: AddressData;
  /** When `true`, identifies the address as the primary address on an account. */
  primary?: boolean;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  data: addressDataSchema,
  primary: s.optional(s.boolean()),
});
