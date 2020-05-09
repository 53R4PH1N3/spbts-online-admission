export type EducationalProps = {
  elementary?: {
    schoolName?: string;
    yearGraduated?: string;
  };

  jhSchool?: {
    schoolName?: string;
    yearGraduated?: string;
  };

  shSchool?: {
    schoolName?: string;
    yearGraduated?: string;
  };

  college?: {
    schoolName?: string;
    courseTaken?: string;
    yearGraduated?: string;
  };

  specialSkills?: string;

  authorizedPersons?: {
    person1Name?: string;
    person1Relationship?: string;
    person2Name?: string;
    person2Relationship?: string;
  };
};
