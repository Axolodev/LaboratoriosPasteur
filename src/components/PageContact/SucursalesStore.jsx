import { observable, decorate, action } from 'mobx';

class _SucursalesStore {
	sucursales = [];
	arrivedData = false;
	
	constructor() {
		this.fetchSucursales();
	}

	fetchSucursales = () => {
		this.sucursales = [
			{ id: 1, nombre: 'Suc. Valle Soleado', direccion: 'Ave. Israel Cavazos No. 342, Col. Valle Soleado, Guadalupe, N.L.', latitud: 25.645376, longitud: -100.191684 },
			{ id: 2, nombre: 'Suc. Valle Soleado', direccion: 'Ave. Israel Cavazos No. 342, Col. Valle Soleado, Guadalupe, N.L.', latitud: 25.648376, longitud: -100.199705 },
			{ id: 3, nombre: 'Suc. Valle Soleado', direccion: 'Ave. Israel Cavazos No. 342, Col. Valle Soleado, Guadalupe, N.L.', latitud: 25.655559, longitud: -100.199995 },
			{ id: 4, nombre: 'Suc. Valle Soleado', direccion: 'Ave. Israel Cavazos No. 342, Col. Valle Soleado, Guadalupe, N.L.', latitud: 25.666392, longitud: -100.187814 },
			{ id: 5, nombre: 'Suc. Valle Soleado', direccion: 'Ave. Israel Cavazos No. 342, Col. Valle Soleado, Guadalupe, N.L.', latitud: 25.673432, longitud: -100.192929 }
		];
		this.arrivedData = true;
	}

}

let SucursalesStore = decorate(_SucursalesStore, {
	sucursales: observable,
	arrivedData: observable,
	fetchSucursales: action
});

export default new SucursalesStore();