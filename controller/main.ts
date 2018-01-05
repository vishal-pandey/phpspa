import * as $ from 'jquery';
import Loader from './loader';

class main {
	constructor(private loader:Loader) {
		this.loader.loadMain();
		this.loader.load();
		this.loader.link();
	}
}

var loader = new Loader();
var ob = new main(loader);
