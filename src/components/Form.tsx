import { ChangeEvent, FormEvent } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Form = ({ value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="my-3">
        <form onSubmit={handleSubmit}>
          <input
            id="nameForm"
            type="text"
            value={value}
            className="form-control"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};
