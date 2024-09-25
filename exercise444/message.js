const message = () => {
    const name = "Zevan Rigel Akwila Tumbol";
    const age = 17;
    const status = "Single";
    const major = "Informatics";
    const faculty = "Computer Science";
    const address = "Crystal Dorm";
    const interests = "AI, Back end developer, Game Designer";

    return `
        <h1>Personal Information</h1>
        <hr>
        <strong>Name:</strong> ${name}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Status:</strong> ${status}<br>
        <strong>Major:</strong> ${major}<br>
        <strong>Faculty:</strong> ${faculty}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Interests:</strong> ${interests}
    `;
};

export default message;