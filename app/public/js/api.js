function search() {
    let user = $('#inp-search').val();

    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(respText => {
         
            $('#nome').text(respText.data[0].owner.login);

            $('div.img').html('');
            $('div.img').css('border', 'none');
            $('div.img').append(`<img src="${respText.data[0].owner.avatar_url}">`);

            $('section.repositorios').html('');

            let str = `<h1 class="titulo">
                            <i class="fas fa-folder-open"></i>
                            Repositórios
                        </h1>
                        <hr>`;

            respText.data.forEach(element => {
               str += `
               <div class="rep-item">
                    <p class="titulo-card">${element.name}</p>
                    <p class="descricao">${element.description}</p>
                </div>
               `;
            });

            $('section.repositorios').append(str);
        })
        .catch(error => {
            $('#nome').text('Nenhum resultado encontrado');
            $('#formacao').text('');
            $('div.img').html('');


            $('section.repositorios').html('');
            $('section.repositorios').append(`
                <h1 class="titulo">
                    <i class="fas fa-folder-open"></i>
                    Repositórios
                </h1>
                <hr>`);
        })

    event.preventDefault()
}