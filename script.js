const searchBtn = document.getElementById('btnSearch')
const listOutput = document.getElementById('listOutput')

function mainFunc() {
    searchBtn.addEventListener("click", (search = (symbol) => {
        listOutput.innerHTML = ""
        document.querySelector('#iconSpinner').classList.remove('d-none')
        symbol = document.querySelector("#value").value
        const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${symbol}&limit=10&exchange=NASDAQ`
        fetch(url)
        .then(r => r.json())
        .then(data => {
            for (let i=0; i<data.length; i++){
                const url2 = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${data[i].symbol}`
                
                fetch(url2).then(r => r.json())
                .then(data2 => {
                    const text2HTML = ` 
                    <div class="d-flex align-items-center chWidth m-3">
                        <img src="${data2.profile.image}" alt="${data[i].name}" onerror="this.onerror=null; this.src='./logo.png'" class="rounded" width="50" height="50">
                    
                        <a href="./company.html?symbol=${data[i].symbol}">
                            <p>${data[i].symbol}  ${data[i].name} 
                                <span id='chPerc'>(${data2.profile.changesPercentage}%)</span>
                            </p>
                        </a>
                    </div>`
                    
                setTimeout(function(){
                    listOutput.insertAdjacentHTML("beforeend", text2HTML);
                    document.querySelector('#iconSpinner').classList.add('d-none');
                    const chPerc = document.querySelector('#chPerc')
                    // console.log(chPerc)
                    const changeCol = `${data2.profile.changesPercentage}`
                    console.log(changeCol)
                    chPerc.innerHTML = `(${data2.profile.changesPercentage.slice(0,5)}%)`
                    if (changeCol > 0) {
                       chPerc.style.color = "green"
                    } else {chPerc.style.color = "red"}}, 2000)
                })
            }
        })
}))
}
mainFunc()  


const insrt = document.querySelector('#marqueeList')
function fetchInfo() {
    const stocksSymbol = ['aapl','nflx', 'amzn', 'tsla', 'fb', 'msft' ,'goog', 'nvda', 'googl', 'pypl', 'adbe', 'cmcsa', 'csco', 'intc', 'cost', 'avgo', 'mrna', 'txn', 'tmus', 'qcom', 'intu', 'sbux', 'amd']
    for (let i=0; i<stocksSymbol.length; i++) {
    const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${stocksSymbol[i]}`
    fetch(url)
    .then(r => {
        if (!r.ok) {
            return Error("ERROR!");
        } else {return r.json()}
    })
    .then(data => {
            const html = `<span>${data.symbol} | ${data.profile.changesPercentage}</span> `
            // console.log(html)
            
            insrt.insertAdjacentHTML('afterbegin', html)
            // console.log(insrt)
        })
    }   // end for loop and fetching data
   
    } 

fetchInfo()