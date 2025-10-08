import { LightningElement, track, api } from 'lwc';
import { blogItems } from './individualblogs';

const RENDER_LWCS = {
    apexBP : false,
    lwcBP : false
}

export default class Blogs extends LightningElement {
    blogObjs = blogItems;
    isSelectionShown = false;
    @api 
    reset() {
        this.isSelectionShown = true;
        this.renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS));
    }

    @track renderLwcs = JSON.parse(JSON.stringify(RENDER_LWCS));

    connectedCallback() {
        this.isSelectionShown = true;
    }
   

    handleNavigate(event) {
        const choice = event.currentTarget.dataset.item;

        this.renderLwcs[choice] = true;
        this.isSelectionShown = false;
        // this.handleNavItemClick();
    }

    handleHistoryChange = (event) => {
        console.log('Browser history state changed via popstate event.');
    }
}