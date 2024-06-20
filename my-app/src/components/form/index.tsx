import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  useContext,
} from "react";
import "./style.scss";
import { TextField } from "./parts/TextField";
import { Button } from "../button";
import { fetchUser } from "../../api/users";
import { TabsContext } from "../context/TabsContext";
import { UserContext } from "../context/UserContext";

export const initFormData = {
  username: "",
  phone: "",
  website: "",
};

const Form = () => {
  const { tab } = useContext(TabsContext);
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(initFormData);
  const { username, phone, website } = formData;

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!setUser) return;
      fetchUser(formData).then((user) => setUser(user));
    },
    [formData, setUser],
  );

  if (tab !== "form") return null;

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <TextField
        label="Username:"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <TextField
        label="Phone:"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <TextField
        label="Website:"
        value={website}
        type="email"
        name="website"
        onChange={handleChange}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
