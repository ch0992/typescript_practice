import { sendEmail, sendSMS } from "../test_src/messageService";

export const register = user => {
  const message = "회원 가입을 환영합니다";
  sendEmail(user.email, message);
  sendSMS(user.phone, message);
};

export const deregiester = user => {
  const message = "탈퇴 처리 되었습니다.";
  sendEmail(user.email, message);
  sendSMS(user.phone, message);
};
