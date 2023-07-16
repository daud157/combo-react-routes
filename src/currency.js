import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  useEffect(() => {
    // Fetch currency rates from an API or any other data source
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        const data = await response.json();
        const rates = data.rates;
        const options = Object.keys(rates);
        setCurrencyOptions([data.base, ...options]);
        setFromCurrency(data.base);
        setToCurrency(options[0]);
        setExchangeRate(rates[options[0]]);
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencyRates();
  }, []);

  useEffect(() => {
    // Convert currency whenever the amount, fromCurrency, or toCurrency changes
    if (fromCurrency && toCurrency && exchangeRate) {
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      setConvertedAmount(convertedAmount);
    }
  }, [amount, fromCurrency, toCurrency, exchangeRate]);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
    setExchangeRate(currencyOptions.find((option) => option === event.target.value));
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
    setExchangeRate(currencyOptions.find((option) => option === event.target.value));
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>From:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Converted Amount:</label>
        <input type="text" value={convertedAmount} readOnly />
      </div>
    </div>
  );
};

export default CurrencyConverter;
