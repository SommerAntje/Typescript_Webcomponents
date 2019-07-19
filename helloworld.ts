class Helloworld extends HTMLElement {
   private tooltipContainer: HTMLElement;
   private tooltipText: string;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
              div {
                background-color: black;
                background-radius: 5%;
                color: #fff;
                position: absolute;
                z-index: 10;
              }  
            </style>
            <slot>Default Text</slot>
            <span>(?)</span>
        `;
    }

    connectedCallback() {

        if(this.hasAttribute('text')) {
            this.tooltipText = this.getAttribute('text');
        } else {
            this.tooltipText = "Default Hover Tooltip";
        }

        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this.showToolTip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this.hideTooltip.bind(this)); // eventlistener pointer
        this.shadowRoot.appendChild(tooltipIcon);
    }

    private showToolTip() {
        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.textContent = this.tooltipText;
        this.shadowRoot.appendChild(this.tooltipContainer);
    }

    private hideTooltip() {
        this.shadowRoot.removeChild(this.tooltipContainer);
    }

}


customElements.define('uc-helloworld', Helloworld);

