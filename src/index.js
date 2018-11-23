const klasa = require('klasa');

module.exports = {

	...klasa,

	MusicCommand: require('./lib/structures/MusicCommand'),
	MusicManager: require('./lib/structures/MusicManager'),

	util: require('./lib/util/util'),

	klasaUtil: klasa.util
};
