import { ChangeEvent, useState } from "react";

type Props = { handleToggle: () => void };

export const UserPostToggleButton = ({ handleToggle }: Props) => {
  const [selected, setSelected] = useState<"user" | "post">("user");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetId = e.target.id;
    setSelected(targetId === "btnradio1" ? "user" : "post");
    if (targetId !== selected) {
      handleToggle();
    }
  };

  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        checked={selected === "user"}
        onChange={handleChange}
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">
        ユーザ一覧
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        checked={selected === "post"}
        onChange={handleChange}
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">
        投稿一覧
      </label>
    </div>
  );
};
