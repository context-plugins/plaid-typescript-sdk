import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentityMatchScoreSchema,
  type AccountIdentityMatchScore,
} from "./account-identity-match-score.js";

/** ProcessorIdentityMatchResponse defines the response schema for `/processor/identity/match` */
export type ProcessorIdentityMatchResponse = {
  /** Identity match scores for an account */
  account: AccountIdentityMatchScore;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
