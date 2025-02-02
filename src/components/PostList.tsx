import { usePostList } from "../hooks/usePostList";

type Props = {
  filterWord: string;
};

export const PostList = ({ filterWord }: Props) => {
  const { postList, errorMessage } = usePostList();

  const filteredPostList = postList.filter((post) =>
    post.body.toLowerCase().includes(filterWord.toLowerCase()),
  );

  return (
    <>
      {errorMessage !== "" && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPostList.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ;
    </>
  );
};
