
function create_card() {
	var name = document.getElementById('name_pres').value;
    var associations = document.getElementById('assocs').value;
    var gender = document.getElementById('gender').value;
    console.log(gender);
    if (filename === ""){
        alert("Произошла ошибка! Выберите изображение!");
    }
    else{
        filename = filename.slice(4);
        if (gender == "Мужской") {
	        present = "Дорогой " + name + "! Я поздравляю тебя с Новым Годом! Желаю тебе " + associations + " и всего, чего есть на свете! Я уверен, ты отметишь НГ с позитивом!Удачи!";
            alert(present)	        
        }
        else if (gender == "Женский") {
            present = "Дорогая " + name + "! Я поздравляю тебя с Новым Годом! Желаю тебе " + associations + " и всего, чего есть на свете! Я уверен, ты отметишь НГ с позитивом!Удачи!";
            alert(present)
        }
        $("#result").append("<img src = 'img/card.png' height = '700' width = '500' ");
    }
    
}