import { useCallback } from "react";
import emailJs from "emailjs-com";

export function useEmail<T>(templateID: string) {
  const sendEmail = useCallback(
    async (templateParams: T) => {
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
