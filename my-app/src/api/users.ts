import { TUser } from "../types/user";
import { initFormData } from "../components/form";

const API_USERS = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = (): Promise<TUser[]> => {
  return fetch(API_USERS).then((response) => response.json());
};

export const fetchUser = (formData: typeof initFormData): Promise<TUser> =>
  fetch(API_USERS, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
