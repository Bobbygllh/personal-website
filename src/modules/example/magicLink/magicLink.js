import { LightningElement, api } from 'lwc';

export default class MagicLink extends LightningElement {
    @api link;
    @api picture;
    @api label;
   
}
