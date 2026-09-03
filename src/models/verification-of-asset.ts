import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reportingInformationSchema, type ReportingInformation } from "./reporting-information.js";
import {
  serviceProductFulfillmentSchema,
  type ServiceProductFulfillment,
} from "./service-product-fulfillment.js";
import {
  verificationOfAssetResponseSchema,
  type VerificationOfAssetResponse,
} from "./verification-of-asset-response.js";

export type VerificationOfAsset = {
  reportingInformation: ReportingInformation;
  serviceProductFulfillment: ServiceProductFulfillment;
  verificationOfAssetResponse: VerificationOfAssetResponse;
};

export const verificationOfAssetSchema: Schema<VerificationOfAsset> = s.object<VerificationOfAsset>({
  reportingInformation: reportingInformationSchema,
  serviceProductFulfillment: serviceProductFulfillmentSchema,
  verificationOfAssetResponse: verificationOfAssetResponseSchema,
  _keysMap: {
    reportingInformation: "REPORTING_INFORMATION",
    serviceProductFulfillment: "SERVICE_PRODUCT_FULFILLMENT",
    verificationOfAssetResponse: "VERIFICATION_OF_ASSET_RESPONSE",
  },
});
