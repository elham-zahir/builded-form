// import { Form, message, Tooltip, Upload } from "antd";
// import { useState } from "react";
// import { IUploaderProps } from "../../types/types";
// import { requiredValidation } from "../../utils/validator";
// import React from "react";
// import UploadIcon from "../../icons/UploadIcon";

// const { Dragger } = Upload;

// function ImageUploader({
//   name,
//   label,
//   max = 3,
//   required,
//   pattern,
//   patternErrorMessage,
//   accept,
// }: IUploaderProps) {
//   const [fileList, setFileList] = useState<any[]>([]);

//   const handleChange = ({ fileList: newFileList }: { fileList: any[] }) => {
//     if (fileList.length <= newFileList.length) {
//       const isImage = (pattern || /image\/(jpeg|png|gif|bmp|tiff|webp)/)?.test(
//         newFileList[newFileList.length - 1]?.type
//       );

//       if (!isImage) {
//         message.error(patternErrorMessage || "تنها می توانید عکس آپلود کنید.");
//       } else {
//         setFileList(newFileList);
//       }
//     }
//   };

//   const customRequest = ({ file, onSuccess, onError }: any) => {
//     // onSuccess?.({}, file);
//     onSuccess?.(message.success("عکس با موفقیت آپلود شد."));
//   };

//   const handleRemove = (file: any) => {
//     const newFileList = fileList.filter((f) => f.uid !== file.uid);
//     setFileList(newFileList);
//   };

//   return (
//     <Form.Item
//       label={
//         <>
//           {label}
//           <span className="requirement">{required ? "(اجباری)" : ""}</span>
//         </>
//       }
//       name={name}
//       rules={[
//         {
//           required: required,
//           message: requiredValidation(),
//         },
//       ]}
//     >
//       <Dragger
//         // disabled={fileList?.length >= max}
//         // multiple={true}
//         // fileList={fileList}
//         // onChange={handleChange}
//         // showUploadList={{ showRemoveIcon: true }}
//         // maxCount={max}
//         // customRequest={customRequest}
//         // onRemove={handleRemove}
//         // accept={accept}
//         disabled={fileList?.length >= max}
//         multiple={true}
//         fileList={fileList}
//         onChange={handleChange}
//         showUploadList={{ showRemoveIcon: true }}
//         maxCount={max}
//         customRequest={customRequest}
//         onRemove={handleRemove}
//         accept={accept}
//       >
//         <Tooltip
//           title={
//             fileList.length >= max
//               ? `حداکثر ${max}  عکس می توانید آپلود کنید.`
//               : undefined
//           }
//         >
//           <UploadIcon />
//           <p className="uploaderText">حداکثر {max} عکس می توانید آپلود کنید.</p>
//         </Tooltip>
//       </Dragger>
//     </Form.Item>
//   );
// }

// export default ImageUploader;

import { Form, message, Tooltip, Upload } from "antd";
import { useState } from "react";
import { IUploaderProps } from "../../types/types";
import { requiredValidation } from "../../utils/validator";
import React from "react";
import UploadIcon from "../../icons/UploadIcon";

const { Dragger } = Upload;

function ImageUploader({
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
    if (fileList.length <= newFileList.length) {
      const isImage = (pattern || /image\/(jpeg|png|gif|bmp|tiff|webp)/)?.test(
        newFileList[newFileList.length - 1]?.type
      );

      if (!isImage) {
        message.error(patternErrorMessage || "تنها می توانید عکس آپلود کنید.");
      } else {
        setFileList(newFileList);
      }
    }
  };

  const customRequest = ({ file, onSuccess, onError }: any) => {
    // onSuccess?.({}, file);
    onSuccess?.(message.success("عکس با موفقیت آپلود شد."));
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
              ? `حداکثر ${max} عکس می توانید آپلود کنید.`
              : undefined
          }
        >
          <UploadIcon />
          <p className="uploaderText">حداکثر {max} عکس می توانید آپلود کنید.</p>
        </Tooltip>
      </Dragger>
    </Form.Item>
  );
}

export default ImageUploader;
