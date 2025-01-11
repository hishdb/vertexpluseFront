import  { useEffect } from 'react';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

function AllMarkets () {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.type = 'text/javascript';
    script.async = true;

    // Widget configuration
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      symbolsGroups: [
        {
          name: "Indices",
          originalName: "Indices",
          symbols: [
            { name: "FOREXCOM:SPXUSD", displayName: "S&P 500 Index" },
            { name: "FOREXCOM:NSXUSD", displayName: "US 100 Cash CFD" },
            { name: "FOREXCOM:DJI", displayName: "Dow Jones Industrial Average Index" },
            { name: "INDEX:NKY", displayName: "Japan 225" },
            { name: "INDEX:DEU40", displayName: "DAX Index" },
            { name: "FOREXCOM:UKXGBP", displayName: "FTSE 100 Index" }
          ]
        },
        {
          name: "Futures",
          originalName: "Futures",
          symbols: [
            { name: "CME_MINI:ES1!", displayName: "S&P 500" },
            { name: "CME:6E1!", displayName: "Euro" },
            { name: "COMEX:GC1!", displayName: "Gold" },
            { name: "NYMEX:CL1!", displayName: "WTI Crude Oil" },
            { name: "NYMEX:NG1!", displayName: "Gas" },
            { name: "CBOT:ZC1!", displayName: "Corn" }
          ]
        },
        {
          name: "Bonds",
          originalName: "Bonds",
          symbols: [
            { name: "CBOT:ZB1!", displayName: "T-Bond" },
            { name: "CBOT:UB1!", displayName: "Ultra T-Bond" },
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" }
          ]
        },
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:USDJPY", displayName: "USD to JPY" },
            { name: "FX:USDCHF", displayName: "USD to CHF" },
            { name: "FX:AUDUSD", displayName: "AUD to USD" },
            { name: "FX:USDCAD", displayName: "USD to CAD" },
            { name: "FOREXCOM:EURUSD", displayName: "Euro / U.S. Dollar" },
            { name: "FX:USDCHF", displayName: "US Dollar/Swiss Franc" }
          ]
        },
        {
          name: "Stocks",
          symbols: [
            { name: "NASDAQ:TSLA", displayName: "Tesla" },
            { name: "NASDAQ:NVDA", displayName: "NVIDIA" },
            { name: "NASDAQ:AAPL", displayName: "APPLE" },
            { name: "NASDAQ:MSTR", displayName: "MicroStrategy Incorporated" },
            { name: "NASDAQ:AMD", displayName: "Advanced Micro Devices, Inc." },
            { name: "NASDAQ:AMZN", displayName: "Amazon.com, Inc." },
            { name: "NASDAQ:META", displayName: "Meta Platforms, Inc." },
            { name: "NASDAQ:MSFT", displayName: "Microsoft Corporation" },
            { name: "NASDAQ:PLTR", displayName: "Palantir Technologies Inc." },
            { name: "NASDAQ:GOOGL", displayName: "Alphabet Inc." },
            { name: "NASDAQ:COIN", displayName: "Coinbase Global, Inc." },
            { name: "NASDAQ:NFLX", displayName: "Netflix, Inc." },
            { name: "NASDAQ:AVGO", displayName: "Broadcom Inc." },
            { name: "NSE:RELIANCE", displayName: "RELIANCE INDUSTRIES LTD" },
            { name: "NASDAQ:MARA", displayName: "MARA Holdings, Inc." }
          ]
        },
        {
          name: "Crypto",
          symbols: [
            { name: "BINANCE:BTCUSDT", displayName: "Bitcoin / TetherUS" },
            { name: "BITSTAMP:BTCUSD", displayName: "Bitcoin / U.S. dollar" },
            { name: "COINBASE:BTCUSD", displayName: "Bitcoin / US Dollar" },
            { name: "BINANCE:BTCUSDT.P", displayName: "Bitcoin / TetherUS PERPETUAL CONTRACT" },
            { name: "BINANCE:ETHUSDT", displayName: "Ethereum / TetherUS" },
            { name: "BINANCE:XRPUSDT", displayName: "XRP / TetherUS" },
            { name: "COINBASE:ETHUSD", displayName: "Ethereum / US Dollar" },
            { name: "COINBASE:SOLUSD", displayName: "Solana / US Dollar" },
            { name: "BITSTAMP:XRPUSD", displayName: "XRP / U.S. dollar" },
            { name: "BINANCE:ETHBTC", displayName: "Ethereum / Bitcoin" }
          ]
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
      backgroundColor: "#ffffff"
    });

    // Add script to container
    const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (widgetContainer && widgetContainer.contains(script)) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen " >
    <MenuBar />
    
    <main className="flex-grow ">
    <div className="tradingview-widget-container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 my-8 pt-20">
      <div className="tradingview-widget-container__widget h-[800px]"></div>
      <div className="tradingview-widget-copyright text-center mt-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-500 hover:text-blue-600"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
    </main>
    <Footer />
    </div>
  );
};

export default AllMarkets;