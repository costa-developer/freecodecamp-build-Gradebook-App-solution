function getAverage(scores) {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== 'F';
}

function studentMsg(totalScores, studentScore) {
    const stdAverage = getAverage(totalScores);
    const stdGrade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);

    return `Class average: ${stdAverage}. Your grade: ${stdGrade}. You ${passed ? 'passed' : 'failed'} the course.`;
}
