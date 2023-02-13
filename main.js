// tady je místo pro náš program

// Vlastnosti a metody

let film = document.querySelector('.film');
let vypis = document.querySelectorAll('p');
let title = 'Ženy v běhu';

film.textContent = title;
vypis[1].innerHTML = '<strong style="color: #5d5d5d;">' + title.length + '</strong>' + ' znaků';
vypis[2].innerHTML = '<strong style="color: #5d5d5d;">' + title.toUpperCase() + '</strong>';
vypis[3].innerHTML = 'Prvních 5 písmen: ' + '<strong style="color: #5d5d5d;">' + title.slice(0,5) + '</strong>';
vypis[4].innerHTML = 'Posledních 5 písmen: ' + '<strong style="color: #5d5d5d;">' + title.slice(title.length - 5, title.length) + '</strong>';


// E-maily

let button = document.querySelectorAll('.button');

button[0].addEventListener('click',
  function() {
	let vstupEmail = prompt('E-mail:');

	if (vstupEmail == '') {
        alert('E-mail je povinný údaj');
    } else if ((vstupEmail.indexOf('@')) < 1){
        alert('Nesprávný formát e-mailu');
    } else {

        let atIndex = vstupEmail.indexOf('@');
        let name = vstupEmail.slice(0, atIndex);
        let server = vstupEmail.slice(atIndex + 1);

        const parsedEmail = {
            userName: name,
            domain: server,
        }

        const { userName, domain } = parsedEmail;

		let vysledek = document.querySelector('.vystup');
		vysledek.innerHTML = `<p>Uživatelské jméno: <span style="color: #5d5d5d;">${userName}</span></p>`;
        vysledek.innerHTML += `<p>Doména: <span style="color: #5d5d5d;">${domain}</span></p>`;

		button[0].classList.add('hidden');
	}
  }
);

function removeDiacritics(inputText) {
    //odstaní diakritiku z textu, převede na malé písmena
    //příklad: removeDiacritics("a ěšč řžýáíéÉÍÁÝŽŘČŠĚĎŤŇÔŮÚ")
    //výstup:                  > a esc rzyaieEIAYZRCSEDTNOOU
    console.log(inputText);

    var r = inputText.toLowerCase();
    r = r.replace(new RegExp(/\s/g), "-");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/[æ]/g), "ae");
    r = r.replace(new RegExp(/[çč]/g), "c");
    r = r.replace(new RegExp(/[ď]/g), "d");
    r = r.replace(new RegExp(/[èéêëě]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/[ñň]/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[œ]/g), "oe");
    r = r.replace(new RegExp(/[ř]/g), "r");
    r = r.replace(new RegExp(/[š]/g), "s");
    r = r.replace(new RegExp(/[ť]/g), "t");
    r = r.replace(new RegExp(/[ůùúûü]/g), "u");
    r = r.replace(new RegExp(/[ýÿ]/g), "y");
    r = r.replace(new RegExp(/[ž]/g), "z");
    // r = r.replace(new RegExp(/\W/g), ""); //non-word character //BOHUŽEL i "-"
    console.log(r);
    return r;
}


// Doručování

button[1].addEventListener('click',
  function() {
	let vstupStreet = prompt('Ulice:');

	if (vstupStreet == '') {
        alert('Ulice je povinný údaj');
    } else {
        let vstupNumber = prompt('Číslo:');

        if (vstupNumber == '') {
            alert('Číslo je povinný údaj');
        } else {
            let vstupCity = prompt('Město:');

            if (vstupCity == '') {
                alert('Město je povinný údaj');
            } else {
                let vstupPostalCode = prompt('PSČ:');

                if (vstupPostalCode == '') {
                    alert('PSČ je povinný údaj');
                } else {
                    const address = {
                        street: vstupStreet,
                        number: vstupNumber,
                        city: vstupCity,
                        postalCode: vstupPostalCode,
                    }

                    const { street, number, city, postalCode } = address;

                    const content = `
                        <address>
                            <p>${street} ${number}</p>
                            <p>${city} ${postalCode}</p>
                        </address>
                    `;

                    document.body.innerHTML = content;

                    button[1].classList.add('hidden');
                }
            }
        }
    }
});