export type PersonalProps = {
  firstName: string;
  lastName: string;
  middleName: string;
  suffix?: string;

  gender: string;
  civilStatus?: string;
  spouseName?: string;

  birthPlace: string;
  birthDate: string;
  age: string;

  nationality: string;
  dialect: string;
  ethnicAffiliation: string;
  religion: string;

  contactNumber: string;
  emailAddress: string;
  facebookAccount: string;
  homeAddress: string;

  parentsAnnualIncome: {
    annualIncome: string;
    otherIncome: string;
  };

  parentsInfo: {
    fathersName: string;
    fathersOccupation: string;
    mothersName: string;
    mothersOccupation: string;
  };

  otherPersonSupport?: {
    completeName?: string;
    occupation?: string;
    address?: string;
    relationship?: string;
  };

  scholarship?: string;
  scholarshipAmmount?: string;

  churchName?: string;
  dateBaptized?: string;
  churchAddress?: string;
  association?: string;
  churchPastorName?: string;
  churchPastorContactNumber?: string;
};
