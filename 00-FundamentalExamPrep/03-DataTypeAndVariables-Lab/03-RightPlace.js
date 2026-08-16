function rightPlace(sentence, charReplace, stringMatch) {
    let text = sentence.replace("_", charReplace);

    let output = text === stringMatch ? "Matched" : "Not Matched";
    return output;
}

console.log(rightPlace("Str_ng", "I", "Strong"));
