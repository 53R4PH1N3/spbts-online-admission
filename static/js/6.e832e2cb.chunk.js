(this["webpackJsonpspbts-online-admission"]=this["webpackJsonpspbts-online-admission"]||[]).push([[6],{66:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return h}));var n=r(4),t=r.n(n),l=r(9),i=r(6),o=r(0),c=r.n(o),m=r(30),d=r(3),s=r(2),u=r(14),f=r(24),h=function(){var e,a,r,n,h,p,E,b,y,q=Object(f.a)("spbts_basic_ed_admission_template"),v=Object(m.a)(),g=v.register,S=v.errors,P=v.watch,I=v.setValue,A=v.handleSubmit,N=Object(o.useState)(!1),T=Object(i.a)(N,2),O=T[0],B=T[1],k=Object(o.useState)(!1),w=Object(i.a)(k,2),L=w[0],F=w[1],C=function(){var e=Object(l.a)(t.a.mark((function e(a){var r;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a);try{r=q(a),F(!0),r&&setTimeout((function(){F(!1),B(!0)}),3e3)}catch(n){console.error(n)}case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),M="money transfer"===(null===(e=P("paymentMethod"))||void 0===e?void 0:e.toLocaleLowerCase()),z="bank transaction"===(null===(a=P("paymentMethod"))||void 0===a?void 0:a.toLocaleLowerCase());return Object(o.useEffect)((function(){I("educationLevel","Kinder 2"),I(M?"paymentBank":"paymentService","")}),[M,I]),c.a.createElement(d.jb,null,c.a.createElement(s.f,null),c.a.createElement(s.e,{type:"success",visible:O,title:"success",heading:"Submitted Successfully",subHeading:"Your form has been successfully submitted.",onClose:function(){return B(!1)}}),c.a.createElement(s.e,{type:"info",visible:L,title:"information",heading:"Processing",subHeading:"Please wait. Your information is being process.",onClose:function(){return F(!1)}}),c.a.createElement(d.mb,null,c.a.createElement(s.b,{onSubmit:A(C)},c.a.createElement(d.k,null,c.a.createElement("h1",null,"Admission Form"),c.a.createElement("p",null,"Please fill all necessary information with with all honesty."),c.a.createElement("p",null,"Please note, an asterisk(*) denotes a required field.")),c.a.createElement(u.SectionContainer,{heading:"Enrollee Status"},c.a.createElement(d.b,null,c.a.createElement(s.i,{id:"type-of-student",heading:"What student type are you?",error:S.typeOfStudent&&"Student Types is Required!"},c.a.createElement(s.h,{label:"New Student",name:"typeOfStudent",value:"New Student",ref:g({required:!0})}),c.a.createElement(s.h,{label:"Current Student",name:"typeOfStudent",value:"Current Student",ref:g({required:!0})}),c.a.createElement(s.h,{label:"Transferee",name:"typeOfStudent",value:"Transferee",ref:g({required:!0})}),c.a.createElement(s.h,{label:"Returning Student",name:"typeOfStudent",value:"Returning Student",ref:g({required:!0})}),c.a.createElement(s.h,{label:"Foreigner",name:"typeOfStudent",value:"Foreigner",ref:g({required:!0})})),c.a.createElement(s.d,{heading:"School Year",id:"school-year",columns:"repeat(2, 1fr)"},c.a.createElement(s.c,{type:"number",label:"From",placeholder:"year",id:"from-year",name:"schoolYear.from",ref:g({required:!0}),error:(null===(r=S.schoolYear)||void 0===r?void 0:r.from)&&"from year is required"}),c.a.createElement(s.c,{type:"number",label:"To",placeholder:"year",id:"to-year",name:"schoolYear.to",ref:g({required:!0}),error:(null===(n=S.schoolYear)||void 0===n?void 0:n.to)&&"to year is required"})),c.a.createElement(s.d,{heading:"Last School Year Attended",id:"last-school-year",columns:"repeat(2, 1fr)"},c.a.createElement(s.c,{type:"number",label:"From",placeholder:"year",id:"last-from-year",name:"lastSyFromYear",ref:g({required:!0}),error:S.lastSyFromYear&&"This field is required"}),c.a.createElement(s.c,{type:"number",label:"To",placeholder:"year",id:"last-to-year",name:"lastSyToYear",ref:g({required:!0}),error:S.lastSyToYear&&"This field is required"})),c.a.createElement(s.d,{heading:"Current Education",id:"desired-course",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"Education Level",id:"course-name",name:"educationLevel",ref:g({required:!0}),error:S.educationLevel&&"education level is required",readOnly:!0}),c.a.createElement(s.c,{type:"number",id:"grade-level",label:"grade level",name:"gradeLevel",ref:g({required:!0}),error:S.gradeLevel&&"grade level is required"})))),c.a.createElement(u.SectionContainer,{heading:"Personal Information"},c.a.createElement(d.c,null,c.a.createElement(s.d,{heading:"Full Name",id:"full-name",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"First Name",id:"first-name",name:"firstName",ref:g({required:!0}),error:S.firstName&&"first name is required"}),c.a.createElement(s.c,{label:"Last Name",id:"last-name",name:"lastName",ref:g({required:!0}),error:S.lastName&&"last name is required"}),c.a.createElement(s.c,{label:"Middle Name",id:"middle-name",name:"middleName",ref:g({required:!0}),error:S.middleName&&"middle name is required"}),c.a.createElement(s.c,{label:"Suffix",placeholder:"Ex. Jr / Sr",id:"suffix",required:!1,name:"suffix",ref:g})),c.a.createElement(s.d,{heading:"Gender",id:"gender-status",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"gender",placeholder:"Male / Female",name:"gender",ref:g({required:!0}),error:S.gender&&"gender is required"})),c.a.createElement(s.d,{heading:"Birth Information",id:"birth-info",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"birth place",id:"birth-place",name:"birthPlace",ref:g({required:!0}),error:S.birthPlace&&"birth place is required"}),c.a.createElement(s.c,{type:"date",label:"birth date",id:"birth-date",name:"birthDate",ref:g({required:!0}),error:S.birthDate&&"birth date is required"}),c.a.createElement(s.c,{type:"number",label:"age",id:"age",name:"age",ref:g({required:!0}),error:S.age&&"age is required"})),c.a.createElement(s.d,{heading:"Nationalism",id:"nationalism",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"nationality",id:"nationality",name:"nationality",ref:g({required:!0}),error:S.nationality&&"nationality is required"}),c.a.createElement(s.c,{label:"dialect",id:"dialect",name:"dialect",ref:g({required:!0}),error:S.dialect&&"dialect is required"}),c.a.createElement(s.c,{label:"ethnic affiliation",placeholder:"Ex. Cebuano / etc.",id:"ethnic",name:"ethnicAffiliation",ref:g({required:!0}),error:S.ethnicAffiliation&&"ethnicAffiliation is required"}),c.a.createElement(s.c,{label:"religion",placeholder:"religion",id:"religion",name:"religion",ref:g({required:!0}),error:S.religion&&"religion is required"})),c.a.createElement(s.d,{heading:"Contact Information",id:"contact-information",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{type:"number",label:"contact number",id:"contact-number",name:"contactNumber",ref:g({required:!0}),error:S.contactNumber&&"contactNumber is required"}),c.a.createElement(s.c,{type:"email",label:"email address",id:"email",name:"emailAddress",ref:g({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}}),error:S.emailAddress&&"email address is required"}),c.a.createElement(s.c,{label:"facebook account",id:"facebook-account",name:"facebookAccount",ref:g({required:!0}),error:S.facebookAccount&&"facebook account is required"}),c.a.createElement(s.c,{label:"home address",id:"home-address",name:"homeAddress",ref:g({required:!0}),error:S.homeAddress&&"homeAddress is required"})),c.a.createElement(s.d,{heading:"Parent's / Family Annual Income",id:"parents-income",columns:"repeat(2, 1fr)"},c.a.createElement(s.c,{label:"Annual Income",id:"parents-annual-income",name:"parentsAnnualIncome.annualIncome",ref:g({required:!0}),error:(null===(h=S.parentsAnnualIncome)||void 0===h?void 0:h.annualIncome)&&"annual income is required"}),c.a.createElement(s.c,{label:"Other Income",placeholder:"please specify",id:"parents-other-income",name:"parentsAnnualIncome.otherIncome",ref:g,required:!1})),c.a.createElement(s.d,{heading:"Parent's Information",id:"parent-information",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"father's name",placeholder:"father's complete name",id:"fathers-name",name:"parentsInfo.fathersName",ref:g({required:!0}),error:(null===(p=S.parentsInfo)||void 0===p?void 0:p.fathersName)&&"father's name is required"}),c.a.createElement(s.c,{label:"occupation",placeholder:"occupation",id:"fathers-occupation",name:"parentsInfo.fathersOccupation",ref:g({required:!0}),error:(null===(E=S.parentsInfo)||void 0===E?void 0:E.fathersOccupation)&&"occupation is required"}),c.a.createElement(s.c,{label:"mother's name",placeholder:"mother's complete name",id:"mothers-name",name:"parentsInfo.mothersName",ref:g({required:!0}),error:(null===(b=S.parentsInfo)||void 0===b?void 0:b.mothersName)&&"mother's name is required"}),c.a.createElement(s.c,{label:"occupation",placeholder:"occupation",id:"mothers-occupation",name:"parentsInfo.mothersOccupation",ref:g({required:!0}),error:(null===(y=S.parentsInfo)||void 0===y?void 0:y.mothersOccupation)&&"occupation is required"})),c.a.createElement(s.d,{heading:"Scholarship Information",id:"scholarship-info",columns:"repeat(3, 1fr)"},c.a.createElement(s.c,{label:"scholarship",id:"scholarship",name:"scholarship",ref:g,required:!1}),c.a.createElement(s.c,{label:"amount",id:"amount",name:"scholarshipAmmount",ref:g,required:!1})))),c.a.createElement(u.SectionContainer,{heading:""},c.a.createElement(d.a,null,c.a.createElement(s.d,{heading:"Authorized person/s to have an access on your school records",id:"authorized-persons",columns:"repeat(6, 1fr)"},c.a.createElement(s.c,{label:"complete name",id:"authorized-person-name-1",name:"authorizedPerson1Name",ref:g({required:!0}),error:S.authorizedPerson1Name&&"this field is required"}),c.a.createElement(s.c,{label:"relationship",id:"authorized-person-relationship-1",name:"authorizedPerson1Relationship",ref:g({required:!0}),error:S.authorizedPerson1Relationship&&"this field is required"}),c.a.createElement(s.c,{label:"complete name",id:"authorized-person-name-2",name:"authorizedPerson2Name",ref:g({required:!0}),error:S.authorizedPerson2Name&&"this field is required"}),c.a.createElement(s.c,{label:"relationship",id:"authorized-person-relationship-2",name:"authorizedPerson2Relationship",ref:g({required:!0}),error:S.authorizedPerson2Relationship&&"this field is required"})))),c.a.createElement(u.SectionContainer,{heading:"Payment Information"},c.a.createElement(u.PaymentInfo,null),c.a.createElement(s.i,{heading:"select payment method",id:"payment-method",error:S.paymentMethod&&"payment method is required! you need to select one."},c.a.createElement(s.h,{label:"Money transfer",value:"Money Transfer",name:"paymentMethod",ref:g({required:!0})}),c.a.createElement(s.h,{label:"Bank Transaction",value:"Bank Transaction",name:"paymentMethod",ref:g({required:!0})})),M&&c.a.createElement(c.a.Fragment,null,c.a.createElement(d.U,null,c.a.createElement("p",null,"Send your payment to the SPBTS Finance Officer:",c.a.createElement("span",null,"MARIA CIENA B. TENECIO"),c.a.createElement("span",null,"09190083163"),c.a.createElement("span",null,"Davao City"))),c.a.createElement(s.i,{heading:"select service",error:S.paymentService&&"payment service is required!"},c.a.createElement(s.h,{label:"Palawan Pawnshop",name:"paymentService",value:"Palawan Pawnshop",ref:g({required:!0})}),c.a.createElement(s.h,{label:"RD Pawnshop",name:"paymentService",value:"RD Pawnshop",ref:g({required:!0})}),c.a.createElement(s.h,{label:"M Lhuillier",name:"paymentService",value:"M Lhuillier",ref:g({required:!0})}))),z&&c.a.createElement(c.a.Fragment,null,c.a.createElement(d.U,null,c.a.createElement("p",null,"You may send your payment to any of the following SPBTS Bank Accounts:",c.a.createElement("span",null,"SPBTS"),c.a.createElement("span",null,"BPI"),c.a.createElement("span",null,"9431 0059 61")),c.a.createElement("p",null,c.a.createElement("br",null),c.a.createElement("span",null,"SPBTS"),c.a.createElement("span",null,"LAND BANK OF THE PHILIPPINES"),c.a.createElement("span",null,"2981 0856 23")),c.a.createElement("p",null,c.a.createElement("br",null),c.a.createElement("span",null,"SPBTS"),c.a.createElement("span",null,"METROBANK"),c.a.createElement("span",null,"547 3 547053606"))),c.a.createElement(s.i,{heading:"select bank",error:S.paymentBank&&"payment bank is required!"},c.a.createElement(s.h,{label:"BPI",name:"paymentBank",value:"BPI",ref:g({required:!0})}),c.a.createElement(s.h,{label:"LAND BANK OF THE PHILIPPINES",name:"paymentBank",value:"LAND BANK OF THE PHILIPPINES",ref:g({required:!0})}),c.a.createElement(s.h,{label:"METROBANK",name:"paymentBank",value:"METROBANK",ref:g({required:!0})}))),c.a.createElement(d.U,null,c.a.createElement("p",null,"As proof of payment, please send a photo of the receipt to our Finance Officer to any of the following:",c.a.createElement("span",null,"FB Messenger: Ciena Tenecio"),c.a.createElement("span",null,"E-mail: ciena_tenecio@yahoo.com")))),c.a.createElement(d.lb,{error:!!S.certifyTrue},c.a.createElement(s.a,{label:"I certify that all information stated and written above are true and correct. With my consent, I agree that the information and data provided will be used only for whatever legal purposes, do hereby promulgated. [ Section 16 R.A. 10173, known as Data Privacy Act of 2012 ].",id:"certify",containerId:"certify-checkbox",name:"certifyTrue",ref:g({required:!0})}),S.certifyTrue&&c.a.createElement(d.kb,null,"This field is required!")))))}}}]);
//# sourceMappingURL=6.e832e2cb.chunk.js.map