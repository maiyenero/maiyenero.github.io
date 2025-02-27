function solve(amount, bottles) {	
	let initialBots = Array(bottles.length).fill(0); //start with the empty bottles
	let queue = [[initialBots, [initialBots]]]; //queue to store 
	let visited = new Set();
	visited.add(initialBots.toString()); //convert to string for checking by refrence and to track to avoid revisits 


	//BFS 
	while (queue.length > 0) {
		let [curr, path ] = queue.shift(); //first in first out DS  
		if (curr.includes(amount)) { //check if exact amount 
			let finalBots = [...curr]; // copy current
			for (let i = 0; i < finalBots.length; i++) {
    			if (finalBots[i] !== amount) {
        			finalBots[i] = 0; // set all other bottles to 0
    			}
			}
		path.push(finalBots); // 
		return path;
	}

		//fill, empty, pour 
		for (let i = 0; i < bottles.length; i++) { //generate from current list 
			let nextBots; 

			//fill bottle 
			nextBots = [...curr]; //generate new copy
			nextBots[i] = bottles[i];

			if (!visited.has(nextBots.toString())) {
				queue.push([nextBots, [...path, nextBots]]);
				visited.add(nextBots.toString());
			}

			//empty bottle 
	
			nextBots = [...curr]; //generate new copy
			nextBots[i] = 0; //fill to max 

			if (!visited.has(nextBots.toString())) {
				queue.push([nextBots, [...path, nextBots]]); //add to queue
				visited.add(nextBots.toString()); 
			}

			//pour bottles 
			for (let j = 0; j < bottles.length; j++) { 
				if (i !== j) {  //2 diff bottles i j 
					nextBots = [...curr];

					let pourAmount = Math.min(curr[i], bottles[j] - curr[j]); //max amount of water  
					nextBots[i] -= pourAmount; //- from  i bottle 
					nextBots[j] += pourAmount; // + to j bottle

					if (!visited.has(nextBots.toString())) {
						queue.push([nextBots, [...path, nextBots]]); //add to queue 
						visited.add(nextBots.toString());
					}
				}
			}
		}
	}
	
	return null; //when BFS is complete and no other solutions  
}


// test cases 
console.log(solve(2, [5, 3])); 
console.log(solve(1, [2, 4])); 
console.log(solve(8, [10, 2, 1]));
console.log(solve(8, [3, 4, 2, 1]));


