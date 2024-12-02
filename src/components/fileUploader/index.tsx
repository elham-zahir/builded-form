import { Button, Form, message, Tooltip, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useState } from "react";
import { IUploaderProps } from "../../types/types";
import { requiredValidation } from "../../utils/validator";

function FileUploader({ name, label, max = 3, required }: IUploaderProps) {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
    const isValidFileType = /(\.pdf|\.docx|\.xlsx|\.txt|\.ppt|\.pptx)$/i.test(
      newFileList[newFileList.length - 1]?.name
    );

    if (!isValidFileType) {
      message.error(
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

  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: requiredValidation(),
        },
      ]}
    >
      <Upload
        multiple={true}
        fileList={fileList}
        onChange={handleChange}
        showUploadList={{ showRemoveIcon: true }}
        maxCount={max}
        customRequest={customRequest}
        accept=".pdf, .docx, .xlsx, .txt, .ppt, .pptx"
      >
        <Tooltip
          title={
            fileList.length >= max
              ? `حداکثر  ${max} فایل می توانید آپلود کنید.`
              : undefined
          }
        >
          <Button disabled={fileList.length >= max}>
            Upload (Max {max} files)
          </Button>
        </Tooltip>
      </Upload>
    </Form.Item>
  );
}

export default FileUploader;
