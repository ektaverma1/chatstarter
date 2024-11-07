/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as functions_dm from "../functions/dm.js";
import type * as functions_friend from "../functions/friend.js";
import type * as functions_helper from "../functions/helper.js";
import type * as functions_message from "../functions/message.js";
import type * as functions_typing from "../functions/typing.js";
import type * as functions_user from "../functions/user.js";
import type * as http from "../http.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "functions/dm": typeof functions_dm;
  "functions/friend": typeof functions_friend;
  "functions/helper": typeof functions_helper;
  "functions/message": typeof functions_message;
  "functions/typing": typeof functions_typing;
  "functions/user": typeof functions_user;
  http: typeof http;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
