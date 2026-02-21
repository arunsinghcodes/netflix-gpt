export const checkValidData = (email, password) => {
  // required checks first
  if (!email) return "Email is required";
  if (!password) return "Password is required";

  // format checks next
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password,
  );

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid)
    return "Password must be 8 chars, include A-Z, a-z & number";

  return null;
};
