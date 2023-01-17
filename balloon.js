document.getElementById("fly").addEventListener("click", flyBalloons);
let imageWidth = window.innerWidth / 50;
let imageHeight = window.innerHeight / 50;

let balloonSvg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" `.concat(`width="`, imageWidth, `" height="`, imageHeight, `">`);
let ballonPath = `<path d="M2960 12794 c-84 -8 -274 -45 -365 -70 -262 -74 -541 -221 -769 -405
-477 -384 -826 -1007 -935 -1669 -58 -353 -55 -740 8 -1081 127 -683 486
-1288 990 -1668 203 -152 389 -251 615 -326 122 -41 307 -85 355 -85 18 0 21
-6 21 -48 0 -86 -44 -202 -115 -300 -69 -97 -55 -132 53 -132 37 0 84 4 105 9
35 8 37 8 37 -15 0 -51 -32 -231 -94 -534 -92 -448 -100 -510 -100 -740 0
-163 3 -211 21 -290 56 -252 139 -399 319 -570 150 -143 288 -238 649 -450
344 -201 494 -308 641 -458 96 -97 156 -187 247 -367 110 -218 156 -367 188
-610 15 -110 15 -495 0 -665 -37 -420 -38 -575 -7 -765 43 -255 144 -476 302
-655 125 -141 259 -383 310 -555 18 -63 28 -126 32 -209 6 -97 10 -121 24
-130 14 -8 22 -7 35 7 24 24 23 171 -2 282 -47 213 -192 489 -349 665 -147
165 -243 381 -280 633 -20 133 -20 395 0 587 21 208 29 609 15 753 -27 271
-79 455 -198 692 -94 186 -153 275 -257 383 -152 159 -299 264 -671 482 -366
214 -505 312 -644 451 -155 155 -209 249 -268 464 -19 72 -25 124 -30 256 -9
251 2 329 126 939 27 135 54 285 61 335 6 49 13 91 15 94 2 2 35 -11 72 -29
84 -39 162 -50 186 -25 26 26 21 55 -22 118 -53 78 -73 149 -72 265 0 52 3 98
8 102 4 5 58 13 118 20 751 79 1414 570 1785 1325 136 274 214 515 265 817
159 941 -127 1899 -755 2529 -344 345 -728 547 -1190 625 -84 15 -393 26 -480
18z" />
</g>
</svg>`;

function flyBalloons() {
    for (let i = 0; i < 99; i++) {
        let n = Math.floor(Math.random() * window.innerWidth);
        let balloonGroup = `<g transform-origin="top" transform="translate(0,`.concat(n, `) scale(-0.015)">`);
        let balloon = balloonSvg.concat(balloonGroup, ballonPath);
        document.getElementById("sky").innerHTML += balloon;
        setTimeout(() => {
            document.querySelector("iframe").classList.add("revealed");
            document.querySelector("iframe").classList.remove("hidden");
            document.getElementById("sky").innerHTML = "";
        }, "10500");
    }
}