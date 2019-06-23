class Helloworld extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?) ';
        tooltipIcon.addEventListener('mouseenter', this.showToolTip.bind(this)); // eventlistener pointer
        this.appendChild(tooltipIcon);
        console.log('hello world');
    }

    private showToolTip() {
        const tooltipContainer:any = document.createElement('div');
        tooltipContainer.textContent = 'Hello World Webcomponent!';
        this.appendChild(tooltipContainer);
    }
}


customElements.define('uc-helloworld', Helloworld);

