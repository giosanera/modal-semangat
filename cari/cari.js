// data anomali

const data = [
	'How to become JS expert',
	'JS is Javascript',
	'Coding is Fun',
	'Programmer do coding everyday',
	'Everyday is fun'
];







// selector yang dibutuhkan


const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const search = document.getElementsByName('keyword')[0];
const data_section = document.getElementsByClassName('data')[0];



// handle event

btnSearch.addEventListener('click', event => {
    searchData();
    data_section.classList.remove('d-flex')
});

btnClear.addEventListener('click', event => {
    search.value = "";
    data_section.classList.add('d-flex')
})


    // data value
    search.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
            searchData();
            data_section.classList.remove('d-flex')
        }
    });




// func melakukan pencaraian data
function searchData(){
    // ketika input diketik ubah ke toLowerCase()
    // buat variabel baru buat nampung

    const search_value = search.value.toLowerCase();

    // cloning data anomali diatas dengan slice[0] dan array dimulai dari 0

    const data_filtered = data.slice(0);
    
    // lakukan perulanmgan ketika data diketik berdasarkan "keyword " apakah ada atu tidak
    data_section.innerHTML = "";
    for (let i = 0; i < data_filtered.length; i++) {
        if (data_filtered[i].toLowerCase().includes(search_value)) {
            
            // maka lakukan ambil alih lis data a href default menjadi data anomali berdasarkan keyword

         
                   
            data_section.innerHTML += `<a href="#">${data_filtered[i]}</a>`
        }
        
    }






}
