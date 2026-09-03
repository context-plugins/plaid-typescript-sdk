import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraLoansApplicationsRegisterResponse = {
  requestId: string;
};

export const craLoansApplicationsRegisterResponseSchema: Schema<CraLoansApplicationsRegisterResponse> =
  s.object<CraLoansApplicationsRegisterResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
