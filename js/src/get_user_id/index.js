import { nanoid } from "nanoid";

export const getSecretIUId = () => `iu${nanoid(6)}`;
