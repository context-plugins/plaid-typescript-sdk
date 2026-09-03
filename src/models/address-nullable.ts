import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataSchema, type AddressData } from "./address-data.js";

export type AddressNullable = {
  data: AddressData;
  primary?: boolean;
};

export const addressNullableSchema: Schema<AddressNullable> = s.object<AddressNullable>({
  data: addressDataSchema,
  primary: s.optional(s.boolean()),
});
