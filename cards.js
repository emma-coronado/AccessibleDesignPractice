async function addCards() {
    const temp = await fetch ('cardContents.json');
    const cardContent = await temp.json();
    console.log(temp);

    var cardHTML = "";

    cardContent.cards.forEach(element => {
        cardHTML += `<div class="card">
                        <div class="img-placeholder dark">
                            <p>Place Logo or Image for tool here</p>
                        </div>
                        <div class="card-body">
                            <h3 class="h4">${element.title}</h3>
                            <p>${element.description}</p>
                            <a href="${element.link}">Link to learn more about tool →</a>
                        </div>
                    </div>`;
    });

    document.getElementById('tool-cards').insertAdjacentHTML("beforeend", cardHTML);
}

addCards();