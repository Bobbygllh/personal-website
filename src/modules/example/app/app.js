import { LightningElement, track } from 'lwc';
import { navigationItems } from './navitems';

export default class app extends LightningElement {
    currentNavigationItem = 'mainpage'; 
    @track navigationItems = navigationItems;

    connectedCallback() {
        this.navigationItems[this.currentNavigationItem].visible = true;
    }

    handleCategoryChange(event) {
        if (event) {
            this.template.querySelector("example-projects")?.reset();
            this.template.querySelector("example-blogs")?.reset();
            this.navigationItems[this.currentNavigationItem].visible = false;
            this.currentNavigationItem = event.detail;
            this.navigationItems[this.currentNavigationItem].visible = true;
        }
    }
    
}
