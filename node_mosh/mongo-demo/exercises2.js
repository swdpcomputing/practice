const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/mongo-exercises", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getFilteredCourses() {
    return await Course.find({ isPublished: true })
        .or([{ tags: "frontend" }, { tags: "backend" }])
        .sort({ price: -1 }) // Sort
        .select({ name: 1, author: 1, price: 1 }); // What gets returned
}

async function run() {
    const courses = await getFilteredCourses();
    console.log(courses);
}

run();
