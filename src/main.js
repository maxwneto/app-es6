class App {
    //crio construtor
    constructor() {
        //crio vetor para receber objetos/repositorios
        this.repositories = [];
        
        //crio objeto que irá receber referencia do ids form e ul
        this.formEL = document.querySelector('#repo-form');
        this.listEl = document.querySelector('#repo-list');

        //
        this.registerHandler();
    }

    registerHandler() {
        //quanto usuario for submetido  será retornando o metodo addrepository()
        this.formEL.onsubmit = event => this.addRepository(event);

    }

    //metodo repositorio  instancia objetos no vetor repositories
    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'https://github.com/maxwneto',
            description: 'Especialista em identificar oportunidades para transforção Digital',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/maxwneto/app-es6',

        });
        //chamada do metodo render
        this.render();

    }
    //metodo  que irá  inserir repositorio no form => ul
    render() {
        //atribui valores em branco para o formulário
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            //cria e seta objeto img
            let imgEL = document.createElement('img');
            imgEL.setAttribute('src', repo.avatar_url);

            //cria objeto strong e inseri nome
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));
            
            //cria objeto p e insere descriçao
            let descriptionEL = document.createElement('p');
            descriptionEL.appendChild(document.createTextNode(repo.description));

            //cria objeto a e inseri texto
            let linkEL = document.createElement('a');
            linkEL.setAttribute('target', '_blank');
            linkEL.appendChild(document.createTextNode('Acessar'));

            //cria elemento li e insere no mesmos os objetos criados anteriormente
            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEL);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEL);
            listItemEl.appendChild(linkEL);

            //inseri objeto listItemEl em listEl(#repo-list)
            this.listEl.appendChild(listItemEl);

        });
    }

}//chama classe new App;
new App();