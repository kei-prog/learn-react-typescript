import { useUserList } from "../hooks/useUserList";

type Props = {
  filterWord: string;
};

export const UserList = ({ filterWord = "" }: Props) => {
  const { userList, errorMessage } = useUserList();

  const filteredUserList = userList.filter((user) =>
    user.name.toLowerCase().includes(filterWord.toLowerCase()),
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
            <th scope="col">name</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
