const count = 1;
const result = document.getElementById("result");
const searchquery = document.getElementById("search-query");
const googlelink = document.getElementById("googlelink");
let sitedomain = document.getElementById("site-domain");
let sitedescription = document.getElementById("site-description");
let siteicon = document.getElementById("site-icon");
const google = document.getElementById("google");
const container = document.getElementById("amity-container");
const urlParams = new URLSearchParams(window.location.search);
let searchpage = window.location.hash;
let protocol = "";
let fulldomain = "";
let domain = "";
let subdomain = "";
let tld = "";

const q = urlParams.get('q');
window.location.hash = "#search";

function checkWebsite(str) {
    const regex = /^(https?:\/\/)?(?:www\.)?((?:[a-zA-Z0-9-]+\.)*)([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\/\S*)?$/;
    const match = str.match(regex);

    if (!match) return "not-a-site";

    protocol = match[1] ? match[1].slice(0, -3) : "no-protocol"; 
    subdomain = match[2] ? match[2].slice(0, -1) : "";
    domain = match[3];
    tld = match[4];
    fulldomain = (subdomain ? subdomain + "." : "") + domain + "." + tld;

    if (str.startsWith("https://")) return "https";
    if (str.startsWith("http://")) return "http";
    return "no-protocol";
}
 
function renderesult(){
    searchpage = window.location.hash
    container.innerHTML = "";
    if (q === null || q ===""){
        window.location.href = "/"
    } else{
        searchquery.value = q
        if (q.toLowerCase() === "the cutest witch ever" || q.toLowerCase() === "самая милая ведьма на свете"){
            if (searchpage === "#search") {
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = "Конечно же Эмити Блайт!"
                const img1 = document.createElement("img");
                img1.src = "/assets/img/AmityBlight.png";
                img1.alt = "Эмити Блайт";
                container.appendChild(img1);
            }
            else if (searchpage === "#images"){
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = `Картинки по запросу: ${q}`;
                const img1 = document.createElement("img");
                img1.src = "/assets/img/AmityBlight.png";
                img1.alt = "Эмити Блайт";
                container.appendChild(img1);
            }
            else {
                result.textContent = "К сожалению тут пока ничего нет :("
            }
        }
        else if (q.toLowerCase() === "amity blight" || q.toLowerCase() === "эмити блайт"){
            if (searchpage === "#search") {
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = "Самая очаровательная, милая, красивая, добрая ведьма во всем мире."
                const img1 = document.createElement("img");
                img1.src = "/assets/img/AmityBlight.png";
                img1.alt = "Эмити Блайт";
                const img2 = document.createElement("img");
                img2.src = "/assets/img/AmityBlight2.png";
                img2.alt = "Эмити Блайт";
                container.appendChild(img1);
                container.appendChild(img2);
            }
            else if (searchpage === "#images"){
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = `Картинки по запросу: ${q}`;
                const img1 = document.createElement("img");
                img1.src = "/assets/img/AmityBlight.png";
                img1.alt = "Эмити Блайт";
                const img2 = document.createElement("img");
                img2.src = "/assets/img/AmityBlight2.png";
                img2.alt = "Эмити Блайт";
                container.appendChild(img1);
                container.appendChild(img2);
            }
            else {
                result.textContent = "К сожалению тут пока ничего нет :("
            }
        }
        else if (checkWebsite(q) === "no-protocol" || checkWebsite(q) === "https" || checkWebsite(q) === "http"){
            if (searchpage === "#search") {
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = "Удивительно, но мы смогли найти что-то"
                google.style.display = "block";
                sitedomain.textContent = fulldomain
                fetch(`https://api.microlink.io/?url=https://${fulldomain}`)
                    .then(response => response.json())
                    .then(data => { 
                        if (data.data.description){
                            sitedescription.textContent = data.data.description;
                        }
                        else {
                            sitedescription.textContent = "Тут сайт на столько говно, что даже описание не подгрузило";
                        }
                        googlelink.textContent = data.data.title;
                        siteicon.src = data.data.logo.url;
                    })    
                googlelink.href = `https://${fulldomain}`; 
            }
            else {
                result.textContent = "Да нет тут ничего, че ты лезишь куда не просят?"
                google.style.display = "none";
            }
        }
        else {
            if (searchpage === "#search") {
                result.textContent = "По вашему запросу ничего не найдено попробуйте поиск наших конкурентов: "
                googlelink.textContent = "Google";
                sitedomain.textContent = "google.com";
                siteicon.src = "/assets/img/google.png";
                sitedescription.textContent = "Поиск информации в интернете: веб страницы, картинки, видео и многое другое.";
                google.style.display = "block";
                googlelink.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
            }
            else {
                result.textContent = "Да нет тут ничего, че ты лезишь куда не просят?"
                google.style.display = "none";
            }
        }
}
}
renderesult();
window.addEventListener("hashchange", renderesult);
