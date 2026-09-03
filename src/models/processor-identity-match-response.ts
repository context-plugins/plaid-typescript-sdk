import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentityMatchScoreSchema,
  type AccountIdentityMatchScore,
} from "./account-identity-match-score.js";

export type ProcessorIdentityMatchResponse = {
  account: AccountIdentityMatchScore;
  requestId: string;
};

export const processorIdentityMatchResponseSchema: Schema<ProcessorIdentityMatchResponse> =
  s.object<ProcessorIdentityMatchResponse>({
    account: accountIdentityMatchScoreSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
