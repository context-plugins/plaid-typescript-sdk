import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentityMatchScoreSchema,
  type AccountIdentityMatchScore,
} from "./account-identity-match-score.js";
import { itemSchema, type Item } from "./item.js";

export type IdentityMatchResponse = {
  accounts: AccountIdentityMatchScore[];
  item: Item;
  requestId: string;
};

export const identityMatchResponseSchema: Schema<IdentityMatchResponse> = s.object<IdentityMatchResponse>({
  accounts: s.array(s.lazy(() => accountIdentityMatchScoreSchema)),
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
