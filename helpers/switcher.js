const d = document,
    l = localStorage,
    toggleTheme = d.getElementById('toggle-theme'),
    toggleIcon = d.getElementById('toggle-icon'),
    toggleText = d.getElementById('toggle-text'),
    toggleColors = d.getElementById('toggle-colors');

export function darkMode(){

    if(l.getItem('theme') == 'dark'){
        d.body.classList.add('dark');
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
        toggleText.textContent = "Light Mode";
    }else if(l.getItem('theme') == 'light'){
        d.body.classList.remove('dark');
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
        toggleText.textContent = "Dark Mode";
    }

    toggleTheme.addEventListener('click', (e)=>{
        if(d.body.classList.contains('dark')){
            toggleIcon.classList.replace('fa-sun', 'fa-moon')
            toggleText.textContent = "Dark Mode"
            l.setItem('theme', 'light');
        }else{
            toggleIcon.classList.replace('fa-moon', 'fa-sun')
            toggleText.textContent = "Light Mode"
            l.setItem('theme', 'dark');
        }
        d.body.classList.toggle('dark');
    })
}

export function colorMode(){

    if(l.getItem('color')){
        d.documentElement.style.setProperty('--primary-color', l.getItem('color'));
    }

    toggleColors.addEventListener('click', (e) =>{
        if(e.target.matches('.colors__item')){
            d.documentElement.style.setProperty('--primary-color', e.target.dataset.color);
            l.setItem('color', e.target.dataset.color);
        }
    })
}