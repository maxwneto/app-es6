class App{
    constructor(){
        this.repositories = [];

        this.formEL = document.querySelector('#repo-form');

        this.registerHandler();
    }

    registerHandler(){
        //arrow functions concept
        this.formEL.onsubmit = event => this.addRepository(event);

    }
    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name: 'https://github.com/maxwneto',
            description: 'Especialista em identificar oportunidades para transforção Digital',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/maxwneto/app-es6',

        });

        console.log(this.repositories);
       
    }

}

new App();