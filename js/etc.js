function calc() {
    let math = document.getElementById("math").value
    let system = document.getElementById("system").value
    let physical = document.getElementById("physical").value
    let english = document.getElementById("english").value

    let icon = document.getElementById("poli-content-icon")
    let approvedIcon = document.getElementById("approved-icon")
    let notApprovedIcon = document.getElementById("not-approved-icon")
    let result = document.getElementById("result")
    let message = document.getElementById("message")

    let mathValue = parseFloat(math);
    let systemValue = parseFloat(system);
    let physicalValue = parseFloat(physical);
    let englishValue = parseFloat(english);
    let maxNote = 5;
    let maxScore = 20;

    
    let sum = mathValue + systemValue + physicalValue + englishValue
    
    if (validations(mathValue, systemValue, physicalValue, englishValue, sum, maxNote)) {
        icon.style.display = 'none';
        if (sum >= 12) {
            approvedIcon.style.display = 'block';
            notApprovedIcon.style.display = 'none';
            message.textContent = 'FELICITACIONES HA APROBADO'
        }
        else {
            approvedIcon.style.display = 'none';
            notApprovedIcon.style.display = 'block';
            message.textContent = 'NO APROBADO'
        }
        result.textContent = `Su promedio es: ${sum / 4}`
    }
}

function validations(math, system, physical, english, sum, maxNote) {
    let isValid = math <= maxNote && system <= maxNote && physical <= maxNote && english <= maxNote
    if(isNaN(sum) || math < 0 || system < 0 || physical < 0 || english < 0) {
        alert(`Por favor llena cada area con una nota de 1 a ${maxNote}`);
        return false;
    }
    if(!isValid) {
        alert(`Recuerda que la nota maxima es ${maxNote} por cada area`);
    }
    return isValid
}