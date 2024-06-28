// RECEBER RESPOSTA DA API!
const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresponse.status === 200) {
        const data = await APIresponse.json();
        return data;
        console.log(data);
    }

};
