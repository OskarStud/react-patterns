import { memo, useCallback, useContext, useEffect, useState } from "react";
import { TabsContext } from "../context/TabsContext";
import { Button } from "../button";
import MemberCard from "../memberCard";
import { fetchUsers } from "../../api/users";
import { TUser } from "../../types/user";

export const Users = memo(() => {
  const { tab } = useContext(TabsContext);
  const [users, setUsers] = useState<TUser[]>([]);

  const getUsers = useCallback(() => {
    fetchUsers().then((response) => setUsers([...users, ...response]));
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  if (tab !== "users" || !users.length) return null;

  return (
    <>
      {users.map((user) => (
        <MemberCard {...user} key={user.username} />
      ))}
      <Button label="нажми меня!" onClick={getUsers}>
        more users
      </Button>
    </>
  );
});

Users.displayName = "Users";
