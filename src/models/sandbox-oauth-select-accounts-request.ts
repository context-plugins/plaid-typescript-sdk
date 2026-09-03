import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxOauthSelectAccountsRequest = {
  oauthStateId: string;
  accounts: string[];
};

export const sandboxOauthSelectAccountsRequestSchema: Schema<SandboxOauthSelectAccountsRequest> =
  s.object<SandboxOauthSelectAccountsRequest>({
    oauthStateId: s.string(),
    accounts: s.array(s.string()),
    _keysMap: {
      oauthStateId: "oauth_state_id",
    },
  });
