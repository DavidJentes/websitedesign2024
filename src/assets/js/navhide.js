window.onscroll = () => {
    navScroll()
}

const nav = document.getElementsByTagName("nav")[0]
const h1 = document.getElementsByTagName("h1")[0]

function navScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add("hidden");
        h1.style.fontSize = "20px"
    } else {
        nav.classList.remove("hidden");
        h1.style.fontSize = "2rem"
    }
}