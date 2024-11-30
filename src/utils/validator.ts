export const minValidation = (num: number): string => {
  return `مقدار کاراکتر ها نمی تواند از  ${num} کمتر باشد.`;
};

export const maxValidation = (num: number): string => {
  return `مقدار کاراکتر ها نمی تواند از  ${num} بیشتر باشد.`;
};

export const requiredValidation = (): string => {
  return "این فیلد الزامی است.";
};

// export const nationalCodeValidation = (nationalCode: string): string => {
//   if (nationalCode.length === 8 || nationalCode.length === 9) {
//     while (nationalCode.length < 10) {
//       nationalCode = "0" + nationalCode;
//     }
//   }
//   if (nationalCode.length !== 10) {
//     {
//       return "کد ملی باید دقیقا 10 رقم باشد.";
//     }
//   } else {
//     const controlChar: number = Number(nationalCode.slice(-1));
//     let isSame: boolean = true;

//     for (let i = 0; i < 9; i++) {
//       if (Number(nationalCode[i]) !== controlChar) {
//         isSame = false;
//         break;
//       }
//     }

//     if (isSame) {
//       return "کد ملی صحت ندارد.";
//     }

//     nationalCode = nationalCode.slice(0, -1);
//     let sum: number = 0;
//     for (let index = 0; index < 9; index++) {
//       sum += (10 - index) * Number(nationalCode[index]);
//     }

//     sum %= 11;

//     if (
//       (sum < 2 && controlChar === sum) ||
//       (sum >= 2 && controlChar === 11 - sum)
//     ) {
//       return "";
//     }

//     return "کد ملی صحت ندارد.";
//   }
// };
