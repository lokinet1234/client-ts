/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Conversations } from "./conversations.js";
import { Libraries } from "./libraries.js";
import { MistralAgents } from "./mistralagents.js";

export class Beta extends ClientSDK {
  private _conversations?: Conversations;
  get conversations(): Conversations {
    return (this._conversations ??= new Conversations(this._options));
  }

  private _agents?: MistralAgents;
  get agents(): MistralAgents {
    return (this._agents ??= new MistralAgents(this._options));
  }

  private _libraries?: Libraries;
  get libraries(): Libraries {
    return (this._libraries ??= new Libraries(this._options));
  }
}
