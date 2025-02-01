import { useEffect, useRef } from "react";

function MarketInsights() {
  const tradingViewRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple script loads
    if (scriptLoaded.current) return;

    const loadTradingViewWidget = () => {
      if (!tradingViewRef.current) return;

      const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    // Create a container div for the widget
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container";
    script.innerHTML = JSON.stringify({
        
    "colorTheme": "light",
    "dateRange": "1D",
    "showChart": true,
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": true,
    "showSymbolLogo": true,
    "showFloatingTooltip": true,
    "width": "100%",
    "height": "100%",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(42, 46, 57, 0)",
    "scaleFontColor": "rgba(19, 23, 34, 1)",
    "belowLineFillColorGrowing": "rgba(0, 0, 0, 0.12)",
    "belowLineFillColorFalling": "rgba(0, 0, 0, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(0, 0, 0, 0)",
    "belowLineFillColorFallingBottom": "rgba(0, 0, 0, 0)",
    "symbolActiveColor": "rgba(0, 0, 0, 0.12)",
    "tabs": [
        {
        "title": "Crypto",
        "symbols": [
            {
            "s": "BINANCE:BTCUSDT",
            "d": "Bitcoin"
            },
            {
            "s": "BINANCE:ETHUSDT",
            "d": "Etherium"
            },
            {
            "s": "VANTAGE:BTCETH",
            "d": "Bitcoin/Etherium"
            },
            {
            "s": "BINANCE:BNBUSDT",
            "d": "BNB"
            },
            {
            "s": "BINANCE:ADAUSDT",
            "d": "Cardano"
            },
            {
            "s": "TRADENATION:SOLANA",
            "d": "Solana"
            },
            {
            "s": "MEXC:AVAXUSDT",
            "d": "Avalanche"
            }
        ],
        "originalTitle": "Indices"
        },
        {
        "title": "Most Popular",
        "symbols": [
            {
            "s": "MARKETSCOM:OIL",
            "d": "Oil"
            },
            {
            "s": "ACTIVTRADES:GOLD",
            "d": "Gold"
            },
            {
            "s": "NYMEX:NG1!",
            "d": "Natural GAS"
            },
            {
            "s": "NASDAQ:MAGS",
            "d": "MAGS"
            },
            {
            "s": "CRYPTO:BTCUSD",
            "d": "BTC/USD"
            },
            {
            "s": "CRYPTO:ETHUSD",
            "d": "ETH/USD"
            },
            {
            "s": "MARKETSCOM:RIPPLE",
            "d": "Ripple"
            },
            {
            "s": "PEPPERSTONE:CRYPTO10",
            "d": "Crypto 10 index"
            }
        ]
        },
        {
        "title": "Shares",
        "symbols": [
            {
            "s": "NASDAQ:GOOGL",
            "d": "Alphabet"
            },
            {
            "s": "NASDAQ:AMZN",
            "d": "Amazon"
            },
            {
            "s": "NASDAQ:AAPL",
            "d": "Apple"
            },
            {
            "s": "NASDAQ:META",
            "d": "META"
            },
            {
            "s": "NASDAQ:MSFT",
            "d": "Microsoft"
            },
            {
            "s": "NASDAQ:NVDA",
            "d": "Nvidia"
            },
            {
            "s": "NASDAQ:TSLA",
            "d": "Tesla"
            }
        ]
        },
        {
        "title": "Commodities",
        "symbols": [
            {
            "s": "MARKETSCOM:OIL",
            "d": "Oil"
            },
            {
            "s": "CAPITALCOM:GASOLINE",
            "d": "Gasoline"
            },
            {
            "s": "TVC:UKOIL",
            "d": "Brent Crud Oil"
            },
            {
            "s": "CAPITALCOM:HEATINGOIL",
            "d": "Heating Oil"
            },
            {
            "s": "CAPITALCOM:NATURALGAS",
            "d": "Natural Gas"
            },
            {
            "s": "TVC:SILVER",
            "d": "Silver"
            },
            {
            "s": "SPARKS:COFFEE",
            "d": "Coffe"
            },
            {
            "s": "CAPITALCOM:ALUMINUM",
            "d": "ALUMINUM"
            }
        ]
        },
        {
        "title": "Indices",
        "symbols": [
            {
            "s": "MARKETSCOM:USA30",
            "d": "USA 30"
            },
            {
            "s": "CAPITALCOM:HK50",
            "d": "Hong Kong 50"
            },
            {
            "s": "OANDA:DE30EUR",
            "d": "Germany 40"
            },
            {
            "s": "SGX:FRANCE50",
            "d": "France 50"
            },
            {
            "s": "MARKETSCOM:EUROPE50",
            "d": "Europe 50"
            },
            {
            "s": "BLACKBULL:NAS100",
            "d": "Nasdaq 100"
            },
            {
            "s": "OANDA:NL25EUR",
            "d": "NetherLands 25"
            },
            {
            "s": "TVC:VIX",
            "d": "s&p 500"
            }
        ],
        "originalTitle": "Indices"
        },
        {
        "title": "Forex",
        "symbols": [
            {
            "s": "OANDA:EURUSD",
            "d": "EUR/USD"
            },
            {
            "s": "OANDA:EURGBP",
            "d": "EUR/GBP"
            },
            {
            "s": "OANDA:EURAUD",
            "d": "EUR/AUD"
            },
            {
            "s": "OANDA:EURNZD",
            "d": "EUR/NZD"
            },
            {
            "s": "OANDA:EURCAD",
            "d": "EUR/CAD"
            },
            {
            "s": "OANDA:EURCHF",
            "d": "EUR/CHF"
            },
            {
            "s": "FX:GBPUSD",
            "d": "GBP/USD"
            },
            {
            "s": "OANDA:AUDUSD",
            "d": "AUD/USD"
            }
        ],
        "originalTitle": "Forex"
        },
        {
        "title": "Options",
        "symbols": [
            {
            "s": "MILSEDEX:S38890",
            "d": "NVIDIA | call 145"
            },
            {
            "s": "OPRA:ARM250103C160.0",
            "d": "ARM | call 160"
            },
            {
            "s": "FINRA:GOOG5025303",
            "d": "Alphabet | 1.9%"
            },
            {
            "s": "CME_MINI:MNQ1!",
            "d": "Nasdaq 100 | call 21900"
            },
            {
            "s": "CBOE:VIX",
            "d": "VIX"
            },
            {
            "s": "FINRA:AMZN4996697",
            "d": "Amazon | 0.8%"
            },
            {
            "s": "FINRA:AAPL5231623",
            "d": "Apple | 1.4%"
            }
        ]
        }
    ]
    }
    );

      // Add error handling for script loading
      script.onerror = () => {
        console.error("Failed to load TradingView widget script");
      };

      // Clean up the container first
      tradingViewRef.current.innerHTML = "";
      
      // Append the script to the container
      widgetContainer.appendChild(script);
      tradingViewRef.current.appendChild(widgetContainer);
      
      scriptLoaded.current = true;
    };

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(loadTradingViewWidget, 100);

    return () => {
      clearTimeout(timeoutId);
      if (tradingViewRef.current) {
        tradingViewRef.current.innerHTML = "";
      }
      scriptLoaded.current = false;
    };
  }, []);

  return (
    <div 
      ref={tradingViewRef}
      className="w-full md:w-[500px] lg:w-[550px] h-[700px] bg-gradient-to-b from-sky-100 to-white rounded-3xl shadow-2xl p-4"
    >
      {/* Optional loading state */}
      <div className="h-full w-full flex items-center justify-center">
        Loading market data...
      </div>
    </div>
  );
}

export default MarketInsights;