const express=require("express");
const CourseData=require('./src/model/CourseData');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// courseList=[{
// "courseTitle":"React",
// "courseDescription":"React course",
// "courseDuration":"4 Month",
// "courseDate":"2022-05-06",
// "courseVenue":"Online"
// },

// {
//     "courseTitle":"React",
//     "courseDescription":"React course",
//     "courseDuration":"4 Month",
//     "courseDate":"2022-05-06",
//      "courseVenue":"Online"
//  },

//     {
//         "courseTitle":"React",
//         "courseDescription":"React course",
//         "courseDuration":"4 Month",
//         "courseDate":"2022-05-06",
//         "courseVenue":"Online"
//         },

//         {
//             "courseTitle":"React",
//             "courseDescription":"React course",
//             "courseDuration":"4 Month",
//             "courseDate":"2022-05-06",
//             "courseVenue":"Online"
//             },

//             {
//                 "courseTitle":"React",
//                 "courseDescription":"React course",
//                 "courseDuration":"4 Month",
//                 "courseDate":"2022-05-06",
//                 "courseVenue":"Online"
//                 },
// ]
// app.get('/getcourses',function(req,res){
//     res.send(courseList);
// })
// app.post('/addcourse',function(req,res){
//     console.log(req.body);
//     courseList.push(req.body);
//     res.send(courseList);
// }
// );

app.get('/getcourses',function(req,res){
    CourseData.find().then(function(course){
        console.log(course);
        res.send(course);
    })

})
app.post('/addcourse',function(req,res){
    var item={
        courseTitle:req.body.courseTitle,
        courseDescription:req.body.courseDescription,
        courseVenue:req.body.courseVenue,
        courseDuration:req.body.courseDuration,
        CourseData:req.body.courseDate
    }
    var course=CourseData(item);
    course.save();

    CourseData.find()
    .then(function(course){
     res.send(course);
    });
    }
)
app.put('/update/:id',function(req,res){
    const id=req.params.id;
    courseTitle=req.body.courseTitle;
        courseDescription=req.body.courseDescription;
        courseVenue=req.body.courseVenue;
        courseDuration=req.body.courseDuration;
        courseDate=req.body.courseDate;

        CourseData.findByIdAndUpdate({"_id":id},
        {$set:{"courseTitle":courseTitle,
        "courseDescription":courseDescription,
        "courseVenue":courseVenue,
        "courseDuration":courseDuration,
        "courseDate":courseDate
    }
        }).then (function(){res.send("updated")});
    
})
app.delete('/delete/:id',function(req,res)
    
app.listen(3000);