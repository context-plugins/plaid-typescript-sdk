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

export type CreditFreddieMacVerificationOfAsset = {
  reportingInformation: CreditFreddieMacReportingInformation;
  serviceProductFulfillment: ServiceProductFulfillment;
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
