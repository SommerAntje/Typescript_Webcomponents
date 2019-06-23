class Helloworld extends HTMLElement {
   private tooltipContainer: any;

    constructor() {
        super();
    }

    connectedCallback() {
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

