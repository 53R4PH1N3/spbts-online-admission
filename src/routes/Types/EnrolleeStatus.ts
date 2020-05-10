export type EnrolleeStatusProps = {
  typeOfStudent: string;

  semester?: string;

  schoolYear: {
    from: string;
    to: string;
  };

  lastSyFromYear?: string;
  lastSyToYear?: string;

  lastSchoolYearAttended?: {
    from?: string;
    to?: string;
  };

  desiredCourse?: string;
  educationLevel?: string;

  yearLevel?: string;
  gradeLevel?: string;

  schoolNameLastAttended?: string;
  section?: string;
};
