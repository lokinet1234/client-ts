# UserMessage

## Example Usage

```typescript
import { UserMessage } from "@mistralai/mistralai/models/components";

let value: UserMessage = {
  content: [
    {
      referenceIds: [
        317632,
      ],
      type: "reference",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `content`                                                                | *components.UserMessageContent*                                          | :heavy_check_mark:                                                       | N/A                                                                      |
| `role`                                                                   | [components.UserMessageRole](../../models/components/usermessagerole.md) | :heavy_minus_sign:                                                       | N/A                                                                      |