import { Button, Form, message, Tooltip, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useState } from "react";

interface IProps {
  name: string;
  label: string;
}

function ImageUploader({ name, label }: IProps) {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
    const isImage = /image\/(jpeg|png|gif|bmp|tiff|webp)/.test(
      newFileList[newFileList.length - 1].type
    );

    if (!isImage) {
      message.error("تنها می توانید عکس آپلود کنید.");
    } else {
      setFileList(newFileList);
    }
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    // onSuccess?.({}, file);
    onSuccess?.(message.success("فایل با موفقیت آپلود شد."));
  };

  return (
    <Form.Item label={label} name={name}>
      <Upload
        multiple={true}
        fileList={fileList}
        onChange={handleChange}
        showUploadList={{ showRemoveIcon: true }}
        maxCount={3}
        customRequest={customRequest}
      >
        <Tooltip
          title={
            fileList.length >= 3
              ? "حداکثر سه فایل می توانید اپلود کنید"
              : undefined
          }
        >
          <Button disabled={fileList.length >= 3}>Upload (Max 3 files)</Button>
        </Tooltip>
      </Upload>
    </Form.Item>
  );
}

export default ImageUploader;
