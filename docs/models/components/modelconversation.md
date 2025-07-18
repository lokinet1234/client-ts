# ModelConversation

## Example Usage

```typescript
import { ModelConversation } from "@mistralai/mistralai/models/components";

let value: ModelConversation = {
  id: "<id>",
  createdAt: new Date("2025-02-11T00:54:59.142Z"),
  updatedAt: new Date("2023-02-04T21:29:28.328Z"),
  model: "Aventador",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `instructions`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Instruction prompt the model will follow during the conversation.                             |
| `tools`                                                                                       | *components.ModelConversationTools*[]                                                         | :heavy_minus_sign:                                                                            | List of tools which are available to the model during the conversation.                       |
| `completionArgs`                                                                              | [components.CompletionArgs](../../models/components/completionargs.md)                        | :heavy_minus_sign:                                                                            | White-listed arguments from the completion API                                                |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name given to the conversation.                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the what the conversation is about.                                            |
| `object`                                                                                      | [components.ModelConversationObject](../../models/components/modelconversationobject.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |