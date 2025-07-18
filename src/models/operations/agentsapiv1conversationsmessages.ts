/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AgentsApiV1ConversationsMessagesRequest = {
  /**
   * ID of the conversation from which we are fetching messages.
   */
  conversationId: string;
};

/** @internal */
export const AgentsApiV1ConversationsMessagesRequest$inboundSchema: z.ZodType<
  AgentsApiV1ConversationsMessagesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  conversation_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "conversation_id": "conversationId",
  });
});

/** @internal */
export type AgentsApiV1ConversationsMessagesRequest$Outbound = {
  conversation_id: string;
};

/** @internal */
export const AgentsApiV1ConversationsMessagesRequest$outboundSchema: z.ZodType<
  AgentsApiV1ConversationsMessagesRequest$Outbound,
  z.ZodTypeDef,
  AgentsApiV1ConversationsMessagesRequest
> = z.object({
  conversationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    conversationId: "conversation_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentsApiV1ConversationsMessagesRequest$ {
  /** @deprecated use `AgentsApiV1ConversationsMessagesRequest$inboundSchema` instead. */
  export const inboundSchema =
    AgentsApiV1ConversationsMessagesRequest$inboundSchema;
  /** @deprecated use `AgentsApiV1ConversationsMessagesRequest$outboundSchema` instead. */
  export const outboundSchema =
    AgentsApiV1ConversationsMessagesRequest$outboundSchema;
  /** @deprecated use `AgentsApiV1ConversationsMessagesRequest$Outbound` instead. */
  export type Outbound = AgentsApiV1ConversationsMessagesRequest$Outbound;
}

export function agentsApiV1ConversationsMessagesRequestToJSON(
  agentsApiV1ConversationsMessagesRequest:
    AgentsApiV1ConversationsMessagesRequest,
): string {
  return JSON.stringify(
    AgentsApiV1ConversationsMessagesRequest$outboundSchema.parse(
      agentsApiV1ConversationsMessagesRequest,
    ),
  );
}

export function agentsApiV1ConversationsMessagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  AgentsApiV1ConversationsMessagesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AgentsApiV1ConversationsMessagesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AgentsApiV1ConversationsMessagesRequest' from JSON`,
  );
}
