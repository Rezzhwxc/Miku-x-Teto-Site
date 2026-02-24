document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('myModal');

    const btn = document.getElementById('regjs');
    
    const closeBtn = document.querySelector('.close');
    

    btn.addEventListener('click', function() {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    });


////////////////////////////////


    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
        err.innerHTML = "";
    }
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

/////////////////////////////////

document.getElementById('form').addEventListener("submit", check);

function check(ev) {
    ev.preventDefault();
    
    // Получаем форму
    let form = document.getElementById('form');
    
    // Получаем значения полей корректно
    let email = document.getElementById('mail').value.trim();
    let pass = document.getElementById('pass').value;
    let repass = document.getElementById('repass').value;
    
    console.log('Email: ' + email);
    console.log('Пароль: ' + pass);
    console.log('Проверка пароля: ' + repass);
    
    let error = "";
    let errElement = document.getElementById('err');
    
    // Сбрасываем предыдущие ошибки
    errElement.innerHTML = "";
    errElement.style.color = "dark-red";
    
    // Проверка 1: Пустые поля
    if (email === "" || pass === "" || repass === "") {
        error = 'Не заполнены данные';
    }
    // Проверка 2: Валидация email (базовая)
    else if (!isValidEmail(email)) {
        error = "Введите корректный email адрес";
    }
    // Проверка 3: Длина пароля
    else if (pass.length < 3) {
        error = "Пароль должен состоять минимум из 3 символов";
    }
    // Проверка 4: Совпадение паролей
    else if (pass !== repass) {
        error = "Пароли не совпадают";
    }
    
    if (error !== "") {
        errElement.innerHTML = error;
        console.clear()
    }
    else{
    alert("Все данные введены корректно!");}
    
    // Тут можно отправить данные на сервер
    // form.submit();
    
    // Или вывести в консоль
    console.log({
        email: email,
        password: pass
    });
    
    // Очистка формы после успешной проверки form.reset();
    
    return true;
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.') && email.length > 5;
}

// knopka
let toggleButton = document.getElementById('sidebarToggle');
let contentbox = document.querySelector('.scroll-box');
let strelka = document.querySelector('.strelka');
let txt = document.querySelectorAll('.text-link');
let linkimg = document.querySelectorAll('.icon-container');
let zagol = document.querySelector('.zagol');
let zagcollaps = document.getElementById('zag-collaps');

let boxup = document.querySelector('.boxup');

// ===== ЗАГРУЗКА СОСТОЯНИЯ =====
const savedState = localStorage.getItem('sidebarCollapsed');
if (savedState === 'true') {
    boxup.classList.add('collapsed');
    contentbox.classList.add('collapsed');
    toggleButton.classList.add('collapsed');
    strelka.classList.add('collapsed');
    zagol.classList.add('collapsed');
    zagcollaps.classList.add('collapsed');
    linkimg.forEach(el => el.classList.add('collapsed'));
    txt.forEach(el => el.classList.add('collapsed'));
    toggleButton.setAttribute('aria-label', 'Развернуть сайдбар');
}

// ===== КЛИК =====
toggleButton.addEventListener('click', () => {
    boxup.classList.toggle('collapsed');
    contentbox.classList.toggle('collapsed');
    toggleButton.classList.toggle('collapsed');
    strelka.classList.toggle('collapsed');
    zagol.classList.toggle('collapsed');
    zagcollaps.classList.toggle('collapsed');

    linkimg.forEach(el => el.classList.toggle('collapsed'));
    txt.forEach(el => el.classList.toggle('collapsed'));

    const isCollapsed = contentbox.classList.contains('collapsed');
    toggleButton.setAttribute('aria-label', isCollapsed ? 'Развернуть сайдбар' : 'Свернуть сайдбар');
    
    // ===== СОХРАНЕНИЕ =====
    localStorage.setItem('sidebarCollapsed', isCollapsed);
});