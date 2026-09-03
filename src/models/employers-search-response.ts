import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employerSchema, type Employer } from "./employer.js";

export type EmployersSearchResponse = {
  employers: Employer[];
  requestId: string;
};

export const employersSearchResponseSchema: Schema<EmployersSearchResponse> =
  s.object<EmployersSearchResponse>({
    employers: s.array(s.lazy(() => employerSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
