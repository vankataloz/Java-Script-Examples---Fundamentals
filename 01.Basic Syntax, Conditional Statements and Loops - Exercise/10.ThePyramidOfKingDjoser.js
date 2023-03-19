function thePyramidOfKingDjoser(baseWidthAndLength, incrementStep) {
    baseWidthAndLength = Number(baseWidthAndLength);
    incrementStep = Number(incrementStep);
    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisLazuliNeeded = 0;
    let goldNeeded = 0;
    let pyramidSteps = 1;

    while (baseWidthAndLength >= 1) {
        if (baseWidthAndLength > 2) {
            if (pyramidSteps % 5 == 0) {
                lapisLazuliNeeded += ((baseWidthAndLength * 4) - 4) * incrementStep;
            } else {
                marbleNeeded += ((baseWidthAndLength * 4) - 4) * incrementStep;
            }
            pyramidSteps++;
            stoneNeeded += Math.pow(baseWidthAndLength - 2, 2) * incrementStep;
        }
        else {
            goldNeeded += Math.pow(baseWidthAndLength, 2) * incrementStep;
        }
        baseWidthAndLength -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidSteps * incrementStep)}`);
}
thePyramidOfKingDjoser(23, 0.5);