export function isValidSquare([x, y]){
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

export function getKnightMoves(square){

}

export function knightMoves(start, end){

}

export function parseSquare(input){
    if(typeof input === 'string'){
        const x = input[0].charCodeAt(0) - 97;
        const y = parseInt(input[1], 10) - 1;
        return [x, y];
    }
    return input;
}