function apriTendina(event)
{
    const button = event.currentTarget;
    button.dataset.control=1;
    let control = document.querySelector('.fx_button2');
    if(control.dataset.control == 1)
    {
        const nascondi = document.querySelector('#barraRicerca');
        nascondi.classList.add('hidden');
        control.dataset.control=0;
        console.log("Barra di ricerca nascosta");
    }
    button.removeEventListener('click', apriTendina);

    const apri_tendina = document.querySelector('#tendina');
    apri_tendina.classList.remove('hidden');
    console.log("Tendina aperta");
    
    button.addEventListener('click', chiudiTendina);
}

function chiudiTendina(event)
{
    const button = event.currentTarget;
    button.dataset.control=0;
    button.removeEventListener('click', chiudiTendina);

    const chiudi_tendina = document.querySelector('#tendina');
    chiudi_tendina.classList.add('hidden');
    console.log("Tendina chiusa");
    button.addEventListener('click', apriTendina);
}

function selImg(event)
{
    let nuova_img = document.createElement('img');
    nuova_img.src=event.currentTarget.src;

    const modal_view = document.querySelector('#modal-view');
    modal_view.appendChild(nuova_img);
    const scroll=document.body.classList.add('no-scroll');

    modal_view.classList.add('flex')
    modal_view.classList.remove('hidden')
    nuova_img.addEventListener('click', DselImg);

}
function DselImg(event)
{
    let nuova_img = document.createElement('img');
    nuova_img.src=event.currentTarget.src;

    const modal_view = document.querySelector('#modal-view');
    modal_view.appendChild(nuova_img);
    const scroll=document.body.classList.remove('no-scroll')

    modal_view.classList.add('hidden')
    modal_view.classList.remove('flex')
    modal_view.innerHTML='';
    nuova_img.addEventListener('click', selImg);
}

function apribarraRicerca(event)
{
    const bottoneRicerca = event.currentTarget;
    bottoneRicerca.dataset.control=1;
    let control = document.querySelector('.fx_button1');

    if(control.dataset.control == 1)
    {
        const nascondi = document.querySelector('#tendina');
        control.dataset.control=0;
        nascondi.classList.add('hidden');
        console.log("Tendina chiusa");
    }
    bottoneRicerca.removeEventListener('click', apribarraRicerca);

    const barraR = document.querySelector('#barraRicerca');
    barraR.classList.remove('hidden');
    console.log("Ricerca aperta");

    bottoneRicerca.addEventListener('click', chiudibarraRicerca);

}

function chiudibarraRicerca(event)
{
    const bottoneRicerca = event.currentTarget;
    bottoneRicerca.dataset.control=0;
    bottoneRicerca.removeEventListener('click', chiudibarraRicerca);

    const barraR = document.querySelector('#barraRicerca');
    barraR.classList.add('hidden');
    console.log("Ricerca chiusa")

    bottoneRicerca.addEventListener('click', apribarraRicerca);

}
function addPrefer(event)
{
    const premuto= event.currentTarget;
    if(premuto.dataset.index == 1)
    {   
        const newSegnalibro = document.querySelector('#segnalibroVuoto1');
        newSegnalibro.src="img/segnalibro_pieno.jpeg";
        newSegnalibro.removeEventListener('click', addPrefer);
        newSegnalibro.addEventListener('click', removePrefer);
        console.log("Img 1 aggiunta ai preferiti");
    }
    if(premuto.dataset.index == 2)
    {   
        const newSegnalibro = document.querySelector('#segnalibroVuoto2');
        newSegnalibro.src="img/segnalibro_pieno.jpeg";
        newSegnalibro.removeEventListener('click', addPrefer);
        newSegnalibro.addEventListener('click', removePrefer);
        console.log("Img 2 aggiunta ai preferiti");
    }
    if(premuto.dataset.index == 3)
    {   
        const newSegnalibro = document.querySelector('#segnalibroVuoto3');
        newSegnalibro.src="img/segnalibro_pieno.jpeg";
        newSegnalibro.removeEventListener('click', addPrefer);
        newSegnalibro.addEventListener('click', removePrefer);
        console.log("Img 3 aggiunta ai preferiti");
    }
}
function removePrefer(event)
{
    const premuto= event.currentTarget;
    if(premuto.dataset.index == 1)
    {   
        const newSegnalibro = document.querySelector('#segnalibroVuoto1');
        newSegnalibro.src="img/segnalibro_Vuoto.jpeg";
        newSegnalibro.removeEventListener('click', removePrefer);
        newSegnalibro.addEventListener('click', addPrefer);
        console.log("Img 1 rimossa dai preferiti");
    }
    if(premuto.dataset.index == 2)
    {   
        const newSegnalibro = document.querySelector('#segnalibroVuoto2');
        newSegnalibro.src="img/segnalibro_Vuoto.jpeg";
        newSegnalibro.removeEventListener('click', removePrefer);
        newSegnalibro.addEventListener('click', addPrefer);
        console.log("Img 2 rimossa dai preferiti");
    }
    if(premuto.dataset.index == 3)
    {   
        const newSegnalibro = document.querySelector('#segnalibroVuoto3');
        newSegnalibro.src="img/segnalibro_Vuoto.jpeg";
        newSegnalibro.removeEventListener('click', removePrefer);
        newSegnalibro.addEventListener('click', addPrefer);
        console.log("Img 3 rimossa dai preferiti");
    }
}

//BARRA NAVIGAZIONE: MENU A TENDINA
let button= document.querySelector('.fx_button1');
button.addEventListener('click', apriTendina);

//HEADER 2: SELEZIONE IMMAGINI
let buttonImgs = document.querySelectorAll('.fx_img')
for(let el of buttonImgs){
    el.addEventListener('click', selImg);
}
//BARRA NAVIGAZIONE: BARRA DI RICERCA
let buttonRicerca = document.querySelector('.fx_button2');
buttonRicerca.addEventListener('click', apribarraRicerca);

//HEADER 3: AGGIUNGI/RIMUOVI PREFERITI
const buttonPreferiti1 = document.querySelector('#segnalibroVuoto1');
buttonPreferiti1.addEventListener('click', addPrefer);
const buttonPreferiti2 = document.querySelector('#segnalibroVuoto2');
buttonPreferiti2.addEventListener('click', addPrefer);
const buttonPreferiti3 = document.querySelector('#segnalibroVuoto3');
buttonPreferiti3.addEventListener('click', addPrefer);
