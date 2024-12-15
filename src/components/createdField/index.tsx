import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Popconfirm, Row } from "antd";
import PenIcon from "../../icons/PenIcon";
import TrashIcon from "../../icons/RemoveIcon";

interface IProps {
  name: string;
  index: number;
  onEdit: (key: number) => void;
  onRemove: (key: number) => void;
}

function CreatedField({ name, index, onEdit, onRemove }: IProps) {
  return (
    <Row className={styles.field}>
      <Col span={12} className={styles.fieldName}>
        {name}
      </Col>
      <Col span={12} className={styles.fieldActions}>
        <Button
          htmlType="button"
          onClick={() => {
            onEdit(index);
          }}
          className={styles.editButton}
        >
          <PenIcon />
          ویرایش
        </Button>
        <Popconfirm
          title="حذف آیتم"
          description="برای حذف این آیتم مطمعن هستید؟"
          onConfirm={() => onRemove(index)}
          okText="بله"
          cancelText="خیر"
        >
          <Button htmlType="button" className={styles.removeButton}>
            <TrashIcon />
            حذف
          </Button>
        </Popconfirm>
      </Col>
    </Row>
  );
}

export default CreatedField;
