import {
  Form,
  message,
  Tooltip,
  Upload,
  Button,
  Popconfirm,
  PopconfirmProps,
  Modal,
} from "antd";
import { useState } from "react";
import { IUploaderProps } from "../../types/types";
import { requiredValidation } from "../../utils/validator";
import React from "react";
import UploadIcon from "../../icons/UploadIcon";
import styles from "./index.module.scss";
import TrashIcon from "../../icons/RemoveIcon";
import PdfIcon from "../../icons/PdfFile";
import PowerpointIcon from "../../icons/Powerpoint";
import ExcelIcon from "../../icons/Excel";
import NotepadIcon from "../../icons/Notepad";

const { Dragger } = Upload;

function FileUploader({
  name,
  label,
  max = 3,
  required,
  pattern,
  patternErrorMessage,
  accept,
}: IUploaderProps) {
  const [fileList, setFileList] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

  const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
    if (fileList.length <= newFileList.length) {
      if (pattern) {
        const isValidFile = pattern
          // || /image\/(jpeg|png|gif|bmp|tiff|webp)/
          ?.test(newFileList[newFileList.length - 1]?.type);
        if (!isValidFile) {
          message.error(
            patternErrorMessage || "فرمت فایل مورد پذیرش نمی باشد."
          );
        }
      } else {
        setFileList(newFileList);
      }
    }
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    onSuccess?.(message.success("فایل با موفقیت آپلود شد."));
  };

  const handleRemove = (file: any) => {
    const newFileList = fileList.filter((f) => f.uid !== file.uid);
    setFileList(newFileList);
  };

  const confirm: PopconfirmProps["onConfirm"] = (file) => {
    message.success("Click on Yes");
    handleRemove(file);
  };

  const handleImageClick = (imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setCurrentImageUrl("");
  };

  const renderFilePreview = (file: any) => {
    const imageUrl = file.originFileObj
      ? URL.createObjectURL(file.originFileObj)
      : "";
    if (file.type.startsWith("image/")) {
      return imageUrl ? (
        <img
          src={imageUrl}
          alt={file.name}
          onClick={() => handleImageClick(imageUrl)}
        />
      ) : (
        <p>نمایش عکس امکان پذیر نمی باشد.</p>
      );
    }

    switch (file.type) {
      case "application/pdf":
        return (
          <PdfIcon
            onClick={() =>
              window.open(URL.createObjectURL(file.originFileObj), "_blank")
            }
          />
        );

      case "application/vnd.ms-powerpoint":
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return (
          <PowerpointIcon
            onClick={() =>
              window.open(URL.createObjectURL(file.originFileObj), "_blank")
            }
          />
        );

      case "application/vnd.ms-excel":
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return (
          <ExcelIcon
            onClick={() =>
              window.open(URL.createObjectURL(file.originFileObj), "_blank")
            }
          />
        );

      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":

      case "text/plain":
        return (
          <NotepadIcon
            onClick={() =>
              window.open(URL.createObjectURL(file.originFileObj), "_blank")
            }
          />
        );

      default:
        return <p>نمایش فایل امکان پذیر نمی باشد.</p>;
    }
  };

  return (
    <>
      <Form.Item
        label={
          <>
            {label}
            <span className="requirement">{required ? "(اجباری)" : ""}</span>
          </>
        }
        name={name}
        rules={[
          {
            required: required,
            message: requiredValidation(),
          },
        ]}
      >
        <Dragger
          disabled={fileList?.length >= max}
          multiple={true}
          fileList={fileList}
          onChange={handleChange}
          showUploadList={{
            showRemoveIcon: false,
            showPreviewIcon: false,
          }}
          maxCount={max}
          customRequest={customRequest}
          onRemove={handleRemove}
          accept={accept}
        >
          <Tooltip
            title={
              fileList.length >= max
                ? `حداکثر ${max} فایل می توانید آپلود کنید.`
                : undefined
            }
          >
            <UploadIcon />
            <p className="uploaderText">
              حداکثر {max} فایل می توانید آپلود کنید.
            </p>
          </Tooltip>
        </Dragger>

        <div className={styles.uploadedFiles}>
          {fileList.map((file: any) => {
            const imageUrl = file.originFileObj
              ? URL.createObjectURL(file.originFileObj)
              : "";

            return (
              <div key={file.uid} className={styles.file}>
                {renderFilePreview(file)}
                <Popconfirm
                  title="حذف فایل"
                  description="برای حذف این فایل مطمعن هستید؟"
                  onConfirm={() => confirm(file)}
                  okText="بله"
                  cancelText="خیر"
                >
                  <Button type="link" danger>
                    <TrashIcon />
                  </Button>
                </Popconfirm>
              </div>
            );
          })}
        </div>
      </Form.Item>
      <Modal
        visible={isModalVisible}
        footer={null}
        width={600}
        onCancel={handleModalClose}
        onClose={handleModalClose}
      >
        <img
          src={currentImageUrl}
          alt="Uploaded"
          className={styles.modalImage}
        />
      </Modal>
    </>
  );
}

export default FileUploader;
