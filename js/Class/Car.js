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
        /** @type {string} */
        let registration = initRegistration;
        /** @returns {string} */
        this.getRegistration = function () {
            return registration;
        }
        /** @type {string} */
        let color = initColor;
        /** @returns {string} */
        this.getColor = function () {
            return color;
        }
        /** @param {string} value */
        this.setColor = function (value) {
            if (typeof value !== 'string') {
                throw new Error("Veuillez entrer une chaîne de caractère pour l'attribut msg");
            } else {
                color = value;
            }
        }
        /** @type {number} */
        let weight = initWeight;
        /** @returns {number} */
        this.getWeight = function () {
            return weight;
        }
        /** @type {number} */
        let power = initPower;
        /** @returns {number} */
        this.getPower = function () {
            return power;
        }
        /** @type {float} */
        let tankCapacity = initTankCapacity;
        /** @returns {number} */
        this.getTankCapacity = function () {
            return tankCapacity;
        }
        /** @type {number} */
        let nbPlaces = initNbPlaces;
        /** @returns {number} */
        this.getNbPlaces = function () {
            return nbPlaces;
        }
        /** @type {number} */
        let levelFuel = 5;
        /** @returns {number} */
        this.getLevelFuel = function () {
            return levelFuel;
        }
        /** @param {number} value */
        this.setLevelFuel = function (value) {
            if (typeof value === "number") {
                throw new Error("Veuillez entrez un nombre pour l'attribut levelFuel");
            } else {
                levelFuel = value;
            }
        }
        /** @type {boolean} */
        let assured = false;
        /** @returns {boolean} */
        this.getAssured = function () {
            return assured;
        }
        /** @param {boolean} value */
        this.setAssured = function (value) {
            if (typeof value !== 'boolean') {
                throw new Error("Veuillez entrer un booléen pour l'attribut assured");
            } else {
                assured = value;
            }
        }
        /** @type {string} */
        let msg = "Bienvenue à bord. \n";
        /** @returns {string} */
        this.getMsg = function () {
            return msg;
        }
        /** @param {string} value */
        this.setMsg = function (value) {
            if (typeof value !== 'string') {
                throw new Error("Veuillez entrer une chaîne de caractère pour l'attribut msg.");
            } else {
                msg = value;
            }
        }
    }

    /**
     * Repeint la voiture.
     * @param {string} color - La nouvelle couleur
     * Retourne true si le changement de couleur a bien été effectué, false sinon.
     * @returns {boolean}
     */
    repaint(color) {
        if (typeof color === "string") {
            if (color === this.getColor()) {
                this.setMsg(this.getMsg() + "Vous avez rafraichit la couleur de votre voiture.\n");
            } else {
                this.setColor(color);
                this.setMsg(this.getMsg() + "Merci d'avoir changé la couleur de votre voiture.\n");
            }
            return true;
        } else {
            throw new Error("Veuillez entrer une chaine de caractère pour l'attribut color.");
            return false;
        }
    }

    /**
     * Remmet de l'essence dans le réservoir.
     * @param {number} quantity
     * Retourne le niveau d'essence après remplissage.
     * @returns {number}
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
     * @returns {string}
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
            "Assuré ? " + (this.getAssured()? "Oui": "Non");
    }

    /**
     * Calcule la consommation totale d'un trajet
     * @param distance - La distance parcouru en Km
     * @param meanSpeed - La vitesse moyenne en Litres / 100 Km
     * Retourne la valeur de cette consommation
     * @returns {number}
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
