export type EnrolleeStatusProps = {
  typeOfStudent: string;

  semester?: string;

  schoolYear: {
    from: string;
    to: string;
  };

  lastSyFromYear?: string;
  lastSyToYear?: string;

  desiredCourse?: string;
  educationLevel?: string;

  yearLevel?: string;
  gradeLevel?: string;

  academicTrack?: string;

  schoolNameLastAttended?: string;
  section?: string;
};
