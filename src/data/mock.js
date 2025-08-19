/**
 * @typedef {Object} Course
 * @property {string} code
 * @property {string} name
 *
 * @typedef {Object} SemesterRegistration
 * @property {string} term
 * @property {Course[]} courses
 *
 * @typedef {Object} Student
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} studentId
 * @property {string} major
 * @property {string} school
 * @property {string} imageUrl
 * @property {SemesterRegistration[]} registrations
 */

const courses1 = [
    { code: "ITD62-331", name: "Internet of Things" },
    {
        code: "ITD62-373",
        name: "Virtual Reality and Augmented Reality Technology"
    },
    { code: "ITD62-390", name: "Pre-Cooperative Education" },
    {
        code: "ITD62-484",
        name: "Information Technology and Digital Innovation Project I"
    }
];

const courses2 = [
    { code: "ITD62-322", name: "Mobile Platform Development" },
    {
        code: "ITD62-383",
        name: "Special Topics in Information Technology and Digital Innovation III"
    },
    {
        code: "ITD62-481",
        name: "Information Technology and Digital Innovation Seminar I"
    }
];

const registration1 = { term: "1/2025", courses: courses1 };
const registration2 = { term: "2/2025", courses: courses2 };

export const student = {
    firstName: "ธรากร",
    lastName: "คมพจน์",
    studentId: "66104548",
    major: "เทคโนโลยีสารสนเทคและนวัตกรรมดิจิทัล",
    school: "สำนักวิชาสารสนเทศศาสตร์",
    imageUrl:
        "https://i0.wp.com/asiatimes.com/wp-content/uploads/2020/02/Cambodia-Hun-Sen-January-30-2020-e1581513590431.jpg?resize=1200%2C801&quality=89&ssl=1",
    registrations: [registration1, registration2]
};
