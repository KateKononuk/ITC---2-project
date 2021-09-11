const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('symbol');
const cInfo = document.getElementById('companyInfo')
console.log(myParam)
const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${myParam}`
function fetchCompanyData() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        const text2HTML = `
        <div class="d-flex align-items-center justify-content-center">
            <img src="${data.profile.image}" alt="${data.profile.companyName}">
            <p><a class='websiteCompany' href= "${data.profile.website}">${data.profile.companyName}</a> <span> (${data.symbol})</span></p>
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <p>Stock price: $${data.profile.price} <span id="color">(${data.profile.changesPercentage}%)</span></p>
        </div>
        <p>${data.profile.description}</p>
        `
        setTimeout(function() {cInfo.insertAdjacentHTML("afterbegin", text2HTML)
        const getSpan = document.getElementById("color")
        const changeCol = `${data.profile.changesPercentage}`
        getSpan.innerHTML = `(${changeCol.slice(0,5)}%)`
        if (changeCol > 0) {
        const getSpan = document.getElementById("color")
        .style.color = "green"
        } else {getSpan.style.color = "red"}
        
    }, 2000)

       
})

}

fetchCompanyData()





const url2 = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${myParam}?serietype=line`
console.log(url2)
function fetchHistory() {
    fetch(url2)
    .then(response => response.json())
    .then(dataCompany => {
        console.log(dataCompany)

const dates = []
const stockPrices = []
for ( let i=0; i<10; i++){
    dates.push(dataCompany.historical[i].date)
    stockPrices.push(dataCompany.historical[i].close)
}
console.log(dates)
console.log(stockPrices)

        // setup chart.js
const labels = dates.reverse()
  const data = {
    labels: labels,
    datasets: [{
      label: 'Stock Price',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: stockPrices,
    }]
  };
        // config chart.js
  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  setTimeout(function() {var myChart = new Chart(
    document.getElementById('myChart'),
    config
  )
document.getElementById('spinner').classList.remove('d-flex')
document.getElementById('spinner').classList.add('d-none')}, 3000)
})
}

fetchHistory()
// setTimeout(fetchHistory(), 8000)
