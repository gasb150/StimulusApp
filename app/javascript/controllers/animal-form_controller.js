import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ['name', 'counter'];
  }
  render(evt){
    
    this.displayTarget.innerHTML = evt.detail[0].body.innerHTML
  }
}