import { getPets, getWalkers } from "./database.js";

// Get copy of state for use in this module
const pets = getPets();
const walkers = getWalkers();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    //let petWalker = null
 for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
          //  petWalker = walker
        return walker;
        }
    }
    return null;
};

export const Assignments = () => {
    let assignmentHTML = "<ul>";

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers);
                assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker ? currentPetWalker.name : "No walker assigned"} in ${currentPetWalker ? currentPetWalker.city : "Unknown city"}
            </li>
        `;
    }
    assignmentHTML += "</ul>";
    return assignmentHTML;
};

const findPetWalker = (pet, allWalkers) => {
    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            return walker;
        }
    }
    return null;
};
