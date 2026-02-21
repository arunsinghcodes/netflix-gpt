export const checkValidData = (name, email, password, isSignInForm) => {
  // Name validation only for signup
  if (!isSignInForm) {
    if (!name) return "Full name is required";

    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
    if (!isNameValid) return "Enter a valid name";
  }

  // email required
  if (!email) return "Email is required";

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );

  if (!isEmailValid) return "Email Id is not valid";

  // password required
  if (!password) return "Password is required";

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password,
  );

  if (!isPasswordValid)
    return "Password must be 8 chars, include uppercase, lowercase & number";

  return null;
};
