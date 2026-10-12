import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationSchema, type Application } from "./application.js";

/** ApplicationGetResponse defines the response schema for `/application/get` */
export type ApplicationGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** Metadata about the application */
  application: Application;
};

export const applicationGetResponseSchema: Schema<ApplicationGetResponse> = s.object<ApplicationGetResponse>({
  requestId: s.string(),
  application: applicationSchema,
  _keysMap: {
    requestId: "request_id",
  },
});
