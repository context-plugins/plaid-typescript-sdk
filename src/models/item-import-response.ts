import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemImportResponse = {
  accessToken: string;
  requestId: string;
};

export const itemImportResponseSchema: Schema<ItemImportResponse> = s.object<ItemImportResponse>({
  accessToken: s.string(),
  requestId: s.string(),
  _keysMap: {
    accessToken: "access_token",
    requestId: "request_id",
  },
});
