import type { PageServerLoad } from "./$types";
import { hashSync } from "bcrypt-edge";

export const load: PageServerLoad = async () => {
  return {
    hash: hashSync("bonjour", 10),
  };
};
