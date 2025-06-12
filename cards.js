async function addCards() {
    const temp = await fetch ('cardContents.json');
    console.log(temp);

}

addCards();