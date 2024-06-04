export const maxContent = (length: number, field: string) => {
  return `${field} should have max ${length} characters`;
};

export const minContent = (length: number, field: string) => {
  return `${field} should have min ${length} characters`;
};

export const requiredFiled = (field: string) => {
  return `${field} is required`;
};

export const regexExpression: {
  [x: string]: { pattern: RegExp; message: string };
} = {
  email: {
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Invalid email address",
  },
  phoneNumber: {
    pattern: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
    message: "Invalid phone number",
  },
  password: {
    // pattern: /^(?=.*[A-Za-z0-9!@#$&()\\-`.+,\/"])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&()\\-`.+,\/"])[\w\W]{10,50}$/,
    // message: 'Password must contain numbers, capital letters, and special characters (@, #, *, etc.) and be at least 10 characters long.',
    pattern: /^(?=.*[A-Za-z0-9!@#$&()\\-`.+,/"])[\w\W]{6,}$/,
    message: "Password must be at least 6",
  },
  url: {
    // pattern: /(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
    pattern:
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/,
    message: "Invalid URL",
  },
  text: {
    pattern: /^.{1,}$/,
    message: "Please fill this in",
  },
  name: {
    pattern: /^[A-Za-z ]*$/,
    message: "Please enter valid name",
  },
};
