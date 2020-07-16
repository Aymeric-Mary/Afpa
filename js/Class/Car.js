class Car {
    /**
     * Créer une nouvelle voiture
     * @param {string} initRegistration - La plaque d'immatriculation de la voiture
     * @param {string} initColor - La couleur de la voiture
     * @param {number} initWeight - Le poids de la voiture
     * @param {number} initPower - La puissance de la voiture
     * @param {number} initTankCapacity - La Capacité du réservoir de la voiture
     * @param {number} initNbPlaces - Le nombre de place de la voiture
     */
    constructor(initRegistration, initColor, initWeight, initPower, initTankCapacity, initNbPlaces) {
        let registration;
        let color;
        let weight;
        let power;
        let tankCapacity;
        let nbPlaces;

        if (this.registrationIsValid(initRegistration)) {
            registration = initRegistration;
        }
        /** @return {string} */
        this.getRegistration = function () {
            return registration;
        }
        if (this.colorIsValid(initColor)) {
            color = initColor;
        }
        /** @return {string} */
        this.getColor = function () {
            return color;
        }
        /** @param {string} value */
        this.setColor = function (value) {
            if (this.colorIsValid(value)) {
                color = value;
            }
        }
        if (this.weightIsValid(initWeight)) {
            weight = initWeight;
        }
        /** @return {number} */
        this.getWeight = function () {
            return weight;
        }
        if (this.powerIsValid(initPower)) {
            power = initPower;
        }
        /** @return {number} */
        this.getPower = function () {
            return power;
        }
        if (this.tankCapacityIsValid(initTankCapacity)) {
            tankCapacity = initTankCapacity;
        }
        /** @return {number} */
        this.getTankCapacity = function () {
            return tankCapacity;
        }
        if (this.nbPlacesIsValid(initNbPlaces)) {
            nbPlaces = initNbPlaces;
        }
        /** @return {number} */
        this.getNbPlaces = function () {
            return nbPlaces;
        }
        let levelFuel = 5;
        /** @return {number} */
        this.getLevelFuel = function () {
            return levelFuel;
        }
        /** @param {number} value */
        this.setLevelFuel = function (value) {
            if (this.levelFuelIsValid(value)) {
                levelFuel = value;
            }
        }
        let insured = false;
        /** @return {boolean} */
        this.getinsured = function () {
            return insured;
        }
        /** @param {boolean} value */
        this.setinsured = function (value) {
            if (this.insuredIsValid(value)) {
                insured = value;
            }
        }
        let msg = "Bienvenue à bord. \n";
        /** @return {string} */
        this.getMsg = function () {
            return msg;
        }
        /** @param {string} value */
        this.setMsg = function (value) {
            if (this.msgIsValid(value)) {
                msg = value;
            }
        }
    }


    /**
     * Vérifie la validité de l'attribut registration
     * @param {string} registration
     * @return {boolean}
     */
    registrationIsValid(registration) {
        let regex = new RegExp('^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$');
        if (regex.test(registration)) {
            return true;
        } else {
            throw new Error("Format de la plaque d'immatriculation invalide.");
            return false;

        }
    }

    /**
     * Vérifie la validité de l'attribut color
     * @param {string} color
     * @return {boolean}
     */
    colorIsValid(color) {
        let colors = ["bleu", "gris", "marron", "orange", "rouge", "violet", "blanc", "jaune", "noir", "rose", "vert"];
        if (colors.includes(color.toLowerCase())) {
            return true;
        } else {
            throw new Error("Couleur invalide, veuillez entrer une couleur valide : Bleu, Gris, Marron, Orange, Rouge, Violet, Blanc, Jaune, Noir, Rose, Vert");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut weight
     * @param {number} weight
     * @return {boolean}
     */
    weightIsValid(weight) {
        if (Number.isInteger(weight) && weight > 0 && weight <= 1500) {
            return true;
        } else {
            throw new Error("Valeur de l'attribut weight incorrect, veuillez entrer un nombre positif inférieur à 1500");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut power
     * @param {number} power
     * @return {boolean}
     */
    powerIsValid(power) {
        if (Number.isInteger(power) && power > 0 && power <= 900) {
            return true;
        } else {
            throw new Error("Valeur de l'attribut power incorrect, veuillez entrer un entier positif inférieur à 900");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut tankCapacity
     * @param {number} tankCapacity
     * @return {boolean}
     */
    tankCapacityIsValid(tankCapacity) {
        if (typeof tankCapacity === 'number' && tankCapacity > 0 && tankCapacity <= 60) {
            return true;
        } else {
            throw new Error("Valeur de l'attribut tankCapacity incorrect, veuillez entrer un nombre positif inférieur à 60");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut nbPlaces
     * @param {number} nbPlaces
     * @return {boolean}
     */
    nbPlacesIsValid(nbPlaces) {
        if (Number.isInteger(nbPlaces) && nbPlaces >= 2 && nbPlaces <= 7) {
            return true;
        } else {
            throw new Error("Valeur de l'attribut nbPlaces incorrect, veuillez entrer un entier compris entre 2 et 7");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut levelFuel
     * @param {number} levelFuel
     * @return {boolean}
     */
    levelFuelIsValid(levelFuel) {
        if (typeof levelFuel === 'number') {
            return true;
        } else {
            throw new Error("Valeur de l'attribut levelFuel incorrect, veuillez entrer un nombre");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut insured
     * @param {boolean} insured
     * @return {boolean}
     */
    insuredIsValid(insured) {
        if (typeof insured === 'boolean') {
            return true;
        } else {
            throw new Error("Valeur de l'attribut insured incorrect, veuillez entrer un booléen");
            return false;
        }
    }

    /**
     * Vérifie la validité de l'attribut msg
     * @param msg
     * @return {boolean}
     */
    msgIsValid(msg) {
        if (typeof msg === 'string') {
            return true;
        } else {
            throw new Error("Valeur de l'attribut insured incorrect, veuillez entrer une chaîne de caractère");
            return false;
        }
    }

    /**
     * Repeint la voiture.
     * @param {string} color - La nouvelle couleur
     */
    repaint(color) {
        if (color === this.getColor()) {
            this.setMsg(this.getMsg() + "Vous avez rafraichit la couleur de votre voiture.\n");
        } else {
            this.setColor(color);
            this.setMsg(this.getMsg() + "Vous avez changé la couleur de votre voiture.\n");
        }
    }

    /**
     * Remmet de l'essence dans le réservoir.
     * @param {number} quantity
     * Retourne le niveau d'essence après remplissage.
     * @return {number}
     */
    refuel(quantity) {
        if (quantity <= this.getTankCapacity() - this.getLevelFuel()) {
            this.setLevelFuel(this.getLevelFuel() + quantity);
            this.setMsg(this.getMsg() + "Vous avez fais le plein.\n");
        } else {
            this.setMsg(this.getMsg() + "Votre réservoir est trop petit.\n");
        }
        return this.getLevelFuel();
    }

    /**
     * Déplace la voiture
     * @param {number} distance
     * @param {number} meanSpeed
     */
    move(distance, meanSpeed) {
        let consumption = this.consumptionTotal(distance, meanSpeed);
        if (this.getLevelFuel() >= consumption) {
            this.setLevelFuel(this.getLevelFuel() - consumption);
            this.setMsg(this.getMsg() + "En vous déplaçant, vous avez consommé : " + consumption + " litres d'essence.\n" + "Il reste " + this.getLevelFuel() + " litres dans votre réservoir.\n");
        } else {
            this.setMsg(this.getMsg() + "Vous n'avez pas suffisamment d'essence pour faire ce trajet.\n");
        }
    }

    /**
     * Retourne toutes les caractéristiques de la voiture.
     * @return {string}
     */
    toString() {
        return "Caractéristiques de la voiture : \n" +
            "Immatriculation : " + this.getRegistration() + "\n" +
            "Couleur : " + this.getColor() + "\n" +
            "Poids : " + this.getWeight() + " Kg" + "\n" +
            "Puissance : " + this.getPower() + " CV" + "\n" +
            "Capacité du réservoir : " + this.getTankCapacity() + " Litres" + "\n" +
            "Nombre de places : " + this.getNbPlaces() + "\n" +
            "Niveau d'essence : " + this.getLevelFuel() + " Litres" + "\n" +
            "Assuré ? " + (this.getinsured() ? "Oui" : "Non");
    }

    /**
     * Calcule la consommation totale d'un trajet
     * @param distance - La distance parcouru en Km
     * @param meanSpeed - La vitesse moyenne en Km / Heures
     * Retourne la valeur de cette consommation
     * @return {number}
     */
    consumptionTotal(distance, meanSpeed) {
        let consumptionPer100Km;
        if (meanSpeed < 50) {
            consumptionPer100Km = 10;
        } else if (meanSpeed >= 50 && meanSpeed < 90) {
            consumptionPer100Km = 5;
        } else if (meanSpeed >= 90 && meanSpeed < 130) {
            consumptionPer100Km = 8;
        } else {
            consumptionPer100Km = 12;
        }
        return (consumptionPer100Km / 100) * distance;
    }
}
