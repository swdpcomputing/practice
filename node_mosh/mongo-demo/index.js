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
    const courses = await Course
        .find({ author: "Mosh" }) // Filtered
        .limit(10) // Limit return num
        .sort({ name: 1 }) // Sort
        .select({ name: 1, tags: 1 }); // What gets returned
    console.log(courses);
}

getCourses();
