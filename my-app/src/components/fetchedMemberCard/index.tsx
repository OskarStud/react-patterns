import MemberCard from "../memberCard";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function FetchedMemberCard() {
  const { user } = useContext(UserContext);

  return user ? <MemberCard {...user} /> : null;
}

export default FetchedMemberCard;
