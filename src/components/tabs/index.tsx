import { Tabs } from "antd";
import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import OwnerDataTab from "../ownerData";
import BusinessData from "../businessData";
import AccountInfoTab from "../accountInfo";
import MoreDataTab from "../moreData";

const initialItems = [
  {
    label: (
      <div className={styles.tabLabel}>
        <span className={styles.tabIndex}>1</span>
        <p>اطلاعات صاحب کسب و کار</p>
      </div>
    ),
    children: <OwnerDataTab />,
    key: "1",
  },
  {
    label: (
      <div className={styles.tabLabel}>
        <span className={styles.tabIndex}>2</span>
        <p>اطلاعات کسب و کار</p>
      </div>
    ),
    children: <BusinessData />,
    key: "2",
  },
  {
    label: (
      <div className={styles.tabLabel}>
        <span className={styles.tabIndex}>3</span>
        <p>اطلاعات حساب کاربری</p>
      </div>
    ),
    children: <AccountInfoTab />,
    key: "3",
  },
  {
    label: (
      <div className={styles.tabLabel}>
        <span className={styles.tabIndex}>4</span>
        <p>اطلاعات بیشتر</p>
      </div>
    ),
    children: <MoreDataTab />,
    key: "4",
  },
];

function TabsContainer() {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  return (
    <Tabs
      tabPosition="left"
      onChange={onChange}
      activeKey={activeKey}
      items={initialItems}
    />
  );
}

export default TabsContainer;
