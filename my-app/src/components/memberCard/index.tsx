import { FC } from "react";
import "./style.scss";

import { IUser } from "./types";
import { CardInfo } from "./parts/CardInfo";

const MemberCard: FC<IUser> = ({ name, ...rest }) => {
  return (
    <div className="member-card">
      <p className="title">{name}</p>
      <CardInfo {...rest} />
    </div>
  );
};

export default MemberCard;
