import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  supertokensId: string;
  username: string;
};
