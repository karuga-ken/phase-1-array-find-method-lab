const record = [
    {
        year: "2015",
        result: 'W',
    },
    {
        year: "2014",
        result: 'N/A',
    },
    {
        year:"2013",
        result:"L"
    }
]
let superbowlWin = record => {
    let result = record.find(record => record.result === "W")
}
console.log(result);

