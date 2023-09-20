fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById("data-container");
        let authors = "";
        data.forEach(a => authors += `Автор: ${a.author}<br>`);
        dataContainer.innerHTML = authors;
        console.log(data);
    })
    .catch(error => {
        console.error("Ошибка при запросе данных:", error);
    });
