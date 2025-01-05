import React from "react";
import { ConfigProvider } from "antd";
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
    </ConfigProvider>
  );
}

export default App;
