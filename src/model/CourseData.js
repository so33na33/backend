
const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://sonasl:notmebutyou@cluster0.5p8cz4f.mongodb.net/CourseDB?retryWrites=true&w=majority')
const schema=mongoose.Schema;
CourseSchema=new schema({courseTitle:String,
courseDescription:String,
courseDuration:String,
CourseDate:String,
courseVenue:String});
var CourseData=mongoose.model("courseset",CourseSchema);
module.exports=CourseData;
