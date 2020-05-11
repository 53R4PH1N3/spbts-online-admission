import emailJs from "emailjs-com";

export function useEmail<T>(templateID: string) {
  const sendEmail = async (templateParams: T) => {
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
  };

  return sendEmail;
}
