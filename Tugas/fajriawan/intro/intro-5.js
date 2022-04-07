const { getMovies } = require("./../../../req-data-simulation");

const testData = async () => {
    const data = await getMovies();
    return data
}

console.log(testData())