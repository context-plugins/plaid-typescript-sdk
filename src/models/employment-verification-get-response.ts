import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employmentVerificationSchema, type EmploymentVerification } from "./employment-verification.js";

export type EmploymentVerificationGetResponse = {
  employments: EmploymentVerification[];
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
