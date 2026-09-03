import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craPdfAddOnsSchema, type CraPdfAddOns } from "./cra-pdf-add-ons.js";

export type CraCheckReportPdfGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  thirdPartyUserToken?: string;
  addOns?: CraPdfAddOns[];
  userToken?: string;
};

export const craCheckReportPdfGetRequestSchema: Schema<CraCheckReportPdfGetRequest> =
  s.object<CraCheckReportPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    addOns: s.optional(s.array(s.lazy(() => craPdfAddOnsSchema))),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      addOns: "add_ons",
      userToken: "user_token",
    },
  });
