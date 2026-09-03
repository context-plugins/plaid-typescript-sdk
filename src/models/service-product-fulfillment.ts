import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceProductFulfillmentDetailSchema,
  type ServiceProductFulfillmentDetail,
} from "./service-product-fulfillment-detail.js";

export type ServiceProductFulfillment = {
  serviceProductFulfillmentDetail: ServiceProductFulfillmentDetail;
};

export const serviceProductFulfillmentSchema: Schema<ServiceProductFulfillment> =
  s.object<ServiceProductFulfillment>({
    serviceProductFulfillmentDetail: serviceProductFulfillmentDetailSchema,
    _keysMap: {
      serviceProductFulfillmentDetail: "SERVICE_PRODUCT_FULFILLMENT_DETAIL",
    },
  });
