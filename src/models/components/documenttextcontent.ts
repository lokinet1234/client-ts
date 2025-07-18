/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentTextContent = {
  text: string;
};

/** @internal */
export const DocumentTextContent$inboundSchema: z.ZodType<
  DocumentTextContent,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.string(),
});

/** @internal */
export type DocumentTextContent$Outbound = {
  text: string;
};

/** @internal */
export const DocumentTextContent$outboundSchema: z.ZodType<
  DocumentTextContent$Outbound,
  z.ZodTypeDef,
  DocumentTextContent
> = z.object({
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentTextContent$ {
  /** @deprecated use `DocumentTextContent$inboundSchema` instead. */
  export const inboundSchema = DocumentTextContent$inboundSchema;
  /** @deprecated use `DocumentTextContent$outboundSchema` instead. */
  export const outboundSchema = DocumentTextContent$outboundSchema;
  /** @deprecated use `DocumentTextContent$Outbound` instead. */
  export type Outbound = DocumentTextContent$Outbound;
}

export function documentTextContentToJSON(
  documentTextContent: DocumentTextContent,
): string {
  return JSON.stringify(
    DocumentTextContent$outboundSchema.parse(documentTextContent),
  );
}

export function documentTextContentFromJSON(
  jsonString: string,
): SafeParseResult<DocumentTextContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentTextContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentTextContent' from JSON`,
  );
}
