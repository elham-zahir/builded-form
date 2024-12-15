import { FormInstance, Tabs } from "antd";
import { useState } from "react";
import styles from "./index.module.scss";
import OwnerDataTab from "../ownerData";
import BusinessData from "../businessData";
import AccountInfoTab from "../accountInfo";
import MoreDataTab from "../moreData";
import SubmitButton from "../submitButton";
import React from "react";

interface IProps {
  form: FormInstance;
}

function TabsContainer({ form }: IProps) {
  const initialItems = [
    {
      label: (
        <div className={styles.tabLabel}>
          <span className={styles.tabIndex}>1</span>
          <p>اطلاعات صاحب کسب و کار</p>
        </div>
      ),
      children: (
        <>
          <OwnerDataTab form={form} />
          {/* <SubmitButton /> */}
        </>
      ),
      key: "1",
    },
    {
      label: (
        <div className={styles.tabLabel}>
          <span className={styles.tabIndex}>2</span>
          <p>اطلاعات کسب و کار</p>
        </div>
      ),
      children: (
        <>
          <BusinessData form={form} />
          {/* <SubmitButton /> */}
        </>
      ),
      key: "2",
    },
    {
      label: (
        <div className={styles.tabLabel}>
          <span className={styles.tabIndex}>3</span>
          <p>اطلاعات حساب کاربری</p>
        </div>
      ),
      children: (
        <>
          <AccountInfoTab form={form} />
          {/* <SubmitButton /> */}
        </>
      ),
      key: "3",
    },
    {
      label: (
        <div className={styles.tabLabel}>
          <span className={styles.tabIndex}>4</span>
          <p>اطلاعات بیشتر</p>
        </div>
      ),
      children: (
        <>
          <MoreDataTab form={form} />
          {/* <SubmitButton /> */}
        </>
      ),
      key: "4",
    },
  ];

  const [activeKey, setActiveKey] = useState(initialItems[0].key);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  return (
    <>
      <Tabs
        tabPosition="left"
        onChange={onChange}
        activeKey={activeKey}
        items={initialItems}
      />
    </>
  );
}

export default TabsContainer;
