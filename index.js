// Step 1: Create a variable to store the singleton instance
let bankBranchInstance = null;

// Step 2: Define the BankBranch class
class BankBranch {
  // Step 3: Create a constructor that takes branchInfo as a parameter
  constructor(branchInfo) {
    // Inside the constructor, check if bankBranchInstance is null
    if (!bankBranchInstance) {
      // If bankBranchInstance is null, create a new instance and assign it to bankBranchInstance
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    // Return the bankBranchInstance whether it's newly created or existing
    return bankBranchInstance;
  }

  // Step 4: Add methods for managing branch-related information
  getBranchInfo() {
    return this.branchInfo;
  }
}

// Step 5: Usage section
const branchB = new BankBranch("Branch B Information");
const branchA = new BankBranch("Branch A Information");
const branchC = new BankBranch("Branch C Information");
// Use the getBranchInfo method to retrieve branch information
console.log(branchA.getBranchInfo()); // Output: Branch B Information
console.log(branchB.getBranchInfo()); // Output: Branch B Information
console.log(branchC.getBranchInfo()); // Output: Branch B Information
// Verify that branchA and branchB are both referring to the same instance
console.log(branchA === branchB); 
console.log(branchA === branchC); // Output: true


