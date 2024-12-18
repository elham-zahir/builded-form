import { Tabs } from "antd";
import { useState } from "react";
import styles from "./index.module.scss";
import DataTab from "../dataTab";
import React from "react";
import { FormCategories, IOptionType } from "../../types/types";
import CheckIcon from "../../icons/CheckIcon";

const tabs: IOptionType[] = [
  { name: "اطلاعات صاحب کسب و کار", value: "personFields" },
  { name: "اطلاعات کسب و کار", value: "jobFields" },
  { name: "اطلاعات حساب کاربری", value: "accountFields" },
  { name: "اطلاعات بیشتر", value: "othersFields" },
];

interface IProps {
  formCategories: FormCategories;
}

function TabsContainer({ formCategories }: IProps) {
  const [submittedTabs, setSubmittedTabs] = useState<number[]>([]);

  const initialItems = tabs?.map((item, index) => {
    return {
      label: (
        <div className={styles.tabLabel}>
          <span
            className={`${styles.tabIndex} tabIndex`}
            style={{
              backgroundColor: submittedTabs.includes(index + 1)
                ? "#4daa9f"
                : "#eeeeee",
            }}
          >
            {submittedTabs.includes(index + 1) ? <CheckIcon /> : index + 1}
          </span>
          <p>{item.name}</p>
          {index !== tabs.length - 1 && (
            <div
              className={`${styles.tabLine} tabLine`}
              style={{
                backgroundColor: submittedTabs.includes(index + 1)
                  ? "#4daa9f"
                  : "#eeeeee",
              }}
            ></div>
          )}
        </div>
      ),
      children: (
        <DataTab
          title={item.name.toString()}
          name={item.value.toString()}
          fields={formCategories[item.value.toString()]}
          onSubmitTab={() => {
            setSubmittedTabs(
              Array.from(new Set([...submittedTabs, index + 1]))
            );
            setActiveKey(index < 3 ? index + 2 + "" : index + 1 + "");
          }}
        />
      ),
      key: index + 1 + "",
    };
  });

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
