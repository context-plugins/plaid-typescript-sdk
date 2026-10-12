import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employmentVerificationSchema, type EmploymentVerification } from "./employment-verification.js";

/**
 * EmploymentVerificationGetResponse defines the response schema for `/employment/verification/get`.
 */
export type EmploymentVerificationGetResponse = {
  /** A list of employment verification summaries. */
  employments: EmploymentVerification[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const employmentVerificationGetResponseSchema: Schema<EmploymentVerificationGetResponse> =
  s.object<EmploymentVerificationGetResponse>({
    employments: s.array(s.lazy(() => employmentVerificationSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
