import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  StyledTheology,
  StyledFormHeader,
  StyledTheologyContainer,
  StyledBasicEdPersonalFieldWrapper,
  StyledBasicEdFieldWrapper,
  StyledBasicEdEducationalFieldWrapper,
  StyledTheologyCheckboxWrapper,
  StyledTheologyCheckboxError,
  StyledPaymentMoneyTransfer,
} from "styles";
import {
  Navigation,
  InputWrapper,
  Input,
  RadioWrapper,
  Radio,
  Form,
  Checkbox,
  Modal,
} from "components";

import {
  EnrolleeStatusProps,
  PersonalProps,
  EducationalProps,
  TestimonyProps,
  SectionContainer,
  PaymentProps,
  PaymentInfo,
} from "routes";
import { useEmail } from "hooks";

type Props = {} & RouteComponentProps;

type BasicEdTypes = EnrolleeStatusProps &
  PersonalProps &
  EducationalProps &
  TestimonyProps &
  PaymentProps;

const Elementary: React.FC<Props> = () => {
  const sendEmail = useEmail("spbts_pre_admission_template");

  const { register, errors, watch, setValue, handleSubmit } = useForm<
    BasicEdTypes
  >();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [showLoadingModal, setShowLoading] = useState(false);

  const onFormSubmit = async (data: BasicEdTypes) => {
    console.log(data);
    try {
      const response = sendEmail({
        from_name: data.emailAddress,
        message_html: data.firstName,
      });

      setShowLoading(true);

      if (response) {
        setTimeout(() => {
          setShowLoading(false);
          setShowSuccessModal(true);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isMoneyTransfer =
    watch("paymentMethod")?.toLocaleLowerCase() === "money transfer";

  const isBankTransaction =
    watch("paymentMethod")?.toLocaleLowerCase() === "bank transaction";

  useEffect(() => {
    setValue("educationLevel", "Elementary");

    if (isMoneyTransfer) {
      setValue("paymentBank", "");
    } else {
      setValue("paymentService", "");
    }
  }, [isMoneyTransfer, setValue]);

  return (
    <StyledTheology>
      <Navigation />

      <Modal
        type="success"
        visible={showSuccessModal}
        title="success"
        heading="Submitted Successfully"
        subHeading="Your form has been successfully submitted."
        onClose={() => setShowSuccessModal(false)}
      />

      <Modal
        type="info"
        visible={showLoadingModal}
        title="information"
        heading="Processing"
        subHeading="Please wait. Your information is being process."
        onClose={() => setShowLoading(false)}
      />

      <StyledTheologyContainer>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <StyledFormHeader>
            <h1>Admission Form</h1>
            <p>Please fill all necessary information with with all honesty.</p>
            <p>Please note, an asterisk(*) denotes a required field.</p>
          </StyledFormHeader>

          <SectionContainer heading="Enrollee Status">
            <StyledBasicEdFieldWrapper>
              <RadioWrapper
                id="type-of-student"
                heading="What student type are you?"
                error={errors.typeOfStudent && "Student Types is Required!"}
              >
                <Radio
                  label="New Student"
                  name="typeOfStudent"
                  value="New Student"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Current Student"
                  name="typeOfStudent"
                  value="Current Student"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Transferee"
                  name="typeOfStudent"
                  value="Transferee"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Returning Student"
                  name="typeOfStudent"
                  value="Returning Student"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Foreigner"
                  name="typeOfStudent"
                  value="Foreigner"
                  ref={register({ required: true })}
                />
              </RadioWrapper>

              <InputWrapper
                heading="School Year"
                id="school-year"
                columns="repeat(2, 1fr)"
              >
                <Input
                  type="number"
                  label="From"
                  placeholder="year"
                  id="from-year"
                  name="schoolYear.from"
                  ref={register({ required: true })}
                  error={errors.schoolYear?.from && "from year is required"}
                />
                <Input
                  type="number"
                  label="To"
                  placeholder="year"
                  id="to-year"
                  name="schoolYear.to"
                  ref={register({ required: true })}
                  error={errors.schoolYear?.to && "to year is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Last School Year Attended"
                id="last-school-year"
                columns="repeat(2, 1fr)"
              >
                <Input
                  type="number"
                  label="From"
                  placeholder="year"
                  id="last-from-year"
                  name="lastSyFromYear"
                  ref={register({ required: true })}
                  error={errors.lastSyFromYear && "This field is required"}
                />
                <Input
                  type="number"
                  label="To"
                  placeholder="year"
                  id="last-to-year"
                  name="lastSyToYear"
                  ref={register({ required: true })}
                  error={errors.lastSyToYear && "This field is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Current Education"
                id="desired-course"
                columns="repeat(6, 1fr)"
              >
                <Input
                  label="Education Level"
                  id="course-name"
                  name="educationLevel"
                  ref={register({ required: true })}
                  error={errors.educationLevel && "education level is required"}
                  readOnly
                />
                <Input
                  type="number"
                  id="grade-level"
                  label="grade level"
                  name="gradeLevel"
                  ref={register({ required: true })}
                  error={errors.gradeLevel && "grade level is required"}
                />
                <Input
                  label="Section"
                  id="section"
                  name="section"
                  ref={register({ required: true })}
                  error={errors.section && "section is required"}
                />
              </InputWrapper>
            </StyledBasicEdFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Personal Information">
            <StyledBasicEdPersonalFieldWrapper>
              <InputWrapper
                heading="Full Name"
                id="full-name"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="First Name"
                  id="first-name"
                  name="firstName"
                  ref={register({ required: true })}
                  error={errors.firstName && "first name is required"}
                />
                <Input
                  label="Last Name"
                  id="last-name"
                  name="lastName"
                  ref={register({ required: true })}
                  error={errors.lastName && "last name is required"}
                />
                <Input
                  label="Middle Name"
                  id="middle-name"
                  name="middleName"
                  ref={register({ required: true })}
                  error={errors.middleName && "middle name is required"}
                />
                <Input
                  label="Suffix"
                  placeholder="Ex. Jr / Sr"
                  id="suffix"
                  required={false}
                  name="suffix"
                  ref={register}
                />
              </InputWrapper>

              <InputWrapper
                heading="Gender"
                id="gender-status"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="gender"
                  name="gender"
                  ref={register({ required: true })}
                  error={errors.gender && "gender is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Birth Information"
                id="birth-info"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="birth place"
                  id="birth-place"
                  name="birthPlace"
                  ref={register({ required: true })}
                  error={errors.birthPlace && "birth place is required"}
                />
                <Input
                  type="date"
                  label="birth date"
                  id="birth-date"
                  name="birthDate"
                  ref={register({ required: true })}
                  error={errors.birthDate && "birth date is required"}
                />
                <Input
                  type="number"
                  label="age"
                  id="age"
                  name="age"
                  ref={register({ required: true })}
                  error={errors.age && "age is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Nationalism"
                id="nationalism"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="nationality"
                  id="nationality"
                  name="nationality"
                  ref={register({ required: true })}
                  error={errors.nationality && "nationality is required"}
                />
                <Input
                  label="dialect"
                  id="dialect"
                  name="dialect"
                  ref={register({ required: true })}
                  error={errors.dialect && "dialect is required"}
                />
                <Input
                  label="ethnic affiliation"
                  placeholder="Ex. Cebuano / etc."
                  id="ethnic"
                  name="ethnicAffiliation"
                  ref={register({ required: true })}
                  error={
                    errors.ethnicAffiliation && "ethnicAffiliation is required"
                  }
                />
                <Input
                  label="religion"
                  placeholder="religion"
                  id="religion"
                  name="religion"
                  ref={register({ required: true })}
                  error={errors.religion && "religion is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Contact Information"
                id="contact-information"
                columns="repeat(3, 1fr)"
              >
                <Input
                  type="number"
                  label="contact number"
                  id="contact-number"
                  name="contactNumber"
                  ref={register({ required: true })}
                  error={errors.contactNumber && "contactNumber is required"}
                />
                <Input
                  type="email"
                  label="email address"
                  id="email"
                  name="emailAddress"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  })}
                  error={errors.emailAddress && "email address is required"}
                />
                <Input
                  label="facebook account"
                  id="facebook-account"
                  name="facebookAccount"
                  ref={register({ required: true })}
                  error={
                    errors.facebookAccount && "facebook account is required"
                  }
                />
                <Input
                  label="home address"
                  id="home-address"
                  name="homeAddress"
                  ref={register({ required: true })}
                  error={errors.homeAddress && "homeAddress is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="Parent's / Family Annual Income"
                id="parents-income"
                columns="repeat(2, 1fr)"
              >
                <Input
                  label="Annual Income"
                  id="parents-annual-income"
                  name="parentsAnnualIncome.annualIncome"
                  ref={register({ required: true })}
                  error={
                    errors.parentsAnnualIncome?.annualIncome &&
                    "annual income is required"
                  }
                />
                <Input
                  label="Other Income"
                  placeholder="please specify"
                  id="parents-other-income"
                  name="parentsAnnualIncome.otherIncome"
                  ref={register}
                  required={false}
                />
              </InputWrapper>

              <InputWrapper
                heading="Parent's Information"
                id="parent-information"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="father's name"
                  placeholder="father's complete name"
                  id="fathers-name"
                  name="parentsInfo.fathersName"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.fathersName &&
                    "father's name is required"
                  }
                />
                <Input
                  label="occupation"
                  placeholder="occupation"
                  id="fathers-occupation"
                  name="parentsInfo.fathersOccupation"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.fathersOccupation &&
                    "occupation is required"
                  }
                />
                <Input
                  label="mother's name"
                  placeholder="mother's complete name"
                  id="mothers-name"
                  name="parentsInfo.mothersName"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.mothersName &&
                    "mother's name is required"
                  }
                />
                <Input
                  label="occupation"
                  placeholder="occupation"
                  id="mothers-occupation"
                  name="parentsInfo.mothersOccupation"
                  ref={register({ required: true })}
                  error={
                    errors.parentsInfo?.mothersOccupation &&
                    "occupation is required"
                  }
                />
              </InputWrapper>

              <InputWrapper
                heading="Scholarship Information"
                id="scholarship-info"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="scholarship"
                  id="scholarship"
                  name="scholarship"
                  ref={register({ required: true })}
                  error={errors.scholarship && "scholarship is required"}
                />
                <Input
                  label="amount"
                  id="amount"
                  name="scholarshipAmmout"
                  ref={register({ required: true })}
                  error={
                    errors.scholarshipAmmout &&
                    "scholarship ammount is required"
                  }
                />
              </InputWrapper>
            </StyledBasicEdPersonalFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Educational Background">
            <StyledBasicEdEducationalFieldWrapper>
              <InputWrapper
                heading="Authorized person/s to have an access on your school records"
                id="authorized-persons"
                columns="repeat(6, 1fr)"
              >
                <Input
                  label="complete name"
                  id="authorized-person-name-1"
                  name="authorizedPerson1Name"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson1Name && "this field is required"
                  }
                />
                <Input
                  label="relationship"
                  id="authorized-person-relationship-1"
                  name="authorizedPerson1Relationship"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson1Relationship &&
                    "this field is required"
                  }
                />
                <Input
                  label="complete name"
                  id="authorized-person-name-2"
                  name="authorizedPerson2Name"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson2Name && "this field is required"
                  }
                />
                <Input
                  label="relationship"
                  id="authorized-person-relationship-2"
                  name="authorizedPerson2Relationship"
                  ref={register({ required: true })}
                  error={
                    errors.authorizedPerson2Relationship &&
                    "this field is required"
                  }
                />
              </InputWrapper>
            </StyledBasicEdEducationalFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Payment Information">
            <PaymentInfo />

            <RadioWrapper
              heading="select payment method"
              id="payment-method"
              error={
                errors.paymentMethod &&
                "payment method is required! you need to select one."
              }
            >
              <Radio
                label="Money transfer"
                value="Money Transfer"
                name="paymentMethod"
                ref={register({ required: true })}
              />
              <Radio
                label="Bank Transaction"
                value="Bank Transaction"
                name="paymentMethod"
                ref={register({ required: true })}
              />
            </RadioWrapper>

            {isMoneyTransfer && (
              <React.Fragment>
                <StyledPaymentMoneyTransfer>
                  <p>
                    Send your payment to the SPBTS Finance Officer:
                    <span>MARIA CIENA B. TENECIO</span>
                    <span>09190083163</span>
                    <span>Davao City</span>
                  </p>
                </StyledPaymentMoneyTransfer>

                <RadioWrapper
                  heading="select service"
                  error={
                    errors.paymentService && "payment service is required!"
                  }
                >
                  <Radio
                    label="Palawan Pawnship"
                    name="paymentService"
                    value="Palawan Pawnship"
                    ref={register({ required: true })}
                  />
                  <Radio
                    label="RD Pawnshop"
                    name="paymentService"
                    value="RD Pawnshop"
                    ref={register({ required: true })}
                  />
                  <Radio
                    label="M Lhuillier"
                    name="paymentService"
                    value="M Lhuillier"
                    ref={register({ required: true })}
                  />
                </RadioWrapper>
              </React.Fragment>
            )}

            {isBankTransaction && (
              <React.Fragment>
                <StyledPaymentMoneyTransfer>
                  <p>
                    You may send your payment to any of the following SPBTS Bank
                    Accounts:
                    <span>SPBTS</span>
                    <span>BPI</span>
                    <span>9431 0059 61</span>
                  </p>

                  <p>
                    <br />
                    <span>SPBTS</span>
                    <span>LAND BANK OF THE PHILIPPINES</span>
                    <span>2981 0856 23</span>
                  </p>

                  <p>
                    <br />
                    <span>SPBTS</span>
                    <span>METROBANK</span>
                    <span>547 3 547053606</span>
                  </p>
                </StyledPaymentMoneyTransfer>

                <RadioWrapper
                  heading="select bank"
                  error={errors.paymentBank && "payment bank is required!"}
                >
                  <Radio
                    label="BPI"
                    name="paymentBank"
                    value="BPI"
                    ref={register({ required: true })}
                  />
                  <Radio
                    label="LAND BANK OF THE PHILIPPINES"
                    name="paymentBank"
                    value="LAND_BANK"
                    ref={register({ required: true })}
                  />
                  <Radio
                    label="METROBANK"
                    name="paymentBank"
                    value="METROBANK"
                    ref={register({ required: true })}
                  />
                </RadioWrapper>
              </React.Fragment>
            )}

            <StyledPaymentMoneyTransfer>
              <p>
                As proof of payment, please send a photo of the receipt to our
                Finance Officer to any of the following:
                <span>FB Messenger: Ciena Tenecio</span>
                <span>E-mail: ciena_tenecio@yahoo.com</span>
              </p>
            </StyledPaymentMoneyTransfer>
          </SectionContainer>

          <StyledTheologyCheckboxWrapper
            error={errors.certifyTrue ? true : false}
          >
            <Checkbox
              label="I certify that all information stated and written above are true and correct. With my consent, I agree that the information and data provided will be used only for whatever legal purposes, do hereby promulgated. [ Section 16 R.A. 10173, known as Data Privacy Act of 2012 ]."
              id="certify"
              containerId="certify-checkbox"
              name="certifyTrue"
              ref={register({ required: true })}
            />
            {errors.certifyTrue && (
              <StyledTheologyCheckboxError>
                This field is required!
              </StyledTheologyCheckboxError>
            )}
          </StyledTheologyCheckboxWrapper>
        </Form>
      </StyledTheologyContainer>
    </StyledTheology>
  );
};

export default Elementary;
