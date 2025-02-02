import { useState } from "react";
import { PostList } from "./components/PostList";
import { UserList } from "./components/UserList";
import { UserPostToggleButton } from "./components/UserPostToggleButton";
import { Form } from "./components/Form";

function App() {
  const [isToggle, setIsToggle] = useState(true);
  const [text, setText] = useState("");

  const handleToggle = () => {
    setIsToggle(!isToggle);
    setText("");
  };

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <UserPostToggleButton handleToggle={handleToggle} />
        <Form value={text} onChange={handleChange} />
        {isToggle ? (
          <UserList filterWord={text} />
        ) : (
          <PostList filterWord={text} />
        )}
      </div>
    </>
  );
}

export default App;
