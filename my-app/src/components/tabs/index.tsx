import { Button } from "../button";
import { FC, useContext } from "react";
import "./style.scss";
import { TTab } from "../../types/tabs";
import { TabsContext } from "../context/TabsContext";
import { TABS } from "../../consts/tabs";

const Tabs = () => {
  const { setTab } = useContext(TabsContext);

  const handleClick = (tab: TTab) => () => setTab?.(tab);

  return (
    <div className="tabs">
      {TABS.map((tab) => {
        return (
          <Button onClick={handleClick(tab)} key={tab}>
            {tab}
          </Button>
        );
      })}
    </div>
  );
};

export default Tabs;
