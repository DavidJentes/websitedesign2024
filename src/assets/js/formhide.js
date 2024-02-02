const step1 = document.getElementById("step1")
const step2 = document.getElementById("step2")
const step3 = document.getElementById("step3")
const step4 = document.getElementById("step4")

const menu1 = document.getElementById("menu1")
const menu2 = document.getElementById("menu2")

const step1next = document.getElementById("step1next")
const step2back = document.getElementById("step2back")
const step2next = document.getElementById("step2next")
const step3back = document.getElementById("step3back")
const step3next = document.getElementById("step3next")
const step4back = document.getElementById("step4back")

const phoneext = document.getElementById("phoneext")
const extDiv = document.getElementById("extDiv")
const phoneDiv = document.getElementById("phoneDiv")

const hoticed = document.getElementById("hoticed")
const hotDiv = document.getElementById("hotDiv")
const icedDiv = document.getElementById("icedDiv")

const caramel = document.getElementById("caramel");
const pecan = document.getElementById("pecan");
const pumpkin = document.getElementById("pumpkin");
const sfvanilla = document.getElementById("sfvanilla");
const hazelnut = document.getElementById("hazelnut");
const peppermint = document.getElementById("peppermint");
const vanilla = document.getElementById("vanilla");
const sfmarshmallow = document.getElementById("sfmarshmallow");

const caramelPumps = document.getElementById("caramelpumps");
const pecanPumps = document.getElementById("pecanpumps");
const pumpkinPumps = document.getElementById("pumpkinpumps");
const sfvanillaPumps = document.getElementById("sfvanillapumps");
const hazelnutPumps = document.getElementById("hazelnutpumps");
const peppermintPumps = document.getElementById("peppermintpumps");
const vanillaPumps = document.getElementById("vanillapumps");
const sfmarshmallowPumps = document.getElementById("sfmarshmallowpumps");

step1next.addEventListener("click", () => {
    menu1.classList.add("hidden")
    menu2.classList.add("hidden")
    step1.classList.add("hidden")
    step2.classList.remove("hidden")
})

step2back.addEventListener("click", () => {
    menu1.classList.remove("hidden")
    menu2.classList.remove("hidden")
    step1.classList.remove("hidden")
    step2.classList.add("hidden")
})

step2next.addEventListener("click", () => {
    step2.classList.add("hidden")
    step3.classList.remove("hidden")
})

step3back.addEventListener("click", () => {
    step2.classList.remove("hidden")
    step3.classList.add("hidden")
})

step3next.addEventListener("click", () => {
    step3.classList.add("hidden")
    step4.classList.remove("hidden")
})

step4back.addEventListener("click", () => {
    step3.classList.remove("hidden")
    step4.classList.add("hidden")
})

caramel.addEventListener("click", () => {
    if (caramel.checked) {
        caramelPumps.classList.remove("hidden");
    } else {
        caramelPumps.classList.add("hidden");
    }
});

pecan.addEventListener("click", () => {
    if (pecan.checked) {
        pecanPumps.classList.remove("hidden");
    } else {
        pecanPumps.classList.add("hidden");
    }
});

pumpkin.addEventListener("click", () => {
    if (pumpkin.checked) {
        pumpkinPumps.classList.remove("hidden");
    } else {
        pumpkinPumps.classList.add("hidden");
    }
});

sfvanilla.addEventListener("click", () => {
    if (sfvanilla.checked) {
        sfvanillaPumps.classList.remove("hidden");
    } else {
        sfvanillaPumps.classList.add("hidden");
    }
});

hazelnut.addEventListener("click", () => {
    if (hazelnut.checked) {
        hazelnutPumps.classList.remove("hidden");
    } else {
        hazelnutPumps.classList.add("hidden");
    }
});

peppermint.addEventListener("click", () => {
    if (peppermint.checked) {
        peppermintPumps.classList.remove("hidden");
    } else {
        peppermintPumps.classList.add("hidden");
    }
});

vanilla.addEventListener("click", () => {
    if (vanilla.checked) {
        vanillaPumps.classList.remove("hidden");
    } else {
        vanillaPumps.classList.add("hidden");
    }
});

sfmarshmallow.addEventListener("click", () => {
    if (sfmarshmallow.checked) {
        sfmarshmallowPumps.classList.remove("hidden");
    } else {
        sfmarshmallowPumps.classList.add("hidden");
    }
});

phoneext.addEventListener("change", () => {
    if (phoneext.value == "ext") {
        extDiv.classList.remove("hidden")
        phoneDiv.classList.add("hidden")
    } else if (phoneext.value == "phone") {
        extDiv.classList.add("hidden")
        phoneDiv.classList.remove("hidden")
    } else {
        extDiv.classList.add("hidden")
        phoneDiv.classList.add("hidden")
    }
})

hoticed.addEventListener("change", () => {
    if (hoticed.value == "hot") {
        hotDiv.classList.remove("hidden")
        icedDiv.classList.add("hidden")
    } else if (hoticed.value == "iced") {
        hotDiv.classList.add("hidden")
        icedDiv.classList.remove("hidden")
    }
})