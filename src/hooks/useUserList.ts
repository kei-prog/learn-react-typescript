import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

export const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res: AxiosResponse<User[]>) => {
        setUserList(res.data);
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  }, []);

  return { userList, errorMessage };
};
