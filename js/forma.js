/* Pokretanje koda tek kada je cijela stranica (DOM) spremna. */
document.addEventListener("DOMContentLoaded", function() {

    /* Hud Typewritter (Početna za skener da mi ispisuje tekst) */
    const hudElement = document.getElementById('hud-loader');
    
    if (hudElement) {
        const poruke = [
            "> SYSTEM_BOOT: 2026_IR",
            "> LOCATION: SLAVONSKI BROD [45.16 N]",
            "> SCANNING GEAR... STATUS: OPTIMAL",
            "> IRON RIDE CORE // READY TO RUN."
        ];

        let i = 0;
        let j = 0;

        function tipkaj() {
            if (i < poruke.length) {
                if (j < poruke[i].length) {
                    hudElement.innerText = poruke[i].substring(0, j + 1);
                    j++;
                    setTimeout(tipkaj, 40);
                } else {
                    setTimeout(() => {
                        j = 0;
                        i++;
                        if (i < poruke.length) {
                            tipkaj();
                        }
                    }, 1500); 
                }
            }
        }
        tipkaj();
    }

const gumbVrh = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    /* Ako je korisnik skrolao više od 300px od vrha */
    if (window.pageYOffset > 300) {
        gumbVrh.classList.add('prikazi');
    } else {
        gumbVrh.classList.remove('prikazi');
    }
});

/* Funkcija za dodaj u košaricu  i izbacivanje prozora alert da je dodano*/
window.dodajUKosaricu = function(nazivProizvoda) {
    alert("Proizvod " + nazivProizvoda + " je uspješno dodan u vašu košaricu!");
};


   /* Kontakt forma (stranica Kontakt) */
    const kontaktForma = document.getElementById("kontaktForma");

    if (kontaktForma) {
        kontaktForma.addEventListener("submit", function(e) {
            e.preventDefault();

            let ime = document.getElementById("ime").value.trim();
            let email = document.getElementById("email").value.trim();
            let poruka = document.getElementById("poruka").value.trim();
            let status = document.getElementById("statusPoruke");

            if (ime === "" || email === "" || poruka === "") {
                status.textContent = "Sva polja su obavezna!";
                status.style.color = "red";
                return;
            }

            if (!email.includes("@")) {
                status.textContent = "Unesite ispravan email!";
                status.style.color = "red";
                return;
            }

            localStorage.setItem("kontakt", JSON.stringify({
                ime: ime,
                email: email,
                poruka: poruka
            }));

            status.textContent = "Podaci su uspješno spremljeni!";
            status.style.color = "green";
            kontaktForma.reset();
        });
    }
});

