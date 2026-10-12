import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceProductFulfillmentIdentifierSchema,
  type ServiceProductFulfillmentIdentifier,
} from "./service-product-fulfillment-identifier.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type ServiceProductFulfillmentDetail = {
  /** A string that uniquely identifies a type of order Verification of Asset. */
  vendorOrderIdentifier: string | null;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  serviceProductFulfillmentIdentifier: ServiceProductFulfillmentIdentifier;
};

export const serviceProductFulfillmentDetailSchema: Schema<ServiceProductFulfillmentDetail> =
  s.object<ServiceProductFulfillmentDetail>({
    vendorOrderIdentifier: s.nullable(s.string()),
    serviceProductFulfillmentIdentifier: serviceProductFulfillmentIdentifierSchema,
    _keysMap: {
      vendorOrderIdentifier: "VendorOrderIdentifier",
      serviceProductFulfillmentIdentifier: "ServiceProductFulfillmentIdentifier",
    },
  });
