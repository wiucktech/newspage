const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear')
icon.onclick = function() {
    search.classList.toggle('active');
};
clear.onclick = function() {
    document.getElementById('MySearch').value = '';
};

window.onload = () => {
    let input = document.querySelector('#text');
  input.oninput = function() {
    let value = this.value.trim();
    let list = document.querySelectorAll('h2 p'); 

     if(value != '') {
        list.forEach(elem => {
           if(elem.InnerHTML.search(value) == -1) {
            elem.classList.add('hide');
        } else {
            list.forEach(elem => {
                elem.classList.remove('hide')
            }
        }
        });
    }
    console.log(this.value);
    
  };
};
