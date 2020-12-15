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
        author: authorSchema,
    })
);

const CourseWithValidation = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        author: {
            type: authorScheme,
            required: true,
        },
    })
);

const CourseWithMultipleAuthors = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        authors: [authorSchema],
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

// createCourse("Node Course", new Author({ name: "Mosh" }));

async function createCourseWithMulipleAuthors(name, authors) {
    const course = new CourseWithMultipleAuthors({
        name,
        authors,
    });

    const result = await course.save();
    console.log(result);
}

// createCourseWithMulipleAuthors("Node Course", [
//     new Author({ name: "Mosh" }),
//     new Author({ name: "John" }),
// ]);

async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

// listCourses()

async function addAuthor(courseId, author) {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

// addAuthor("_id", new Author({ name: "Amy" }));

async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove;
    course.save();
}

// removeAuthor("_id");

async function updateAuthor(courseId) {
    const course = await Course.findById(courseId);
    course.author.name = "Mosh Hamedani";
    course.save();
}

// updateAuthor("_id");

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

// updateAuthorV2("_id");

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

removeSubdocument("_id");
