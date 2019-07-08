class Helloworld extends HTMLElement {
   private tooltipContainer: HTMLElement;
   private tooltipText: string;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        if(this.hasAttribute('text')) {
            this.tooltipText = this.getAttribute('text');
        } else {
            this.tooltipText = "Default Hover Tooltip";
        }

        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?) ';
        tooltipIcon.addEventListener('mouseenter', this.showToolTip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this.hideTooltip.bind(this)); // eventlistener pointer
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position ="relative";

    }

    private showToolTip() {
        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.textContent = this.tooltipText;
        this.shadowRoot.appendChild(this.tooltipContainer);
        this.tooltipContainer.style.backgroundColor = "black";
        this.tooltipContainer.style.color= "white";
        this.tooltipContainer.style.position= "absolute";
        this.tooltipContainer.style.zIndex= "10";
        this.tooltipContainer.style.borderRadius="5%";
    }

    private hideTooltip() {
        this.shadowRoot.removeChild(this.tooltipContainer);
    }

}


customElements.define('uc-helloworld', Helloworld);

