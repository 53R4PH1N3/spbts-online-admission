(this["webpackJsonpspbts-online-admission"]=this["webpackJsonpspbts-online-admission"]||[]).push([[5],{69:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return E}));var t=r(5),n=r.n(t),l=r(16),i=r(9),o=r(4),c=r(0),m=r.n(c),d=r(31),u=r(3),s=r(2),h=r(14),f=r(24),p=r(25),E=function(){var e,a,r,t,E,b,y,q,g,v=Object(f.a)("spbts_basic_ed_admission_template"),S=Object(d.a)(),P=S.register,I=S.errors,N=S.watch,A=S.setValue,O=S.handleSubmit,T=Object(c.useState)(!1),k=Object(o.a)(T,2),B=k[0],w=k[1],L=Object(c.useState)(!1),F=Object(o.a)(L,2),C=F[0],M=F[1],Y=Object(c.useState)(!1),z=Object(o.a)(Y,2),R=z[0],j=z[1],D=function(){var e=Object(i.a)(n.a.mark((function e(a){var r,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),M(!0),console.log(a),r=Object(p.a)(a.birthDate),t=Object(l.a)({},a,{birthDate:r}),e.prev=5,e.next=8,v(t);case 8:e.sent&&setTimeout((function(){M(!1),w(!0),j(!1)}),3e3),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(a){return e.apply(this,arguments)}}(),x="money transfer"===(null===(e=N("paymentMethod"))||void 0===e?void 0:e.toLocaleLowerCase()),H="bank transaction"===(null===(a=N("paymentMethod"))||void 0===a?void 0:a.toLocaleLowerCase());return Object(c.useEffect)((function(){A("educationLevel","Junior High"),A(x?"paymentBank":"paymentService","")}),[x,A]),m.a.createElement(u.jb,null,m.a.createElement(s.f,null),m.a.createElement(s.e,{type:"success",visible:B,title:"success",heading:"Submitted Successfully",subHeading:"Your form has been successfully submitted.",onClose:function(){return w(!1)}}),m.a.createElement(s.e,{type:"info",visible:C,title:"information",heading:"Processing",subHeading:"Please wait. Your information is being process.",onClose:function(){return M(!1)}}),m.a.createElement(u.mb,null,m.a.createElement(s.b,{onSubmit:O(D),disabled:R},m.a.createElement(u.k,null,m.a.createElement("h1",null,"Admission Form"),m.a.createElement("p",null,"Please fill all necessary information with all honesty."),m.a.createElement("p",null,"Please note, an asterisk(*) denotes a required field.")),m.a.createElement(h.SectionContainer,{heading:"Enrollee Status"},m.a.createElement(u.b,null,m.a.createElement(s.i,{id:"type-of-student",heading:"What student type are you?",error:I.typeOfStudent&&"Student Types is Required!"},m.a.createElement(s.h,{label:"New Student",name:"typeOfStudent",value:"New Student",ref:P({required:!0})}),m.a.createElement(s.h,{label:"Current Student",name:"typeOfStudent",value:"Current Student",ref:P({required:!0})}),m.a.createElement(s.h,{label:"Transferee",name:"typeOfStudent",value:"Transferee",ref:P({required:!0})}),m.a.createElement(s.h,{label:"Returning Student",name:"typeOfStudent",value:"Returning Student",ref:P({required:!0})}),m.a.createElement(s.h,{label:"Foreigner",name:"typeOfStudent",value:"Foreigner",ref:P({required:!0})})),m.a.createElement(s.d,{heading:"School Year",id:"school-year",columns:"repeat(2, 1fr)"},m.a.createElement(s.c,{type:"number",label:"From",placeholder:"year",id:"from-year",name:"schoolYear.from",ref:P({required:!0}),error:(null===(r=I.schoolYear)||void 0===r?void 0:r.from)&&"from year is required"}),m.a.createElement(s.c,{type:"number",label:"To",placeholder:"year",id:"to-year",name:"schoolYear.to",ref:P({required:!0}),error:(null===(t=I.schoolYear)||void 0===t?void 0:t.to)&&"to year is required"})),m.a.createElement(s.d,{heading:"Last School Year Attended",id:"last-school-year",columns:"repeat(2, 1fr)"},m.a.createElement(s.c,{type:"number",label:"From",placeholder:"year",id:"last-from-year",name:"lastSyFromYear",ref:P({required:!0}),error:I.lastSyFromYear&&"This field is required"}),m.a.createElement(s.c,{type:"number",label:"To",placeholder:"year",id:"last-to-year",name:"lastSyToYear",ref:P({required:!0}),error:I.lastSyToYear&&"This field is required"})),m.a.createElement(s.d,{heading:"Current Education",id:"desired-course",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"Education Level",id:"course-name",name:"educationLevel",ref:P({required:!0}),error:I.educationLevel&&"education level is required",readOnly:!0}),m.a.createElement(s.c,{type:"number",id:"grade-level",label:"grade level",name:"gradeLevel",ref:P({required:!0}),error:I.gradeLevel&&"grade level is required"})))),m.a.createElement(h.SectionContainer,{heading:"Personal Information"},m.a.createElement(u.c,null,m.a.createElement(s.d,{heading:"Full Name",id:"full-name",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"First Name",id:"first-name",name:"firstName",ref:P({required:!0}),error:I.firstName&&"first name is required"}),m.a.createElement(s.c,{label:"Last Name",id:"last-name",name:"lastName",ref:P({required:!0}),error:I.lastName&&"last name is required"}),m.a.createElement(s.c,{label:"Middle Name",id:"middle-name",name:"middleName",ref:P({required:!0}),error:I.middleName&&"middle name is required"}),m.a.createElement(s.c,{label:"Suffix",placeholder:"Ex. Jr / Sr",id:"suffix",required:!1,name:"suffix",ref:P})),m.a.createElement(s.d,{heading:"Gender",id:"gender-status",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"gender",placeholder:"Male / Female",name:"gender",ref:P({required:!0}),error:I.gender&&"gender is required"})),m.a.createElement(s.d,{heading:"Birth Information",id:"birth-info",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"birth place",id:"birth-place",name:"birthPlace",ref:P({required:!0}),error:I.birthPlace&&"birth place is required"}),m.a.createElement(s.c,{type:"date",label:"birth date",id:"birth-date",name:"birthDate",ref:P({required:!0}),error:I.birthDate&&"birth date is required"}),m.a.createElement(s.c,{type:"number",label:"age",id:"age",name:"age",ref:P({required:!0}),error:I.age&&"age is required"})),m.a.createElement(s.d,{heading:"Nationality",id:"nationalism",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"nationality",id:"nationality",name:"nationality",ref:P({required:!0}),error:I.nationality&&"nationality is required"}),m.a.createElement(s.c,{label:"dialect",id:"dialect",name:"dialect",ref:P({required:!0}),error:I.dialect&&"dialect is required"}),m.a.createElement(s.c,{label:"ethnic affiliation",placeholder:"Ex. Cebuano / etc.",id:"ethnic",name:"ethnicAffiliation",ref:P({required:!0}),error:I.ethnicAffiliation&&"ethnicAffiliation is required"}),m.a.createElement(s.c,{label:"religion",placeholder:"religion",id:"religion",name:"religion",ref:P({required:!0}),error:I.religion&&"religion is required"})),m.a.createElement(s.d,{heading:"Contact Information",id:"contact-information",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{type:"number",label:"contact number",id:"contact-number",name:"contactNumber",ref:P({required:!0}),error:I.contactNumber&&"contactNumber is required"}),m.a.createElement(s.c,{type:"email",label:"email address",id:"email",name:"emailAddress",ref:P({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}}),error:I.emailAddress&&"email address is required"}),m.a.createElement(s.c,{label:"facebook account",id:"facebook-account",name:"facebookAccount",ref:P({required:!0}),error:I.facebookAccount&&"facebook account is required"}),m.a.createElement(s.c,{label:"home address",id:"home-address",name:"homeAddress",ref:P({required:!0}),error:I.homeAddress&&"homeAddress is required"})),m.a.createElement(s.d,{heading:"Parent's / Family Annual Income",id:"parents-income",columns:"repeat(2, 1fr)"},m.a.createElement(s.c,{label:"Annual Income",id:"parents-annual-income",name:"parentsAnnualIncome.annualIncome",ref:P({required:!0}),error:(null===(E=I.parentsAnnualIncome)||void 0===E?void 0:E.annualIncome)&&"annual income is required"}),m.a.createElement(s.c,{label:"Other Income",placeholder:"please specify",id:"parents-other-income",name:"parentsAnnualIncome.otherIncome",ref:P,required:!1})),m.a.createElement(s.d,{heading:"Parent's Information",id:"parent-information",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"father's name",placeholder:"father's complete name",id:"fathers-name",name:"parentsInfo.fathersName",ref:P({required:!0}),error:(null===(b=I.parentsInfo)||void 0===b?void 0:b.fathersName)&&"father's name is required"}),m.a.createElement(s.c,{label:"occupation",placeholder:"occupation",id:"fathers-occupation",name:"parentsInfo.fathersOccupation",ref:P({required:!0}),error:(null===(y=I.parentsInfo)||void 0===y?void 0:y.fathersOccupation)&&"occupation is required"}),m.a.createElement(s.c,{label:"mother's name",placeholder:"mother's complete name",id:"mothers-name",name:"parentsInfo.mothersName",ref:P({required:!0}),error:(null===(q=I.parentsInfo)||void 0===q?void 0:q.mothersName)&&"mother's name is required"}),m.a.createElement(s.c,{label:"occupation",placeholder:"occupation",id:"mothers-occupation",name:"parentsInfo.mothersOccupation",ref:P({required:!0}),error:(null===(g=I.parentsInfo)||void 0===g?void 0:g.mothersOccupation)&&"occupation is required"})),m.a.createElement(s.d,{heading:"Scholarship Information",id:"scholarship-info",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"scholarship",id:"scholarship",name:"scholarship",ref:P,required:!1}),m.a.createElement(s.c,{label:"amount",id:"amount",name:"scholarshipAmmount",ref:P,required:!1})))),m.a.createElement(h.SectionContainer,{heading:"Educational Background"},m.a.createElement(u.a,null,m.a.createElement(s.d,{heading:"elementary",id:"elementary",columns:"repeat(3, 1fr)"},m.a.createElement(s.c,{label:"school name",id:"elementary-school-name",name:"elementarySchoolName",ref:P({required:!0}),error:I.elementarySchoolName&&"school name is required"}),m.a.createElement(s.c,{type:"number",label:"year graduated",id:"elementary-year-graduated",name:"elementaryYearGraduated",ref:P({required:!0}),error:I.elementaryYearGraduated&&"year graduated is required"})),m.a.createElement(s.d,{heading:"Authorized person/s to have an access on your school records",id:"authorized-persons",columns:"repeat(6, 1fr)"},m.a.createElement(s.c,{label:"complete name",id:"authorized-person-name-1",name:"authorizedPerson1Name",ref:P({required:!0}),error:I.authorizedPerson1Name&&"this field is required"}),m.a.createElement(s.c,{label:"relationship",id:"authorized-person-relationship-1",name:"authorizedPerson1Relationship",ref:P({required:!0}),error:I.authorizedPerson1Relationship&&"this field is required"}),m.a.createElement(s.c,{label:"complete name",id:"authorized-person-name-2",name:"authorizedPerson2Name",ref:P({required:!0}),error:I.authorizedPerson2Name&&"this field is required"}),m.a.createElement(s.c,{label:"relationship",id:"authorized-person-relationship-2",name:"authorizedPerson2Relationship",ref:P({required:!0}),error:I.authorizedPerson2Relationship&&"this field is required"})))),m.a.createElement(h.SectionContainer,{heading:"Payment Information"},m.a.createElement(h.PaymentInfo,null),m.a.createElement(s.i,{heading:"select payment method",id:"payment-method",error:I.paymentMethod&&"payment method is required! you need to select one."},m.a.createElement(s.h,{label:"Money transfer",value:"Money Transfer",name:"paymentMethod",ref:P({required:!0})}),m.a.createElement(s.h,{label:"Bank Transaction",value:"Bank Transaction",name:"paymentMethod",ref:P({required:!0})})),x&&m.a.createElement(m.a.Fragment,null,m.a.createElement(u.U,null,m.a.createElement("p",null,"Send your payment to the SPBTS Finance Officer:",m.a.createElement("span",null,"MARIA CIENA B. TENECIO"),m.a.createElement("span",null,"09190083163"),m.a.createElement("span",null,"Davao City"))),m.a.createElement(s.i,{heading:"select service",error:I.paymentService&&"payment service is required!"},m.a.createElement(s.h,{label:"Palawan Pawnshop",name:"paymentService",value:"Palawan Pawnshop",ref:P({required:!0})}),m.a.createElement(s.h,{label:"RD Pawnshop",name:"paymentService",value:"RD Pawnshop",ref:P({required:!0})}),m.a.createElement(s.h,{label:"M Lhuillier",name:"paymentService",value:"M Lhuillier",ref:P({required:!0})}))),H&&m.a.createElement(m.a.Fragment,null,m.a.createElement(u.U,null,m.a.createElement("p",null,"You may send your payment to any of the following SPBTS Bank Accounts:",m.a.createElement("span",null,"SPBTS"),m.a.createElement("span",null,"BPI"),m.a.createElement("span",null,"9431 0059 61")),m.a.createElement("p",null,m.a.createElement("br",null),m.a.createElement("span",null,"SPBTS"),m.a.createElement("span",null,"LAND BANK OF THE PHILIPPINES"),m.a.createElement("span",null,"2981 0856 23")),m.a.createElement("p",null,m.a.createElement("br",null),m.a.createElement("span",null,"SPBTS"),m.a.createElement("span",null,"METROBANK"),m.a.createElement("span",null,"547 3 547053606"))),m.a.createElement(s.i,{heading:"select bank",error:I.paymentBank&&"payment bank is required!"},m.a.createElement(s.h,{label:"BPI",name:"paymentBank",value:"BPI",ref:P({required:!0})}),m.a.createElement(s.h,{label:"LAND BANK OF THE PHILIPPINES",name:"paymentBank",value:"LAND BANK OF THE PHILIPPINES",ref:P({required:!0})}),m.a.createElement(s.h,{label:"METROBANK",name:"paymentBank",value:"METROBANK",ref:P({required:!0})}))),m.a.createElement(u.U,null,m.a.createElement("p",null,"As proof of payment, please send a photo of the receipt to our Finance Officer to any of the following:",m.a.createElement("span",null,"FB Messenger: Ciena Tenecio"),m.a.createElement("span",null,"E-mail: ciena_tenecio@yahoo.com")))),m.a.createElement(u.lb,{error:!!I.certifyTrue},m.a.createElement(s.a,{label:"I certify that all information stated and written above are true and correct. With my consent, I agree that the information and data provided will be used only for whatever legal purposes, do hereby promulgated. [ Section 16 R.A. 10173, known as Data Privacy Act of 2012 ].",id:"certify",containerId:"certify-checkbox",name:"certifyTrue",ref:P({required:!0})}),I.certifyTrue&&m.a.createElement(u.kb,null,"This field is required!")))))}}}]);
//# sourceMappingURL=5.c2e887fb.chunk.js.map