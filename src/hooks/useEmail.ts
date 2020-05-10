import { useCallback } from "react";
import emailJs from "emailjs-com";

type EmailProps<T> = {
  from_name: string;
  message_html: T;
};

export function useEmail<T>(templateID: string) {
  const sendEmail = useCallback(
    async (templateParams: EmailProps<T>) => {
      try {
        const result = await emailJs.send(
          "gmail",
          templateID,
          templateParams,
          "user_OMAPKmRxKapTHZnqgQluD"
        );
        return result;
      } catch (error) {
        return error;
      }
    },
    [templateID]
  );

  return sendEmail;
}
