const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/playground", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
    // Can apply validation to any of these.]
    name: String,
    bio: String,
    website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        // author: authorSchema, // without validation
        author: {
            type: authorScheme,
            required: true,
        },
    })
);

async function createCourse(name, author) {
    const course = new Course({
        name,
        author,
    });

    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

async function updateAuthor(courseId) {
    const course = await Course.findById(courseId);
    course.author.name = "Mosh Hamedani";
    course.save();
}

async function updateAuthorV2(courseId) {
    const course = await Course.updateOne(
        { _id: courseId },
        {
            $set: {
                "author.name": "Bob Jones",
            },
        }
    );
}

async function removeSubdocument(courseId) {
    const course = await Course.updateOne(
        { _id: courseId },
        {
            $unset: {
                // "author.name": "", // remove the nested property
                author: "", // remove subdocument as a whole
            },
        }
    );
}

// createCourse("Node Course", new Author({ name: "Mosh" }));
// updateAuthor("5fd9132fe58135386c579920");
// updateAuthorV2("5fd9132fe58135386c579920");
removeSubdocument("5fd9132fe58135386c579920");
