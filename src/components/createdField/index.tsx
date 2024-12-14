import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Row } from "antd";
import PenIcon from "../../icons/PenIcon";
import TrashIcon from "../../icons/RemoveIcon";

interface IProps {
  name: string;
  key: number;
  onEdit: (key: number) => void;
  onRemove: (key: number) => void;
}

function CreatedField({ name, key, onEdit, onRemove }: IProps) {
  return (
    <Row key={key} className={styles.field}>
      <Col span={12} className={styles.fieldName}>
        {name}
      </Col>
      <Col span={12} className={styles.fieldActions}>
        <Button
          htmlType="button"
          onClick={() => onEdit(key)}
          className={styles.editButton}
        >
          <PenIcon />
          ویرایش
        </Button>
        <Button
          htmlType="button"
          onClick={() => onRemove(key)}
          className={styles.removeButton}
        >
          <TrashIcon />
          حذف
        </Button>
      </Col>
    </Row>
  );
}

export default CreatedField;
