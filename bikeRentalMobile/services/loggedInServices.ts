import jwtDecode from "jwt-decode";
import Database from "./dbServices";
import { SESSION_DATA } from "../common/utils";

const DB_EXEC = Database.getConnection();

export async function getLoggedInUser(): Promise<IlocalStorageProfile> {
  const results = await DB_EXEC(`select * from ${SESSION_DATA.PROFILE}`);
  return results.rows._array[0];
}

export const setLoggedInUser = async (param: IlocalStorageProfile) => {
  // there should only be one user logged in
  await DB_EXEC(`delete from ${SESSION_DATA.PROFILE}`);
  let results;
  try {
    results = await DB_EXEC(
      `insert into ${SESSION_DATA.PROFILE} (${SESSION_DATA.RESULT}, ${SESSION_DATA.TOKEN})
        values (?,?)`,
      [param.result, param.token]
    );
  } catch (error) {
    console.log("setLoggedInUser error", error);
  }
  return results?.rowsAffected;
};

export const logOutUser = async (id: string) => {
  const results = await DB_EXEC(`delete from ${SESSION_DATA.PROFILE}`);
  return results.rowsAffected;
};

interface IDecodedToken {
  name: string;
  exp: number;
}

export async function checkIfTokenIsExpired(): Promise<boolean> {
  const user = await getLoggedInUser();
  if (!user.token) return true;

  const decodedToken = jwtDecode<IDecodedToken>(user.token);
  const timeNowInMilisseconds = new Date().getTime();
  const tokenExpireDateInMilisseconds = decodedToken.exp * 1000;
  if (tokenExpireDateInMilisseconds < timeNowInMilisseconds) return true;
  return false;
}
