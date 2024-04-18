const moleFacts = [
    "Avogadro's number is named after the Italian scientist Amedeo Avogadro, who first proposed the concept.",
    "One mole of water molecules contains approximately 18 grams of water.",
    "Avogadro's number is so large that it's difficult to comprehend. If you counted one mole of pennies at a rate of one billion per second, it would take over 19 million years to count them all!",
    "Avogadro's number is useful in converting between the mass of a substance and the number of atoms or molecules it contains.",
    "The mole is considered one of the seven base SI units of measurement."
];

function showMoleFact() {
    const randomIndex = Math.floor(Math.random() * moleFacts.length);
    const fact = moleFacts[randomIndex];
    const moleFactElement = document.getElementById("moleFact");
    moleFactElement.textContent = fact;
}
