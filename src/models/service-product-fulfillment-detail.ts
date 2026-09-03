import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceProductFulfillmentIdentifierSchema,
  type ServiceProductFulfillmentIdentifier,
} from "./service-product-fulfillment-identifier.js";

export type ServiceProductFulfillmentDetail = {
  vendorOrderIdentifier: string | null;
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
