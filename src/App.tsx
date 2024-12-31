import React from "react";
import { ConfigProvider, Tabs } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import TabsContainer from "./components/tabs";
import { formCategories } from "./types/initials";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4daa9f",
        },
      }}
    >
      <div className={styles.container}>
        <div className={styles.tabs}>
          <TabsContainer formCategories={formCategories} />
        </div>
      </div>

      {/* <Tabs
        defaultActiveKey="1"
        tabPosition={"top"}
        style={{ height: 220 }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${id}`,
            key: id,
            disabled: i === 28,
            children: `Content of tab ${id}`,
          };
        })}
      /> */}
      {/* </div> */}
    </ConfigProvider>
  );
}

export default App;
