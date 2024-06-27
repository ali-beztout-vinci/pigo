// validations.js
function isValid(gamertag) {
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    let hasSpecialCharacter = false;
    let hasNumber = false;

    // Vérifier si la longueur du gamertag est inférieure à 8 caractères
    if (gamertag.length < 8) {
        return "Invalid - gamertag length must be at least 8 characters";
    }

    // Vérifier la présence d'un caractère spécial et d'un chiffre
    for (let i = 0; i < gamertag.length; i++) {
        if (specialCharacters.includes(gamertag[i])) {
            hasSpecialCharacter = true;
        }
        if (!isNaN(gamertag[i]) && gamertag[i] !== ' ') {
            hasNumber = true;
        }
    }

    // Vérifier s'il manque un caractère spécial
    if (!hasSpecialCharacter) {
        return "Invalid - gamertag must contain at least a special character";
    }

    // Vérifier s'il manque un chiffre
    if (!hasNumber) {
        return "Invalid - gamertag must contain at least a number";
    }

    return true;
}

module.exports = { isValid };
