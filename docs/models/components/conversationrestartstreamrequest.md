# ConversationRestartStreamRequest

Request to restart a new conversation from a given entry in the conversation.

## Example Usage

```typescript
import { ConversationRestartStreamRequest } from "@mistralai/mistralai/models/components";

let value: ConversationRestartStreamRequest = {
  inputs: [
    {
      object: "entry",
      type: "tool.execution",
      name: "image_generation",
      arguments: "<value>",
    },
  ],
  fromEntryId: "<id>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `inputs`                                                                                                                                   | *components.ConversationInputs*                                                                                                            | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `stream`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `store`                                                                                                                                    | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | Whether to store the results into our servers or not.                                                                                      |
| `handoffExecution`                                                                                                                         | [components.ConversationRestartStreamRequestHandoffExecution](../../models/components/conversationrestartstreamrequesthandoffexecution.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `completionArgs`                                                                                                                           | [components.CompletionArgs](../../models/components/completionargs.md)                                                                     | :heavy_minus_sign:                                                                                                                         | White-listed arguments from the completion API                                                                                             |
| `fromEntryId`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |