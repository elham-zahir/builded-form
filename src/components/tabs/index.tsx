// import { Tabs } from "antd";
// import { useState } from "react";
// import styles from "./index.module.scss";
// import DataTab from "../dataTab";
// import React from "react";
// import { FormCategories, IOptionType } from "../../types/types";
// import CheckIcon from "../../icons/CheckIcon";
// import useWindowSize from "../../utils/useWindowSize";

// const tabs: IOptionType[] = [
//   { name: "اطلاعات هویتی", value: "personFields" },
//   { name: "اطلاعات محل سکونت", value: "personLocationField" },
//   { name: "اطلاعات تماس", value: "contactInfoFields" },
//   { name: "اطلاعات کسب و کار", value: "businessInfoFields" },
//   { name: "اطلاعات تماس کسب و کار", value: "businessContactFields" },
// ];

// interface IProps {
//   formCategories: FormCategories;
// }

// function TabsContainer({ formCategories }: IProps) {
//   const [submittedTabs, setSubmittedTabs] = useState<number[]>([]);

//   const initialItems = tabs?.map((item, index) => {
//     return {
//       label: (
//         <div className={styles.tabLabel}>
//           <span
//             className={`${styles.tabIndex} tabIndex`}
//             style={{
//               backgroundColor: submittedTabs.includes(index + 1)
//                 ? "#4daa9f"
//                 : "#eeeeee",
//             }}
//           >
//             {submittedTabs.includes(index + 1) ? <CheckIcon /> : index + 1}
//           </span>
//           <p>{item.name}</p>
//           {index !== tabs.length - 1 && (
//             <div
//               className={`${styles.tabLine} tabLine`}
//               style={{
//                 backgroundColor: submittedTabs.includes(index + 1)
//                   ? "#4daa9f"
//                   : "#eeeeee",
//               }}
//             ></div>
//           )}
//         </div>
//       ),
//       children: (
//         <>
//           <h2 className={styles.title}>{item.name.toString()}</h2>
//           <DataTab
//             name={item.value.toString()}
//             fields={formCategories[item.value.toString()]}
//             onSubmitTab={() => {
//               setSubmittedTabs(
//                 Array.from(new Set([...submittedTabs, index + 1]))
//               );
//               setActiveKey(index < 3 ? index + 2 + "" : index + 1 + "");
//             }}
//           />
//         </>
//       ),
//       key: index + 1 + "",
//     };
//   });

//   const [activeKey, setActiveKey] = useState(initialItems[0].key);

//   const onChange = (newActiveKey: string) => {
//     setActiveKey(newActiveKey);
//   };

//   return (
//     <Tabs
//       tabPosition={useWindowSize() < 992 ? "top" : "left"}
//       onChange={onChange}
//       activeKey={activeKey}
//       items={initialItems}
//     />
//   );
// }

// export default TabsContainer;

import { Tabs } from "antd";
import { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import DataTab from "../dataTab";
import React from "react";
import { FormCategories, IOptionType } from "../../types/types";
import CheckIcon from "../../icons/CheckIcon";
import useWindowSize from "../../utils/useWindowSize";

const tabs: IOptionType[] = [
  { name: "اطلاعات هویتی", value: "personFields" },
  { name: "اطلاعات محل سکونت", value: "personLocationField" },
  { name: "اطلاعات تماس", value: "contactInfoFields" },
  { name: "اطلاعات کسب و کار", value: "businessInfoFields" },
  { name: "اطلاعات تماس کسب و کار", value: "businessContactFields" },
];

interface IProps {
  formCategories: FormCategories;
}

function TabsContainer({ formCategories }: IProps) {
  const [submittedTabs, setSubmittedTabs] = useState<number[]>([]);
  const [activeKey, setActiveKey] = useState<string>("1");
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const initialItems = tabs.map((item, index) => {
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
        <>
          <h2 className={styles.title}>{item.name.toString()}</h2>
          <DataTab
            name={item.value.toString()}
            fields={formCategories[item.value.toString()]}
            onSubmitTab={() => {
              setSubmittedTabs(
                Array.from(new Set([...submittedTabs, index + 1]))
              );
              setActiveKey(index < 3 ? index + 2 + "" : index + 1 + "");
            }}
          />
        </>
      ),
      key: index + 1 + "",
    };
  });

  const scrollToActiveTab = (key: string) => {
    if (tabsRef.current) {
      const tabElement = tabsRef.current.querySelector(
        `[data-node-key="${key}"]`
      ) as HTMLElement;

      if (tabElement) {
        tabElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    }
  };

  useEffect(() => {
    scrollToActiveTab(activeKey);
  }, [activeKey]);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  return (
    <div ref={tabsRef} style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      <Tabs
        tabPosition={useWindowSize() < 992 ? "top" : "left"}
        onChange={onChange}
        activeKey={activeKey}
        items={initialItems}
      />
    </div>
  );
}

export default TabsContainer;
