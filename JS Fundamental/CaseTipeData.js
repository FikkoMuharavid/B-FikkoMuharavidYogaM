
    // String
    let fullname = "Fikko Muharavid Yoga Mardhany";
    console.log("String:", fullname);

    // Boolean
    let isStudent = true;
    let hasGraduated = false;
    let isEmployed = false;
    let lovesProgramming = true;

    console.log("Boolean - isStudent:", isStudent);
    console.log("Boolean - hasGraduated:", hasGraduated);
    console.log("Boolean - isEmployed:", isEmployed);
    console.log("Boolean - lovesProgramming:", lovesProgramming);

    // Numbers
    let age = 21;
    let height = 163; 
    let weight = 55; 
    
    console.log("Age (Integer):", age);
    console.log("Height (Integer):", height);
    console.log("Weight (Integer):", weight);

    // Array
    let fruits = ["Pisang", "Mangga", "Durian"];
    let vegetables = ["Cabe", "Tomat", "Bayam"];
    
    console.log("Array of Fruits:", fruits);
    console.log("Array of Vegetables:", vegetables);

    // Object
    let student = {
        name: "Fikko Muharavid Yoga Mardhany",
        age: 21,
        major: "Informatics",
        isGraduated: false,
    };

    console.log("Object:", student);

   
    alert(
        "String:\nFull Name: " + fullname +
        "\n\nBoolean Values:\n" +
        "isStudent: " + isStudent +
        "\nhasGraduated: " + hasGraduated +
        "\nisEmployed: " + isEmployed +
        "\nlovesProgramming: " + lovesProgramming +
        "\n\nNumbers:\n" +
        "Age: " + age +
        "\nHeight: " + height + " cm" +
        "\nWeight: " + weight + " kg" +
        "\n\nArrays:\n" +
        "Fruits: " + fruits.join(", ") +
        "\nVegetables: " + vegetables.join(", ") +
        "\n\nObject:\n" +
        "Name: " + student.name +
        "\nAge: " + student.age +
        "\nMajor: " + student.major +
        "\nGraduated: " + student.isGraduated
    );

