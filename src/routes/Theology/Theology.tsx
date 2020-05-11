import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  StyledTheology,
  StyledFormHeader,
  StyledTheologyContainer,
  StyledPersonalFieldWrapper,
  StyledEnrolleeFieldWrapper,
  StyledEducationalFieldWrapper,
  StyledTestimonyFieldWrapper,
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
  TextArea,
  Form,
  Checkbox,
  Modal,
} from "components";

import {
  EnrolleeStatusProps,
  PersonalProps,
  EducationalProps,
  TestimonyProps,
  PaymentProps,
} from "routes";
import SectionContainer from "./SectionContainer";
import PaymentInfo from "./PaymentInfo";
import { transformDate } from "utils";
import { useEmail } from "hooks";

type Props = {} & RouteComponentProps;

type CollegeTypes = EnrolleeStatusProps &
  PersonalProps &
  EducationalProps &
  TestimonyProps &
  PaymentProps;

const College: React.FC<Props> = () => {
  const sendEmail = useEmail<CollegeTypes>(
    "spbts_college_pre_admission_template"
  );

  const { register, errors, watch, setValue, handleSubmit } = useForm<
    CollegeTypes
  >();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [loading, setShowLoading] = useState(false);

  const [disabled, setDisabled] = useState(false);

  const onFormSubmit = async (data: CollegeTypes) => {
    setDisabled(true);
    setShowLoading(true);

    console.log(data);

    const birthDate = transformDate(data.birthDate);
    const dateBaptized = transformDate(data.dateBaptized);

    const newData = {
      ...data,
      birthDate,
      dateBaptized,
    };

    try {
      const response = await sendEmail(newData);

      if (response) {
        setTimeout(() => {
          setShowLoading(false);
          setShowSuccessModal(true);
          setDisabled(false);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isNewStudent =
    watch("typeOfStudent")?.toLocaleLowerCase() === "new student";

  const isCurrentStudent =
    watch("typeOfStudent")?.toLocaleLowerCase() === "current student";

  const isForeignerStudent =
    watch("typeOfStudent")?.toLocaleLowerCase() === "foreigner";

  const isMarried = watch("civilStatus")?.toLocaleLowerCase() === "married";

  const isMoneyTransfer =
    watch("paymentMethod")?.toLocaleLowerCase() === "money transfer";

  const isBankTransaction =
    watch("paymentMethod")?.toLocaleLowerCase() === "bank transaction";

  useEffect(() => {
    setValue("desiredCourse", "Bachelor of Arts In Theology");

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
        visible={loading}
        title="information"
        heading="Processing"
        subHeading="Please wait. Your information is being process."
        onClose={() => setShowLoading(false)}
      />

      <StyledTheologyContainer>
        <Form onSubmit={handleSubmit(onFormSubmit)} disabled={disabled}>
          <StyledFormHeader>
            <h1>Pre-Admission Form</h1>
            <p>Please fill all necessary information with all honesty.</p>
            <p>Please note, an asterisk(*) denotes a required field.</p>
          </StyledFormHeader>

          <SectionContainer heading="Enrollee Status">
            <StyledEnrolleeFieldWrapper>
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
                  label="Cross Enrollee"
                  name="typeOfStudent"
                  value="Cross Enrollee"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Foreigner"
                  name="typeOfStudent"
                  value="Foreigner"
                  ref={register({ required: true })}
                />
              </RadioWrapper>

              <RadioWrapper
                id="semester"
                heading="Semester"
                error={errors.semester && "Semester is Required!"}
              >
                <Radio
                  label="1st"
                  name="semester"
                  value="1st"
                  ref={register({ required: true })}
                />
                <Radio
                  label="2nd"
                  name="semester"
                  value="2nd"
                  ref={register({ required: true })}
                />
                <Radio
                  label="Summer"
                  name="semester"
                  value="Summer"
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
                heading="Desired Course"
                id="desired-course"
                columns="repeat(6, 1fr)"
              >
                <Input
                  label="Course Name"
                  id="course-name"
                  name="desiredCourse"
                  ref={register({ required: true })}
                  readOnly
                />
                <Input
                  type="number"
                  id="year-level"
                  label="Year Level"
                  name="yearLevel"
                  ref={register({ required: true })}
                  error={errors.yearLevel && "year level is required"}
                />
                <Input
                  label="Name of School Last S.Y. Attended"
                  id="school-last-attended"
                  name="schoolNameLastAttended"
                  required={false}
                  ref={register}
                />
              </InputWrapper>
            </StyledEnrolleeFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Personal Information">
            <StyledPersonalFieldWrapper>
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
                heading="Gender & Status"
                id="gender-status"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="gender"
                  placeholder="Male / Female"
                  name="gender"
                  ref={register({ required: true })}
                  error={errors.gender && "gender is required"}
                />
                <Input
                  label="civil status"
                  name="civilStatus"
                  ref={register({ required: true })}
                  error={errors.civilStatus && "gender is required"}
                />

                {isMarried && (
                  <Input
                    label="Spouse Name"
                    placeholder="Complete Name"
                    id="spouse-name"
                    name="spouseName"
                    ref={register({ required: isMarried })}
                    error={errors.spouseName && "spouse name is required"}
                  />
                )}
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
                heading="Nationality"
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
                  placeholder="Ex. Southern Baptist / Etc.."
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
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={
                    errors.emailAddress && `${errors.emailAddress.message}`
                  }
                />
                <Input
                  type="facebook"
                  label="facebook account"
                  id="facebook-account"
                  name="facebookAccount"
                  ref={register({ required: true })}
                  error={
                    errors.facebookAccount && "facebook account is required"
                  }
                />
                <Input
                  label={
                    isForeignerStudent ? "philippine address" : "home address"
                  }
                  id="home-address"
                  name="homeAddress"
                  ref={register({ required: true })}
                  error={
                    (errors.homeAddress &&
                      isForeignerStudent &&
                      "philippine Address is required") ||
                    (errors.homeAddress &&
                      !isForeignerStudent &&
                      "home Address is required") ||
                    ""
                  }
                />

                {isForeignerStudent && (
                  <Input
                    label="home country address"
                    id="home-country-address"
                    name="homeCountryAddress"
                    ref={register({ required: true })}
                    error={
                      errors.homeCountryAddress &&
                      "home Country Address is required"
                    }
                  />
                )}
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
                heading={
                  <>
                    Person Supporting You <span>( Other than parents )</span>
                  </>
                }
                id="person-supporting"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="complete name"
                  id="other-supporter-name"
                  name="otherPersonSupport.completeName"
                  required={false}
                  ref={register}
                />
                <Input
                  label="occupation"
                  id="other-supporter-occupation"
                  name="otherPersonSupport.occupation"
                  required={false}
                  ref={register}
                />
                <Input
                  label="address"
                  id="other-supporter-address"
                  name="otherPersonSupport.address"
                  required={false}
                  ref={register}
                />
                <Input
                  label="relationship"
                  id="other-supporter-relationship"
                  name="otherPersonSupport.relationship"
                  required={false}
                  ref={register}
                />
              </InputWrapper>

              <InputWrapper
                heading="Church Information"
                id="church-information"
                columns="repeat(6, 1fr)"
              >
                <Input
                  label="church name"
                  id="church-name"
                  name="churchName"
                  ref={register({ required: true })}
                  error={errors.churchName && "church name is required"}
                />
                <Input
                  type="date"
                  label="date baptized"
                  id="date-baptized"
                  name="dateBaptized"
                  ref={register({ required: true })}
                  error={errors.dateBaptized && "date baptized is required"}
                />
                <Input
                  label="church address"
                  id="church-address"
                  name="churchAddress"
                  ref={register({ required: true })}
                  error={errors.churchAddress && "church address is required"}
                />
                <Input
                  label="association"
                  id="association"
                  name="association"
                  required={false}
                  ref={register}
                />
                <Input
                  label="church pastor name"
                  placeholder="church pastor complete name"
                  id="church-pastor"
                  name="churchPastorName"
                  ref={register({ required: true })}
                  error={errors.churchPastorName && "pastor name is required"}
                />
                <Input
                  type="number"
                  label="pastor contact number"
                  placeholder="contact number"
                  id="church-pastor-contact-number"
                  name="churchPastorContactNumber"
                  required={false}
                  ref={register}
                />
              </InputWrapper>
            </StyledPersonalFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Educational Background">
            <StyledEducationalFieldWrapper>
              <InputWrapper
                heading="elementary"
                id="elementary"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="school name"
                  id="elementary-school-name"
                  name="elementarySchoolName"
                  ref={register({ required: true })}
                  error={
                    errors.elementarySchoolName && "school name is required"
                  }
                />
                <Input
                  type="number"
                  label="year graduated"
                  id="elementary-year-graduated"
                  name="elementaryYearGraduated"
                  ref={register({ required: true })}
                  error={
                    errors.elementaryYearGraduated &&
                    "year graduated is required"
                  }
                />
              </InputWrapper>

              <InputWrapper
                heading="junior high school"
                id="junior-high-school"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="school name"
                  id="jh-school-name"
                  name="jhSchoolName"
                  ref={register({ required: true })}
                  error={errors.jhSchoolName && "school name is required"}
                />
                <Input
                  type="number"
                  label="year graduated"
                  id="jh-year-graduated"
                  name="jhYearGraduated"
                  ref={register({ required: true })}
                  error={errors.jhYearGraduated && "year graduated is required"}
                />
              </InputWrapper>

              <InputWrapper
                heading="senior high school"
                id="senior-high-school"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="school name"
                  id="sh-school-name"
                  name="shSchoolName"
                  ref={register({ required: isNewStudent })}
                  error={errors.shSchoolName && "school name is required"}
                  required={isNewStudent}
                />
                <Input
                  type="number"
                  label="year graduated"
                  id="sh-year-graduated"
                  name="shYearGraduated"
                  ref={register({ required: isNewStudent })}
                  error={errors.shYearGraduated && "year graduated is required"}
                  required={isNewStudent}
                />
              </InputWrapper>

              <InputWrapper
                heading="college last attended"
                id="college-attended"
                columns="repeat(3, 1fr)"
              >
                <Input
                  label="school name"
                  id="college-school-name"
                  name="collegeSchoolName"
                  required={false}
                  ref={register}
                />
                <Input
                  label="course taken"
                  id="college-course-taken"
                  name="collegeCourseTaken"
                  required={false}
                  ref={register}
                />
                <Input
                  type="number"
                  label="year graduated"
                  id="college-year-graduated"
                  name="collegeYearGraduated"
                  required={false}
                  ref={register}
                />
              </InputWrapper>

              <InputWrapper
                heading="special skills & abilities"
                id="special-skills"
              >
                <Input
                  label="skills / abilities"
                  placeholder="please specify"
                  id="special-skills"
                  name="specialSkills"
                  ref={register}
                  required={false}
                />
              </InputWrapper>
            </StyledEducationalFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Spiritual Autobiography">
            <StyledTestimonyFieldWrapper>
              <TextArea
                label="understanding of the gospel"
                placeholder="my understanding of the gospel"
                id="understanding-of-gospel"
                name="understandingOfGospel"
                ref={register({ required: true })}
                error={
                  errors.understandingOfGospel &&
                  "understanding of the gospel fill is required"
                }
              />
              <TextArea
                label="Salvation Testimony"
                placeholder="my conversion and spiritual growth"
                id="salvation-testimony"
                name="salvationTestimony"
                ref={register({ required: true })}
                error={
                  errors.salvationTestimony && "salvation testimony is required"
                }
              />
              <TextArea
                label="Calling & Purpose for Enrolling in SPBTS"
                placeholder="my call to ministry and reason for enrolling in SPBTS"
                id="purpose-of-enrolling"
                name="purposeOfEnrolling"
                ref={register({ required: true })}
                error={
                  errors.purposeOfEnrolling &&
                  "purpose of enrolling is required"
                }
              />
            </StyledTestimonyFieldWrapper>
          </SectionContainer>

          <SectionContainer heading="Payment Information">
            <PaymentInfo isCurrentStudent={isCurrentStudent} />

            {isCurrentStudent && (
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
            )}

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
                    label="Palawan Pawnshop"
                    name="paymentService"
                    value="Palawan Pawnshop"
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
                    value="LAND BANK OF THE PHILIPPINES"
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

            {isCurrentStudent && (
              <StyledPaymentMoneyTransfer>
                <p>
                  As proof of payment, please send a photo of the receipt to our
                  Finance Officer to any of the following:
                  <span>FB Messenger: Ciena Tenecio</span>
                  <span>E-mail: ciena_tenecio@yahoo.com</span>
                </p>
              </StyledPaymentMoneyTransfer>
            )}
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

export default College;
