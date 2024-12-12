const shedule = [];

function showMenu() {
    const choice = promt("Що ви хочете зробити? 1.Додати подію; 2.Переглянути розклад; 3.Вийти");
    switch (choice){
        case "1":
            addEvent();
            break;
        case "2":
            alert ("До побачення!");
            break;
        default:
            alert ("Будь ласка, виберіть правильний варіант");
            showMenu();
    
    }
}

function addEvent() {
    const event = prompt("Введіть подію у форматі: 10:00 Сніданок");
    if (event) {
        schedule.push(event);
        alert("Подію додано!");
    } else {
        alert("Подія не була додана.");
    }
    showMenu();
}
