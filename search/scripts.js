const count = 1;
const result = document.getElementById("result");
const searchquery = document.getElementById("search-query");
const googlelink = document.getElementById("googlelink");
const google = document.getElementById("google");
const container = document.getElementById("amity-container");
const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');
if (q === null || q ===""){
    window.location.href = "/"
} else{
    searchquery.value = q
    if (q.toLowerCase() === "the cutest witch ever" || q.toLowerCase() === "самая милая ведьма на свете"){
        document.title = `${q} - Юндекс: нашлось ${count}`;
        result.textContent = "Конечно же Эмити Блайт!"
        const img1 = document.createElement("img");
        img1.src = "/assets/img/AmityBlight.png";
        img1.alt = "Эмити Блайт";
        container.appendChild(img1);
    }
    else if (q.toLowerCase() === "amity blight" || q.toLowerCase() === "эмити блайт"){
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
    else{
        result.textContent = "По вашему запросу ничего не найдено попробуйте поиск наших конкурентов: "
        google.style.display = "block";
        googlelink.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
    }
}
