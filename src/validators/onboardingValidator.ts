export const validateAge = (age: string): boolean => {
  const regex = new RegExp('^[0-9]*$');
  return regex.test(age);
};
export const validateUsername = (name: string): boolean => name.length > 2;
