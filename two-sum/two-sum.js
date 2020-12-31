function twoNumberSum(array, targetSum) {
  let storage = {};
	let potentialMatch = 0;
	for(const num of array){
		potentialMatch = targetSum - num;
		if(potentialMatch in storage){
			return [potentialMatch, num]
		} else {
			storage[num] = true;
		}
	}
	return [];
}
