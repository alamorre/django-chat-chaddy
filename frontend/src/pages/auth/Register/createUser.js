import axios from "axios";

export const createUser = (values, onSuccess, onError) => {
  axios
    .post("http://127.0.0.1:8000/users/", values)
    .then((r) => onSuccess(r))
    .catch((e) => onError(e));
};