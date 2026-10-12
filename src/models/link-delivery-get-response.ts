import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliverySessionStatusSchema,
  type LinkDeliverySessionStatus,
} from "./link-delivery-session-status.js";

/** LinkDeliveryGetResponse defines the response schema for `/link_delivery/get` */
export type LinkDeliveryGetResponse = {
  /**
   * The status of the given Hosted Link session.
   *
   * `CREATED`: The session is created but not yet accessed by the user
   *
   * `OPENED`: The session is opened by the user but not yet completed
   *
   * `EXITED`: The session has been exited by the user
   *
   * `COMPLETED`: The session has been completed by the user
   *
   * `EXPIRED`: The session has expired
   */
  status: LinkDeliverySessionStatus;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the time the given Hosted Link session was created at.
   */
  createdAt: Date;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the time the given Hosted Link session was completed at.
   */
  completedAt?: Date | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** An array of access tokens associated with the Hosted Link session. */
  accessTokens?: string[] | null;
  /** An array of `item_id`s associated with the Hosted Link session. */
  itemIds?: string[] | null;
};

export const linkDeliveryGetResponseSchema: Schema<LinkDeliveryGetResponse> =
  s.object<LinkDeliveryGetResponse>({
    status: linkDeliverySessionStatusSchema,
    createdAt: s.dateTime(),
    completedAt: s.optionalNullable(s.dateTime()),
    requestId: s.string(),
    accessTokens: s.optionalNullable(s.array(s.string())),
    itemIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      createdAt: "created_at",
      completedAt: "completed_at",
      requestId: "request_id",
      accessTokens: "access_tokens",
      itemIds: "item_ids",
    },
  });
