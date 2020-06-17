function getSpelersLijst() {

    fetch("/restservices/spelers/spelerslijst", {method: 'GET', headers:{'Authorization': 'Bearer ' + window.sessionStorage.getItem("myJWT")}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //debugger;
            let replaceHTML ="";
            //Verwerk het json antwoord van de service in een tabel (via de array van spelers)
            let spelerArr = data;
            //per array rij een speler
            let btn = document.createElement('input');
            btn.type = "button";
            btn.className = "btn";
            // btn.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
            for (let i = 0; i < spelerArr.length; i++) {
                let spelerObj = spelerArr[i];
                replaceHTML += "<tr><td>"+spelerObj.id +"</td><td>"+spelerObj.voornaam+ "</td><td>"+spelerObj.achternaam+"</td><td>"+spelerObj.leeftijd+"</td><td>"+spelerObj.niveau+ "</td></tr>";
            }
            //Vervang de rijen in de html met de nieuwe rijen
            document.getElementById("Spelers").innerHTML = replaceHTML;

        })
        .catch(function (err) {
            console.log('error: ' + err);

        });
}

function openUpdateDialog() {
    const updateSpelerButton = document.getElementById('open-dialog-btn');
    const updateDialog = document.getElementById('updateDialog');
// addCityButton event listener om de dialog te tonen wanneer er op de button addCityButton geklikt word
    updateSpelerButton.addEventListener('click', function onOpen() {
        if (typeof updateDialog.showModal === "function"){
            updateDialog.showModal();
        }else{
            alert("Dialog not supported.") // Als er niks getoond kan worden komt er een error message.
        }
    })

}

function openDeleteDialog() {
    const deleteBtn = document.getElementById('verwijder-btn');
    const deleteDialog = document.getElementById('delete-dialog');

    deleteBtn.addEventListener('click', function onOpen() {
        if (typeof deleteDialog.showModal === "function"){
        deleteDialog.showModal();
        }else{
            alert("Dialog not supported.") // Als er niks getoond kan worden komt er een error message.
        }
    })
}