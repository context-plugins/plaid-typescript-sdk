import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacReportingInformationSchema,
  type CreditFreddieMacReportingInformation,
} from "./credit-freddie-mac-reporting-information.js";
import {
  creditFreddieMacVerificationOfAssetResponseSchema,
  type CreditFreddieMacVerificationOfAssetResponse,
} from "./credit-freddie-mac-verification-of-asset-response.js";
import {
  serviceProductFulfillmentSchema,
  type ServiceProductFulfillment,
} from "./service-product-fulfillment.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type CreditFreddieMacVerificationOfAsset = {
  /** Information about a report identifier and a report name. */
  reportingInformation: CreditFreddieMacReportingInformation;
  /**
   * A collection of details related to a fulfillment service or product in terms of request,
   * process and result.
   */
  serviceProductFulfillment: ServiceProductFulfillment;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  verificationOfAssetResponse: CreditFreddieMacVerificationOfAssetResponse;
};

export const creditFreddieMacVerificationOfAssetSchema: Schema<CreditFreddieMacVerificationOfAsset> =
  s.object<CreditFreddieMacVerificationOfAsset>({
    reportingInformation: creditFreddieMacReportingInformationSchema,
    serviceProductFulfillment: serviceProductFulfillmentSchema,
    verificationOfAssetResponse: creditFreddieMacVerificationOfAssetResponseSchema,
    _keysMap: {
      reportingInformation: "REPORTING_INFORMATION",
      serviceProductFulfillment: "SERVICE_PRODUCT_FULFILLMENT",
      verificationOfAssetResponse: "VERIFICATION_OF_ASSET_RESPONSE",
    },
  });
