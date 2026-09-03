import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationSchema, type Application } from "./application.js";

export type ApplicationGetResponse = {
  requestId: string;
  application: Application;
};

export const applicationGetResponseSchema: Schema<ApplicationGetResponse> = s.object<ApplicationGetResponse>({
  requestId: s.string(),
  application: applicationSchema,
  _keysMap: {
    requestId: "request_id",
  },
});
