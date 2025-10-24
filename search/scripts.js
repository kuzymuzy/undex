let count = 1;
const result = document.getElementById("result");
const searchquery = document.getElementById("search-query");
const googlelink = document.getElementById("googlelink");
let sitedomain = document.getElementById("site-domain");
let sitedescription = document.getElementById("site-description");
let siteicon = document.getElementById("site-icon");
const google = document.getElementById("google");
const container = document.getElementById("amity-container");
const urlParams = new URLSearchParams(window.location.search);
let previousElement = null;
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
        else if (q.toLowerCase() === "рататуй"){
            if (searchpage === "#search") {
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = "Возможно вы имели в виду: Крыса Реми \n Крыса по имени Реми — талантливый повар, мечтающий готовить изысканные блюда, несмотря на то, что он крыса."
                result.style.whiteSpace = "pre-line";
                const img1 = document.createElement("img");
                img1.src = "/assets/img/Рататуй_2.png";
                img1.alt = "Рими";
                const img2 = document.createElement("img");
                img2.src = "/assets/img/Рататуй.png";
                img2.alt = "Рими";
                container.appendChild(img1);
                container.appendChild(img2);
            }
            else if (searchpage === "#images"){
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = `Картинки по запросу: ${q}`;
                const img1 = document.createElement("img");
                img1.src = "/assets/img/Рататуй_2.png";
                img1.alt = "Рими";
                const img2 = document.createElement("img");
                img2.src = "/assets/img/Рататуй.png";
                img2.alt = "Рими";
                container.appendChild(img1);
                container.appendChild(img2);
            }
            else {
                result.textContent = "К сожалению тут пока ничего нет :("
            }
        }
        else if (  q.toLowerCase() === "алексей" || q.toLowerCase() === "леша" || q.toLowerCase() === "лёша" || q.toLowerCase() === "лешка" || q.toLowerCase() === "лёшка" || q.toLowerCase() === "алеша" || q.toLowerCase() === "алёша" || q.toLowerCase() === "алешка" || q.toLowerCase() === "алёшка"){
            if (searchpage === "#search") {
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = "Возможно вы имели в виду: Рататуй \n\n Алексей — часто мягкий, ленивый, нерешительный, иногда хитрит и лицемерит, легко загнать под каблук."
                result.style.whiteSpace = "pre-line";
            }
            else if (searchpage === "#images"){
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = `Картинки по запросу: ${q}`;
                const img1 = document.createElement("img");
                img1.src = "/assets/img/Рататуй_2.png";
                img1.alt = "Рими";
                const img2 = document.createElement("img");
                img2.src = "/assets/img/Рататуй.png";
                img2.alt = "Рими";
                container.appendChild(img1);
                container.appendChild(img2);
            }
            else if (searchpage === "#videos"){
                document.title = `${q} - Юндекс: нашлось ${count}`;
                result.textContent = `Видео по запросу: ${q}`;
                const videocontainer = document.createElement("iframe");
                videocontainer.src = "https://vk.com/video_ext.php?oid=-155284657&id=456241496&hd=2&autoplay=1";
                videocontainer.width="853";
                videocontainer.height="480";
                videocontainer.style.backgroundColor = "#000";
                videocontainer.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;";
                videocontainer.allowFullscreen = true;
                videocontainer.frameBorder = "0";
                container.appendChild(videocontainer);
            }
            else {
                result.textContent = "К сожалению тут пока ничего нет :("
            }
        }
        else if (q.toLowerCase() === "the biggest mistake in life" || q.toLowerCase() === "самая большая ошибка в жизни"){
            count = 666;
            document.title = `${q} - Юндекс: нашлось ${count}`;
            result.textContent = "Доверять людям, точнее сближаться с ними, я знаю что нельзя, но я повторяю эту ошибку постоянно"
            google.style.display = "none";
        }
        else if (q.toLowerCase() === "motto for life" || q.toLowerCase() === "девиз по жизни"){
            count = 777;
            document.title = `${q} - Юндекс: нашлось ${count}`;
            result.textContent = "Мужчина царь каблук его корона \n\n Каблук но зато какой туфельки"
            result.style.whiteSpace = "pre-line";
            google.style.display = "none";
        }
        else if (q.toLowerCase() === "порно" || q.toLowerCase() === "porno"){
            count = -10;
            document.title = `${q} - Юндекс: нашлось ${count}`;
            result.textContent = "Что это такое? Ну так давай ручки от письки убрал."
            result.style.whiteSpace = "pre-line";
            google.style.display = "none";
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
