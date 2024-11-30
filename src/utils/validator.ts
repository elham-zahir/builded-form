export const minValidation = (num: number): string => {
  return `مقدار کاراکتر ها نمی تواند از  ${num} کمتر باشد.`;
};

export const maxValidation = (num: number): string => {
  return `مقدار کاراکتر ها نمی تواند از  ${num} بیشتر باشد.`;
};

export const requiredValidation = (): string => {
  return "این فیلد الزامی است.";
};
