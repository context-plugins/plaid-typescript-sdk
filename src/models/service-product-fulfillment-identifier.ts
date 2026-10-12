import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export const ServiceProductFulfillmentIdentifier = {
  Voa: "VOA",
  Voe: "VOE",
} as const;
export type ServiceProductFulfillmentIdentifier =
  | (typeof ServiceProductFulfillmentIdentifier)[keyof typeof ServiceProductFulfillmentIdentifier]
  | (string & {});

export const serviceProductFulfillmentIdentifierSchema: EnumSchema<ServiceProductFulfillmentIdentifier> =
  s.enumOf<ServiceProductFulfillmentIdentifier>(ServiceProductFulfillmentIdentifier);
