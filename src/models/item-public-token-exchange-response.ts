import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemPublicTokenExchangeResponse = {
  accessToken: string;
  itemId: string;
  requestId: string;
};

export const itemPublicTokenExchangeResponseSchema: Schema<ItemPublicTokenExchangeResponse> =
  s.object<ItemPublicTokenExchangeResponse>({
    accessToken: s.string(),
    itemId: s.string(),
    requestId: s.string(),
    _keysMap: {
      accessToken: "access_token",
      itemId: "item_id",
      requestId: "request_id",
    },
  });
