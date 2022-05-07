import axios from "axios";
import { signin } from "./apiData";

export const loginUser = async (dispatch, email, pw) => {
  try {
    const authRes = await axios.post("http://localhost:3000", {
      key: {
        email: email,
        pw: pw,
      },
    });

    if (!authRes.data.result.coll) {
      console.log("회원이 없습니다");
      return;
    }

    const user_name = "값을 넣어야함";

    console.log("로그인 성공");
    await dispatch(signin(user_name));
  } catch (e) {
    console.log("회원 정보가 없습니다");
  }
};
