// RECEBER RESPOSTA DA API!
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImage = document.querySelector('img');
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let contadora;

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIresponse.status === 200) {
        const data = await APIresponse.json();
        return data;
    }

};

const renderPokemon = async (pokemon) => {

    
    pokemonName.textContent = "carregando..."
    pokemonImage.src ="https://i.gifer.com/Yg6z.gif"
    
     const data = await fetchPokemon(pokemon);
    
    if (data) {
        
       

        pokemonNumber.textContent = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].front_default
        input.value = ''
        contadora = data.id

        console.log(data)
    } else {
        pokemonName.textContent = 'não encontrado:c'
        pokemonNumber.textContent =''
        pokemonImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7Ic85mLJ3JN3h8zsaGQEqRXdfeNya7nn-A&s"

    }
};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

});


buttonPrev.addEventListener("click", () => {
    if (contadora > 1) { contadora-= 1
        renderPokemon(contadora)
        }

});

buttonNext.addEventListener("click", () => {
    if (contadora > 1) { contadora+= 1
        renderPokemon(contadora)
        }

}); 
renderPokemon(1);

