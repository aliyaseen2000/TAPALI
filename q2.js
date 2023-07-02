function containsDuplicate() {
    const nums = prompt("Enter the numbers separated by commas:").split(",").map(Number);
    const numSet = new Set();
    
    for (let num of nums) {
      if (numSet.has(num)) {
        return true;
      }
      numSet.add(num);
    }
    
    return false;
  }
  
  console.log(containsDuplicate());
  