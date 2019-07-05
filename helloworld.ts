class Helloworld extends HTMLElement {
   private tooltipContainer:  ;

    constructor() {
        super();
    }

    connectedCallback() {
        // method will be called when custom element has been connected to the document DOM for the first time
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?) ';
        tooltipIcon.addEventListener('mouseenter', this.showToolTip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this.hideTooltip.bind(this)); // eventlistener pointer
        this.appendChild(tooltipIcon);
    }

    private showToolTip() {
        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.textContent = 'Hello World Webcomponent!';
        this.appendChild(this.tooltipContainer);
    }

    private hideTooltip() {
        this.removeChild(this.tooltipContainer);
    }

}


customElements.define('uc-helloworld', Helloworld);

