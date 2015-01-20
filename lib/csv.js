var csv = module.exports

function parse(url, callback){
	// some download url
	var string = data
	return string.split(',')
}

csv.parseSync = function(url){
	var string = fs.readFileSync(url, 'utf8', function(err, data){
		if (err)
			throw err;
		return data;
	});

	return string.split(',');
}

csv.parseAsync = function(url, callback){
	var string = fs.readFile(url);
	return string.split(',');
}

csv.parsePipe = function(){

	return fs.createReadStream(url)
				.pipe(through2(function(chunk, enc, callback){
		
					for(var i=0; i<chunk.length; i++)
						if (i%100 === 0)
							return chunk.split(',') //wonder does this return every 100 times?
				}));
}

/*
csv.parseObject = function Parser(){


}

Parser.prototype = {
	constructor: Praser,
	on: function(eventName, callback){


	},
	run: function(){

	}
}

csv.parse = parse
*/
//module.exports = csv
