const SIGNIN = "apiData/SIGNIN";

export const signin = (email, password) => {
  return {
    type: SIGNIN,
    email: email,
    password: password,
  };
};

export default function apiData(state = action) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, email: action.email, password: action.password };
  }
}
