export type EnrolleeStatusProps = {
  typeOfStudent: string;
  semester: string;
  schoolYear: {
    from: string;
    to: string;
  };
  desiredCourse: string;
  yearLevel: string;
  schoolNameLastAttended: string;
};
