/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var crypto = require('crypto');

exports.encrypt = function(text,key){
	var cipher = crypto.createCipher('aes-256-cbc',key);
	var encipheredContent = cipher.update(text,'utf8','hex');
	encipheredContent += cipher.final('hex');
	return encipheredContent;
}
exports.decrypt = function(text,key){
	var decipher = crypto.createDecipher('aes-256-cbc',key);
	var decipheredPlaintext = decipher.update(text,'hex','utf8');
	decipheredPlaintext += decipher.final('utf8');
	return decipheredPlaintext;
}