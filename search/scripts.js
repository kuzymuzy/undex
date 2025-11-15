let count = 1;
const result = document.getElementById("result");
const searchquery = document.getElementById("search-query");
const googlelink = document.getElementById("googlelink");
let sitedomain = document.getElementById("site-domain");
let sitedescription = document.getElementById("site-description");
let siteicon = document.getElementById("site-icon");
const google = document.getElementById("google");
const container = document.getElementById("container");
const urlParams = new URLSearchParams(window.location.search);
let previousElement = null;
let searchpage = window.location.hash;
let protocol = "";
let fulldomain = "";
let domain = "";
let subdomain = "";
let tld = "";

const q = urlParams.get('q');

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

let searchData = {};

fetch("results.json")
    .then(r => r.json())
    .then(data => {
        searchData = data;
        renderesult();
    }); 

function findQueryData(q) {
    const query = q.toLowerCase();
    for (const key in searchData) {
        const item = searchData[key];
        if (key === query) return item;
        if (item.aliases && item.aliases.includes(query)) return item;
    }
    return null;
}
 
function renderesult() {
    searchpage = window.location.hash || "#search";
    if (!searchpage){
        window.location.hash = "#search"
    }

    if (previousElement) {
        previousElement.style.backgroundColor = "";
    }
    const currentId = window.location.hash.substring(1);
    const currentElement = document.getElementById(currentId);
    if (currentElement) {
        currentElement.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        previousElement = currentElement;
    }

    container.innerHTML = "";
    if (!q) return window.location.href = "/";
    searchquery.value = q;
    const data = findQueryData(q);

    if (data) {
        let section = searchpage.substring(1); 
        let block = data[section];
        console.log(section)

        if (block) {
            if (block.count !== undefined) count = block.count;
            document.title = `${q} - Юндекс: нашлось ${count}`;
            result.textContent = block.text || "";
            if (block.whiteSpace) result.style.whiteSpace = block.whiteSpace;

            if (section === "images"){
                result.textContent = `Картинке по запросу: ${q}`;
                if (block.text){
                    result.textContent = block.text;
                }
                document.title = `${q}: смотрите и скачивайте изображения — Юндекс Картинки`;
            }
            if (block.images) {
                block.images.forEach(src => {
                    const img = document.createElement("img");
                    img.src = src;
                    container.appendChild(img);
                });
            }

            if(section === "videos"){
                result.textContent = `Видео по запросу: ${q}`;
                document.title = `${q}: ${count}. видео найдено в Юндексе`;
            }
            if (block.video) {
                const iframe = document.createElement("iframe");
                iframe.src = block.video;
                iframe.width = "853";
                iframe.height = "480";
                iframe.style.backgroundColor = "#000"
                iframe.style.border = "none"
                iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;";
                iframe.allowFullscreen = true;
                container.appendChild(iframe);
            }

            if (section === "music"){
                result.textContent = `Музыка по запросу: ${q}`;
                document.title = `${q}: слушайте в Юндекс`;
            }
            if (block.music) {
                const iframe = document.createElement("iframe");
                iframe.src = block.music;
                iframe.width = "614";
                iframe.height = "244";
                iframe.style.border = "none"
                iframe.allow = "clipboard-write;";
                iframe.allowFullscreen = true;
                container.appendChild(iframe);
            }

            if (section === "translate"){
                result.textContent = `Перевод на русский: ${block.text}`;
                document.title = `${q}: Переводи в Юндекс`;
            }
            google.style.display = "none";
            return;
        }
        result.textContent = "К сожалению тут пока ничего нет :(";
        return;
    }

    else if (checkWebsite(q) === "no-protocol" || checkWebsite(q) === "https" || checkWebsite(q) === "http") {
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
        return;
    }

    else {
        if (searchpage === "#search"){
            result.textContent = "По вашему запросу ничего не найдено...";
            google.style.display = "block";
            googlelink.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
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

window.addEventListener("hashchange", renderesult);
