
function generateLib() {
    const adjective = document.getElementById("adjective1").value;
    console.log(adjective)
    const adjective2 = document.getElementById("adjective2").value;
    console.log(adjective2)
    const curse = document.getElementById("curse").value;
    console.log(curse)
    const verb = document.getElementById("verb").value;
    console.log(verb)
    const noun = document.getElementById("noun").value;
    console.log(noun)
    const verb2 = document.getElementById("verb2").value;
    console.log(verb2)


    document.getElementById("generatedLib").innerHTML = `
        <p>The ${adjective} nurse decided to try his best to become a programmer.
        He was excited for the ${adjective2} challenge!
        This was a few months before the ${curse} pandemic hit.
        Now he is going to have to ${verb} his ${noun} off.
        Overall I think he'll be okay if he would ${verb2} and stop complaining.
        </p>`
    }