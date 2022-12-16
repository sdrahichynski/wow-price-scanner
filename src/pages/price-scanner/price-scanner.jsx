import * as React from "react";
import * as C from "components";
import * as LC from "./components";
import { utils, consts } from "./duck";
import styles from "./price-scanner.module.scss";

const PriceScanner = () => {
  const [active, setActive] = React.useState(consts.INITIAL_TABS[0].key);
  const [tabs, setTabs] = React.useState(consts.INITIAL_TABS);

  const handleAddTab = () => {
    if (tabs.length >= consts.MAX_TABS) return;


    setTabs((prevTabs) => {
      const newKey = utils.newPlanKey();
      const newTab = {
        label: `Plan ${newKey}`,
        children: <LC.Form title={`Plan ${newKey}`}/>,
        key: newKey,
      };

      setActive(newKey);

      return [...prevTabs, newTab];
    });
  };

  const handleRemoveTab = (key) => {
    setTabs((prevTabs) => {
      if (prevTabs.length === 1) return prevTabs;

      const index = prevTabs.findIndex((tab) => tab.key === key);

      if (active === key) {
        setActive(prevTabs[index === 0 ? index + 1 : index - 1].key);
      }

      return [...prevTabs.slice(0, index), ...prevTabs.slice(index + 1)];
    });
  };

  const handleEdit = (targetKey, action) => {
    if (action === "add") {
      handleAddTab();
    } else {
      handleRemoveTab(targetKey);
    }
  };

  return (
    <div className={styles.wrapper}>
      <C.Tabs
        activeKey={active}
        onChange={(key) => setActive(key)}
        onEdit={handleEdit}
        type={"editable-card"}
        items={tabs}
      />
    </div>
  );
};

export default PriceScanner;
