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

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type VerificationOfAsset = {
  /** Information about a report identifier and a report name. */
  reportingInformation: ReportingInformation;
  /**
   * A collection of details related to a fulfillment service or product in terms of request,
   * process and result.
   */
  serviceProductFulfillment: ServiceProductFulfillment;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
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
