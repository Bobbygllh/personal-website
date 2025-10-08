import { LightningElement, track, api } from 'lwc';
import { allProjectItems } from './items';
const RENDER_LWCS = {
    caseApi : false,
    lwcOSS : false
}

export default class Projects extends LightningElement {
    projectObjs = allProjectItems;
    isSelectionShown = false;
    @api 
    reset() {
        this.isSelectionShown = true;
        this.renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS))
    }

    @track renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS));

    connectedCallback() {
        this.isSelectionShown = true;
    }
   

    handleNavigate(event) {
        const choice = event.currentTarget.dataset.item;

        this.renderLwcs[choice] = true;
        this.isSelectionShown = false;
    }
}