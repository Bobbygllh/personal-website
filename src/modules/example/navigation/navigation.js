import { LightningElement } from 'lwc';

export default class Navigation extends LightningElement {

    handleNavItemClick(event) {
        const choice = event.currentTarget.dataset.item;
        event.preventDefault();
        this.dispatchEvent(
            new CustomEvent('categorychange', {
                detail: choice,
                bubbles: true
            })
        );
    }
}
