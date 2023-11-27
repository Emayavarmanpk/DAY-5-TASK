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

const myResume={
    "basics": {
        "name": "emayavarman pk",
        "email": "emayavarmanpk@gamil.com",
        "phone": 9876543210,
        "degree": "B.Tech",
        "location": {
          "address": "1,Welcome city,Tambaram",
          "postalCode": 600030,
          "city": "Chennai",
          "state": "Tamilnadu",
          "country": "India"
        },
        "profiles": [
          {
            "website": "https://www.linkedin.com/in/emayavarmanpk/",
            "github":"https://github.com/Emayavarmanpk"
          }
        ]
      },
      
      "education": [
        {
          "institution": "Bharth university",
          "department": "Mechatronics",
          "studyType": "fulltime",
          "batch start year": 2019,
          "batch end year": 2022,
          "CGPA": 8.4,
        }
      ],
      "skills": [
        {
          "name": "javascript",
          "level": "beginer",
          
        }
      ],
      "languages": [
        {
          "language": "Tamil,Enlish",
        }
      ],
      "interests": [
        {
          "name": "Playing shuttle,Story reading,",
        }
      ]
    }
    console.log(myResume);