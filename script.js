// Q1 For the given JSON iterate over all for loops (for, for in, for of, forEach)

var a=[{"name":"emaya","age":"21"},

{"name":"varman","age":"21"}
]


//using for loop

for(var i=0;i<a.length;i++){
    console.log(`Name: ${a[i].name} Age:${a[i].age}`)
}

//using for in
console.log(" using for in");
for(var ans in a){
    // console.log(ans);
    console.log(`Name: ${a[ans].name} Age:${a[ans].age}`)
}

//using for of

console.log("using for of");
for(var ans of a){
    console.log(ans.name)
}


// Q2 create your own resume data in JSON format:

let resume={
    "name":"imayavarman",
    "dob":"20.01.2001",
    "age":"22",
    "education":["10th","12th","B.E"],
    "address":["abcd street","631209","thiruvallur","tamilnadu"],
    "strengths":"positive thinker",
    "maritalstatus":"single",
    "sex":"male",
    "fathername":"prakash",
    "date":"30.10.2023",
    "contact details":"abcd@gmail.com"}
console.log(resume);
console.log(resume.name);
console.log(resume.dob);
console.log(resume.age);
console.log(resume.education[0],resume.education[1],resume.education[2]);
console.log(resume.address[0],resume.address[1],resume.address[2],resume.address[3],);
console.log(resume.strengths);
console.log(resume.maritalstatus);
console.log(resume.sex);
console.log(resume.fathername);
console.log(resume.date);
console.log(resume["contact details"]);