import { useCallback } from "react";
import emailJs from "emailjs-com";

type EmailProps<T> = {
  from_name: string;
  message_html: T;
};

export function useEmail<T>() {
  const sendEmail = useCallback(async (templateParams: EmailProps<T>) => {
    try {
      const result = await emailJs.send(
        "gmail",
        "spbts_pre_admission_form",
        templateParams,
        "user_OMAPKmRxKapTHZnqgQluD"
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return sendEmail;
}
