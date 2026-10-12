import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionStateSchema, type ActionState } from "./action-state.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import {
  itemCreateAuthenticationSchema,
  type ItemCreateAuthentication,
} from "./item-create-authentication.js";
import { scopesNullableSchema, type ScopesNullable } from "./scopes-nullable.js";

/** Describes a consent activity. */
export type Activity = {
  /** Types of consent activities */
  activity: ActivityType;
  /**
   * The date this activity was initiated [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * (YYYY-MM-DD) format in UTC.
   */
  initiatedDate: string;
  /** A unique identifier for the activity */
  id: string;
  /** Application ID of the client who initiated the activity. */
  initiator: string;
  /** Enum representing the state of the action/activity. */
  state: ActionState;
  /**
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  targetApplicationId?: string;
  /** The scopes object */
  scopes?: ScopesNullable | null;
  /** Enum representing the entity authenticating the user. */
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
