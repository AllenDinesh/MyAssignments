
const launchBrowser =(browsername) =>{
if (browsername === "chrome"){
    console.log("browsername is chrome");   
}else {
    console.log("browsername is not chrome");   
}
}

launchBrowser("edge");

const runtest = (testType) =>{
    switch (testType) {
        case "sanity":
            console.log("Sanity Testing Performs");
            break;
    case  "Regression":
            console.log("Regression Testing Performs");
            break;
        default:
            console.log("Smoke Testing Performs");
             break;
    }
}
runtest();