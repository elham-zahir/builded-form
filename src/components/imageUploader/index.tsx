import { Button, Form, message, Tooltip, Upload } from "antd";
import { useState } from "react";
import { IUploaderProps } from "../../types/types";
import { requiredValidation } from "../../utils/validator";

function ImageUploader({ name, label, max = 3, required }: IUploaderProps) {
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
    onSuccess?.(message.success("عکس با موفقیت آپلود شد."));
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
        {
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "لطفاً یک ایمیل معتبر وارد کنید.",
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
      >
        <Tooltip
          title={
            fileList.length >= max
              ? `حداکثر ${max}  عکس می توانید آپلود کنید.`
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

export default ImageUploader;
