import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionStateSchema, type ActionState } from "./action-state.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import {
  itemCreateAuthenticationSchema,
  type ItemCreateAuthentication,
} from "./item-create-authentication.js";
import { scopesNullableSchema, type ScopesNullable } from "./scopes-nullable.js";

export type Activity = {
  activity: ActivityType;
  initiatedDate: string;
  id: string;
  initiator: string;
  state: ActionState;
  targetApplicationId?: string;
  scopes?: ScopesNullable | null;
  authentication?: ItemCreateAuthentication;
};

export const activitySchema: Schema<Activity> = s.object<Activity>({
  activity: activityTypeSchema,
  initiatedDate: s.dateOnly(),
  id: s.string(),
  initiator: s.string(),
  state: actionStateSchema,
  targetApplicationId: s.optional(s.string()),
  scopes: s.optionalNullable(s.lazy(() => scopesNullableSchema)),
  authentication: s.optional(s.lazy(() => itemCreateAuthenticationSchema)),
  _keysMap: {
    initiatedDate: "initiated_date",
    targetApplicationId: "target_application_id",
  },
});
