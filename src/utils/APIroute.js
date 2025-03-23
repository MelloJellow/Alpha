import APP_HOST from "../configs/envVariables";

//auth routes:
export const allUsersRoute = `${APP_HOST}/api/messages/addmessage`;
export const loginRoute = `${APP_HOST}/api/auth/login`;
export const logoutRoute = `${APP_HOST}/api/auth/logout`;
export const registerRoute = `${APP_HOST}/api/auth/register`;

//message routes:
export const sendMessageRoute = `${APP_HOST}/api/messages/addmessage`;
export const getMessageRoute = `${APP_HOST}/api/messages/addmessage`;

//cloud routes:
//export const uploadMedia = `${APP_HOST}/api/cloud/upload`;

//Search Book - component route
export const SearchIsbnRoute = `${APP_HOST}/api/search`;

//Catalogue Book - component Route
export const CatalogueRoute = `${APP_HOST}/api/books`;

//Return University list
export const getUniRoute = `${APP_HOST}/api/locations/universities`;