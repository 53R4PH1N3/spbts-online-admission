import React from "react";
import { StyledPaymentWrapper, StyledPaymentInstructions } from "styles";

type Props = {
  isCurrentStudent?: boolean;
};

const PaymentInfo: React.FC<Props> = ({ isCurrentStudent }) => {
  return (
    <StyledPaymentWrapper>
      <h3>
        Enrollment Fee: <span>2,500 Pesos</span>
      </h3>
      {isCurrentStudent ? (
        <p>
          You will be notified OFFICIALLY ENROLLED through Text, E-mail or
          Messenger by the school upon receiving your payment.
        </p>
      ) : (
        <React.Fragment>
          <p>
            You will be notified of the payment option details upon approval of
            your application.
          </p>
          <StyledPaymentInstructions>
            <h4>ONLINE INTERVIEW</h4>
            <p>
              The schedule will be given by the SPBTS OSA Dean through Text,
              Messenger or E-mail.
            </p>
            <p>Please prepare the following for the online interview:</p>

            <p>
              <span>1. Stable internet connection</span>
            </p>
            <p>
              <span>2. Headset</span>
            </p>
            <p>
              <span>3. Smart Phone or Laptop</span>
            </p>
            <p>
              <span>4. Zoom App or FB Messenger</span>
            </p>
          </StyledPaymentInstructions>
        </React.Fragment>
      )}
    </StyledPaymentWrapper>
  );
};

PaymentInfo.defaultProps = {
  isCurrentStudent: true,
};

export default React.memo(PaymentInfo);
