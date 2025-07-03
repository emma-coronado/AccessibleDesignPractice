async function addCards() {
    const temp = await fetch ('cardContents.json');
    const cardContent = await temp.json();
    console.log(temp);

    var cardHTML = "";

    cardContent.cards.forEach(element => {
        let imagePath = "assets/cardImages/" + element.imageFile;

        cardHTML += `<div class="card">
                        <img src="${imagePath}" class="card-img" alt="">
                        <div class="card-body light">
                            <h3 class="h4">${element.title}</h3>
                            <p>${element.description}</p>
                            <a href="${element.link}" title="${element.linkDesc}">Link to learn more about tool →</a>
                        </div>
                    </div>`;
    });

    document.getElementById('tool-cards').insertAdjacentHTML("beforeend", cardHTML);
}

addCards();