import * as $ from 'jquery';
import Loader from './loader';

class main {
	constructor(private loader:Loader) {
		this.loader.load();
		this.loader.loadMain();
		this.loader.link();
	}
}

var loader = new Loader();
var ob = new main(loader);
