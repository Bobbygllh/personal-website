import { LightningElement, track, api } from 'lwc';
import { blogItems } from './individualblogs';

export default class Blogs extends LightningElement {
    blogObjs = blogItems;
    isSelectionShown = false;
    @api 
    reset() {
        this.isSelectionShown = true;
    }

    connectedCallback() {
        // Register the popstate event listener when the component is connected
        window.addEventListener('popstate', this.handleHistoryChange);
    }

    disconnectedCallback() {
        // Remove the event listener when the component is disconnected
        window.removeEventListener('popstate', this.handleHistoryChange);
    }

    @track renderLwcs = {
         apexBP : false,
         lwcBP : false
    }

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