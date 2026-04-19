const studentscore = (mark) => {

switch (true) {
    case (mark>=90):
        console.log("A Grade");
        break;
case (mark>=60):
    console.log("B Grade");
    break;
    case (mark>=35):
        console.log("just pass");
        break;
     case (mark<35):
        console.log("Fail");
        break;
    
    default:
        console.log("Absent");
        
}

}

studentscore();
