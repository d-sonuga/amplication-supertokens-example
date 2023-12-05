import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  supertokensId: string;
  updatedAt: Date;
  username: string;
};
