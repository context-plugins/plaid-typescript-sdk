import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplicationGetRequest = {
  clientId: string;
  secret: string;
  applicationId: string;
};

export const applicationGetRequestSchema: Schema<ApplicationGetRequest> = s.object<ApplicationGetRequest>({
  clientId: s.string(),
  secret: s.string(),
  applicationId: s.string(),
  _keysMap: {
    clientId: "client_id",
    applicationId: "application_id",
  },
});
