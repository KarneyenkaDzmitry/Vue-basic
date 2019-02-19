'use strict';

const app = new Vue({
    el: '#app',
    data: {
        player: 100,
        monster: 100,
        showStartBar: true,
        showFightBar: false,
        showLog: false,
        log: []
    },
    methods: {
        invert(name) {
            this[name] = !this[name];
        },
        getRandomNumber(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        start() {
            this.invert('showStartBar');
            this.invert('showFightBar');
            this.player = 100;
            this.monster = 100;
            this.showLog = false;
            this.log = [];
        },
        giveUp() {
            this.invert('showStartBar');
            this.invert('showFightBar');
        },
        attack(maxHit) {
            this.show();
            this.log.push({ player: { action: 'hit', points: this.getRandomNumber(maxHit) }, monster: { action: 'hit', points: this.getRandomNumber(maxHit) } });
            this.player = this.player - this.log[this.log.length - 1].player.points;
            this.monster = this.monster - this.log[this.log.length - 1].monster.points;
        },
        heal() {
            this.show();
            this.log.push({ player: { action: 'heal', points: this.getRandomNumber(15) }, monster: { action: 'hit', points: this.getRandomNumber(10) } });
            let result = this.player + this.log[this.log.length - 1].player.points - this.log[this.log.length - 1].monster.points;
            this.player = result > 100 ? 100 : result;
        },
        show() {
            if (this.log.length < 1) {
                this.invert('showLog');
            }
        },
        getMessage(object, character) {
            const pers = object[character];
            return pers.action === 'hit' ? `${character} hits ${character === 'person' ? 'monster' : 'person'} for ${pers.points}` : `${character} heals himself for ${pers.points}`
        }
    }
});