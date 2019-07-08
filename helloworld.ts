class Helloworld extends HTMLElement {
   private tooltipContainer: HTMLElement;
   private tooltipText: string;

    constructor() {
        super();
        this.tooltipText = "Hover Tooltip"
    }

    connectedCallback() {
        if(this.hasAttribute('text')) {
            this.tooltipText = this.getAttribute('text');
        }

        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?) ';
        tooltipIcon.addEventListener('mouseenter', this.showToolTip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this.hideTooltip.bind(this)); // eventlistener pointer
        this.appendChild(tooltipIcon);
    }

    private showToolTip() {
        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.textContent = this.tooltipText;
        this.appendChild(this.tooltipContainer);
    }

    private hideTooltip() {
        this.removeChild(this.tooltipContainer);
    }

}


customElements.define('uc-helloworld', Helloworld);

