var Foo = function(){
	this.number = 0;

	this.executeAsyncOperation = function(value, callback){
		// Some async operation
		this.number = this.number + value;


		//when finish async operation return callback
		return callback(this.number);
	}

	return this;
}

var foo = Foo();

foo.executeAsyncOperation(10, function(newNumber){
	console.log(newNumber);
});

foo.executeAsyncOperation(5, function(newNumber){
	console.log(newNumber);
});