const bigUl = document.querySelector(".big-ul")
const smallUl = document.querySelector(".small-ul")

const iframe = document.createElement("iframe")
iframe.width  = "400px"
iframe.height = "400px"
iframe.src = "https://turntable.s2-contractor.com/coordinates/1/detail"

const bigLi = document.createElement("li")
bigLi.appendChild(iframe)

const img = document.createElement("img")
img.style.width  = "50px"
img.style.height = "50px"
img.src = "https://turntable.s2-contractor.com/ogp.png"

const smallLi = document.createElement("li")
smallLi.appendChild(img)

bigUl.appendChild(bigLi)
smallUl.appendChild(smallLi)

smallLi.addEventListener("click" , (e)=>{
    (bigUl as HTMLElement).style.left = -1 *  400 * (smallUl.children.length - 1) + "px"
})
