const engine = document.getElementById("engine");
const urlParams = new URLSearchParams(window.location.search);
const s = urlParams.get('s');

function urlsearch(event) {
    event.preventDefault();
    const query = document.getElementById("search-query").value;
    if (query.startsWith("https://") || query.startsWith("http://")) {
        window.location.href = query;
    }
    else {
        searchtext(event);
    }
}

if (s === "Google") {
    engine.value = "Google";
}
if (s === "Undex") {
    engine.value = "Undex";
}
if (s === "Yandex") {
    engine.value = "Yandex";
}
if (s === "DuckDuckGo") {
    engine.value = "DuckDuckGo";
}
if (s === "Bing") {
    engine.value = "Bing";
}

function searchtext(event) {
    event.preventDefault();
    const query = document.getElementById("search-query").value;
    if (query.trim() === "") {
        return false;
    }

    if (engine.value === "Google") {
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
    if (engine.value === "Undex") {
        let searchUrl = `/search/?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
    if (engine.value === "Yandex") {
        let searchUrl = `https://ya.ru/search/?text=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
    if (engine.value === "DuckDuckGo") {
        let searchUrl = `https://duckduckgo.com/?t=h_&q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
    if (engine.value === "Bing") {
        let searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
}