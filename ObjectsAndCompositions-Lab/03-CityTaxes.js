function cityTaxes(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes: function collectTaxes() {
            return (this.treasury += this.population * this.taxRate);
        },

        applyGrowth: function applyGrowth(percent) {
            this.population += Math.floor((this.population * percent) / 100);
        },

        applyRecession: function applyRecession(percent) {
            this.treasury -= Math.ceil((this.treasury * percent) / 100);
        },
    };

    return city;
}

cityTaxes();
