class Virykle {
    constructor(selector, elementsCount) {
        this.selector = selector;
        this.elementsCount = elementsCount;         // kaitlentes pavirsiai / kaitvietes

        this.DOM = null;
        this.price = 1000;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector() ||
            !this.isValidElementsCount()) {
            console.log('fail');
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    findElementBySelector() {
        // https://discord.com/channels/571393319201144843/833468929020133416/848961821809705041
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    isValidElementsCount() {
        if (typeof this.elementsCount !== 'number' ||
            !isFinite(this.elementsCount) ||
            this.elementsCount <= 0 ||
            this.elementsCount % 1 !== 0) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = `<div class="virykle">
                        <div class="kaitlentes">
                            <div class="kaitlente"></div>
                            <div class="kaitlente"></div>
                            <div class="kaitlente"></div>
                            <div class="kaitlente"></div>
                        </div>
                        <div class="jungikliai">
                            <div class="jungiklis"></div>
                            <div class="jungiklis"></div>
                            <div class="jungiklis"></div>
                            <div class="jungiklis"></div>
                        </div>
                    </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Virykle }
/*
pavyzdziai

this.DOM = document.querySelector(this.selector);
Pirmas variatas
if (!this.DOM) {     // !null -> true
    return false;
}
return true;
Pilnai užrašom if-else
if (!this.DOM) {
    return false;
} else {
    return true;
}
Iš neigiamo klausimo padarom teigiamą klausimą
if (this.DOM) {
    return true;
} else {
    return false;
}

Galim perdaryti į ternarį
return this.DOM ? true : false;
Konvertuojame iš "Node object / null" į "true/false" tipą
return !!this.DOM;
*/