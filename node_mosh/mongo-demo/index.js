const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/playground", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        author: "Mosh",
        tags: ["angular", "frontend"],
        isPublished: true,
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    // const courses = await Course.find(); // All
    const courses = await Course.find({ author: "Mosh" }) // Filtered
        .limit(10) // Limit return num
        .sort({ name: 1 }) // Sort
        .select({ name: 1, tags: 1 }); // What gets returned
    console.log(courses);
}

// Comparison Query Operators
// eq - equal
// ne - not equal
// gt - greater than
// gte - greater than or equal to
// lt - less than
// lte - less than or equal to
// in
// nin - not in

async function getCoursesComparison() {
    // const courses = await Course.find(); // All
    const courses = await Course
        //.find({ price: { $gte: 10, $lte: 20 } }) // Filtered price  > 10 and < 20
        .find({ price: { $in: [10, 15, 20] } }) // Price is 10, 15 or 20
        .limit(10) // Limit return num
        .sort({ name: 1 }) // Sort
        .select({ name: 1, tags: 1 }); // What gets returned
    console.log(courses);
}

getCourses();
