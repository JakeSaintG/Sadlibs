
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


    document.getElementById("generatedLib").innerHTML = `
        <p>The ${adjective} nurse decided to try to become a ${adjective2}
        programmer before a ${curse} pandemic hit. Now he is going to have to ${verb} his ${noun} off to do this homework and work overtime...</p>`
    }