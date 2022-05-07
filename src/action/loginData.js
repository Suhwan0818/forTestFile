import axios from "axios";

export const signinUser = async (dispatch, email, password) => {
  try {
    const authRes = await axios.post("http://www.monito.ml:3000/signIn", {
      email: email,
      password: password,
    });
  } catch (e) {
    console.log("로그인 실패");
  }
};
