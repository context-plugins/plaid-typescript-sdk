import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { employerSchema, type Employer } from "./employer.js";

/** EmployersSearchResponse defines the response schema for `/employers/search`. */
export type EmployersSearchResponse = {
  /** A list of employers matching the search criteria. */
  employers: Employer[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
