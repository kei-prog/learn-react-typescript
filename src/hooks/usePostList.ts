import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const usePostList = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res: AxiosResponse<Post[]>) => {
        setPostList(res.data);
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  }, []);

  return { postList, errorMessage };
};
