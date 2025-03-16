import APP_HOST from "../configs/envVariables";

//auth routes:
export const allUsersRoute = `${APP_HOST}/api/messages/addmessage`;
export const loginRoute = `${APP_HOST}/api/auth/login`;
export const logoutRoute = `${APP_HOST}/api/auth/logout`;

//message routes:
export const sendMessageRoute = `${APP_HOST}/api/messages/addmessage`;
export const getMessageRoute = `${APP_HOST}/api/messages/addmessage`;

//cloud routes:
//export const uploadMedia = `${APP_HOST}/api/cloud/upload`;