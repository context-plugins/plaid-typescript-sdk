import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  serviceProductFulfillmentDetailSchema,
  type ServiceProductFulfillmentDetail,
} from "./service-product-fulfillment-detail.js";

/**
 * A collection of details related to a fulfillment service or product in terms of request, process
 * and result.
 */
export type ServiceProductFulfillment = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  serviceProductFulfillmentDetail: ServiceProductFulfillmentDetail;
};

export const serviceProductFulfillmentSchema: Schema<ServiceProductFulfillment> =
  s.object<ServiceProductFulfillment>({
    serviceProductFulfillmentDetail: serviceProductFulfillmentDetailSchema,
    _keysMap: {
      serviceProductFulfillmentDetail: "SERVICE_PRODUCT_FULFILLMENT_DETAIL",
    },
  });
