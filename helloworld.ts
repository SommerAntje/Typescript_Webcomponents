class Helloworld extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' ?';
        this.appendChild(tooltipIcon);
        console.log('hello world');
    }
}


customElements.define('uc-helloworld', Helloworld);

