class Kue {
    constructor(gula , asesoris , berat) {
        this._bahan = "tepung";
        this._gula = gula;
        this._asesoris = asesoris;
        this._berat = berat;
    }
    
    // GETTER

    get bahan() {
        return this._bahan;
    }

    get gula() {
        return this._gula;
    }

    get asesoris() {
        return this._asesoris;
    }

    get berat() {
        return this._berat;
    }

    // SETTER

    set gula(val) {
        this._gula = val;
    }

    set asesoris(val) {
        this._asesoris = val;
    }

    set berat(val) {
        this._berat = val;
    }
    
}


class KuePutu extends Kue {
    constructor (gulaLevel, ...args) {
        super(...args);
        this._gulaLevel = gulaLevel;
        this._bahan = ["tepung","telur"]
    }
    // GETTER
    get gulaLevel () {
        return this._gulaLevel;
    }

    // SETTER
    set gulaLevel(val) {
        this._gulaLevel = val;
    }
}


class KueCubit extends Kue {
    constructor (gulaLevel, ...args) {
        super(...args);
        this._gulaLevel = gulaLevel;
        this._bahan = ["tepung","telur"]
    }
    // GETTER
    get gulaLevel () {
        return this._gulaLevel;
    }

    // SETTER
    set gulaLevel(val) {
        this._gulaLevel = val;
    }
}

class KueKetawa extends Kue {
    constructor (gulaLevel, ...args) {
        super(...args);
        this._gulaLevel = gulaLevel;
        this._bahan = ["tepung","telur"]
    }
    // GETTER
    get gulaLevel () {
        return this._gulaLevel;
    }

    // SETTER
    set gulaLevel(val) {
        this._gulaLevel = val;
    }
}

const KuePutuSep = new KuePutu ("10" , "gula" , "kelapa", 10);
console.log (KuePutuSep);