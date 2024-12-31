import { Button, Form, message, Tooltip, Upload } from "antd";
import React, { useState } from "react";
import { IUploaderProps } from "../../types/types";
import UploadIcon from "../../icons/UploadIcon";
import { requiredValidation } from "../../utils/validator";

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

  const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
    const isValidFileType = (
      pattern || /(\.pdf|\.docx|\.xlsx|\.txt|\.ppt|\.pptx)$/i
    )?.test(newFileList[newFileList.length - 1]?.name);

    if (!isValidFileType) {
      message.error(
        patternErrorMessage ||
          "تنها می توانید فایل های pdf, word, excel, power point و note pad آپلود کنید."
      );
    } else {
      setFileList(newFileList);
    }
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    // onSuccess?.({}, file);
    onSuccess?.(message.success("فایل با موفقیت آپلود شد."));
  };

  const handleRemove = (file: any) => {
    const newFileList = fileList.filter((f) => f.uid !== file.uid);
    setFileList(newFileList);
  };

  return (
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
        showUploadList={{ showRemoveIcon: true }}
        maxCount={max}
        customRequest={customRequest}
        onRemove={handleRemove}
        accept={accept}
      >
        <Tooltip
          title={
            fileList.length >= max
              ? `حداکثر ${max}  فایل می توانید آپلود کنید.`
              : undefined
          }
        >
          <UploadIcon />
          <p className="uploaderText">
            حداکثر {max} فایل می توانید آپلود کنید.
          </p>
        </Tooltip>
      </Dragger>
    </Form.Item>
  );
}

export default FileUploader;
