const engine = document.getElementById("engine")

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
    if (engine.value === "All") {
        let searchUrlGoogle = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        let searchUrlUndex = `/search/?q=${encodeURIComponent(query)}`;
        let searchUrlYa = `https://ya.ru/search/?text=${encodeURIComponent(query)}`;
        let searchUrlDuck = `https://duckduckgo.com/?t=h_&q=${encodeURIComponent(query)}`;
        let searchUrlBing = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrlGoogle, "_blank");
        window.open(searchUrlUndex, "_blank");
        window.open(searchUrlYa, "_blank");
        window.open(searchUrlDuck, "_blank");
        window.open(searchUrlBing, "_blank");
    }   
}