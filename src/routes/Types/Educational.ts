export type EducationalProps = {
  elementarySchoolName?: string;
  elementaryYearGraduated?: string;

  jhSchoolName?: string;
  jhYearGraduated?: string;

  shSchoolName?: string;
  shYearGraduated?: string;

  collegeSchoolName?: string;
  collegeCourseTaken?: string;
  collegeYearGraduated?: string;

  specialSkills?: string;

  authorizedPerson1Name?: string;
  authorizedPerson1Relationship?: string;
  authorizedPerson2Name?: string;
  authorizedPerson2Relationship?: string;

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

  authorizedPersons?: {
    person1Name?: string;
    person1Relationship?: string;
    person2Name?: string;
    person2Relationship?: string;
  };
};
