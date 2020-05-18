            const url = 'https://api.wavesplatform.com/v0/pairs/HqPNAbQyXgWEKJ9pfCjrTub2KLvtDuhNfWjBHMAqYd4s/DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    var lastPrice = data.data.lastPrice
                    var firstPrice = data.data.firstPrice
                    if (lastPrice < firstPrice) {
                        var redArrowDown = "<span class='c' style='color:#e5494d;'>" + "<img src=\'img/arrowd.png' width=\'12px\' height=\'0px\'>" + "</span>";
                        document.getElementById("Sucre(SCR)_USD_quote").innerHTML = "<span style='color:#e5494d; font-size:16px'> " + lastPrice + "</span>" + "<span style='color:#e5494d;'> " + redArrowDown + "</span>";
                    } else {
                        var blueArrowUp = "<span class='c' style='color:#5a81ea;'>" + "<img src=\'img/arrowu.png' width=\'12px\' height=\'0px\'>" + "</span>";
                        document.getElementById("Sucre(SCR)_USD_quote").innerHTML = "<span style='color:#5a81ea; font-size:16px'> " + lastPrice + "</span>" + "<span style='color:#e5494d;'> " + blueArrowUp + "</span>";
                    }
                })
                .catch(err => console.log(err));
