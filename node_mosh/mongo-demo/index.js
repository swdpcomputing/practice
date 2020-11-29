const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/playground", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"], // validates has to be one
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            // Doesn't need to be async of immediate result
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    // Do some async work
                    // If v has a value an has a length
                    const result = v && v.length > 0;
                    callback (result);
                }, 4000);
            },
            message: "A course should have at least one tag",
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () {
            // can't use arrow syntax
            return this.isPublished; // validatation required only if published
        },
        min: 10,
        max: 200,
    },
});

const Course = mongoose.model("Course", courseSchema);

// Create a course
async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        category: "web",
        author: "Mosh",
        tags: ['popular'],
        isPublished: true,
        price: 15,
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (exc) {
        console.log(exc);
    }
}

createCourse();

// Filtering
async function getCoursesFiltered() {
    // const courses = await Course.find(); // All
    const courses = await Course.find({ author: "Mosh", isPublished: true }) // Filtered
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
    const courses = await Course
        //.find({ price: { $gte: 10, $lte: 20 } }) // Filtered price  > 10 and < 20
        .find({ price: { $in: [10, 15, 20] } }) // Price is 10, 15 or 20
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

// Query Operators
// or
// and

async function getCoursesQueried() {
    const courses = await Course
        // .find({ author: "Mosh", isPublished: true }) // Filtered
        .find()
        .or([{ author: "Mosh" }, { isPublished: true }])
        .and([{ author: "Mosh" }, { isPublished: true }])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 }); // What gets returned
    console.log(courses);
}

// Regular Expressions
async function getCoursesRegex() {
    const courses = await Course
        //.find({ author: "Mosh", isPublished: true })

        .find({ author: /^Mosh/ }) // Regex - Starts with Mosh
        .find({ author: /Hamedani$/ }) // Regex - Ends with Hamedani
        .find({ author: /Hamedani$/i }) // Case insenstive
        .find({ author: /.*Mosh.*/ }) // Regex - Contains
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

// Counting
async function getCoursesCount() {
    const courses = await Course.find({ author: "Mosh", isPublished: true }) // Filtered
        .limit(10)
        .sort({ name: 1 })
        .count();
    console.log(courses);
}

// Pagination
async function getCoursesFiltered() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course.find({ author: "Mosh", isPublished: true }) // Filtered
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

// Updating a doucment, query first
async function updateCourseQueryFirst(id) {
    const course = await Course.findById(id);
    if (!course) return;

    //Option  1
    course.isPublished = true;
    course.author = "Another Author";

    // Option 2
    // course.set({
    //     isPublished: true,
    //     author: "Another Author",
    // });

    const result = await course.save();
    console.log(result);
}

// Updating a document, update first, return result
async function updateCourseUpdateFirstReturnResult(id) {
    const result = await Course.update(
        { _id: id },
        {
            // MongoDB Update Operators
            $set: {
                author: "Mosh",
                isPublished: false,
            },
        }
    );
    console.log(result);
}

// Updating a document, update first, return object
async function updateCourseUpdateFirstReturnObject(id) {
    const course = await Course.findByIdAndUpdate(
        id,
        {
            $set: {
                author: "Jack",
                isPublished: true,
            },
        },
        { new: true } // this dictates returning the old or new object
    );
    console.log(course);
}

// Removing documents
async function removeCourse(id) {
    //Course.deleteOne({ isPublished: false }); // Finds and deletes first instance
    const result = await Course.deleteOne({ _id: id });
    // or deleteMany
    // or findByIdAndRemove
    console.log(result);
}
