class Helloworld extends HTMLElement {
    constructor() {
        super();
        console.log('hello world');
    }
}


customElements.define('uc-helloworld', Helloworld);

