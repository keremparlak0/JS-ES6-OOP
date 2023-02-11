const form = document.querySelector("#film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.querySelector("#clear-films")



// UI object start
const ui = new UI()
// Storage object create
const storage = new Storage()
//↓↓↓↓↓↓↓↓ All event listeners ↓↓↓↓↓↓↓↓
eventListeners()
function eventListeners() {
    form.addEventListener("submit", addFilm) // Form gönderildiğinde...
    document.addEventListener("DOMContentLoaded", function() {
        let films = storage.getFilmsFromStorage()
        ui.loadAllFilms(films)
    })//Sayfa yenilendiğinde kayıtlı filmleri Filmler table'ına yükler

    cardBody.addEventListener("click", deleteFilm)
    clear.addEventListener("click", clearAllFilms)
}
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm alanları doldurun!", "danger")//Hata mesajı
    }else{
        const newFilm = new Film(title, director, url)
        ui.addFilmToUI(newFilm) //Arayüze film ekleme
        storage.addFilmToStorage(newFilm) //Storage'a film ekleme
        ui.displayMessages("Film başarıyla eklendi!", "success")//Onaylama mesajı

    }
    ui.clearInputs(titleElement, directorElement, urlElement)

    e.preventDefault() //bu formun submit edilmesi önlemek için...
}
function deleteFilm(e){
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target) //Arayüzden film kaldırma
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)//Filmin insmini veren kod
        
        ui.displayMessages("Silme işlemi başarılı!", "success")
    }
}
function clearAllFilms() {
    if (confirm("Tüm filmleri silmek istediğinize emin misiniz?")) {
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromStorage()
    }
    
}