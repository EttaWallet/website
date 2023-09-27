import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import '../../static/css/components.css';

const Donate: React.FunctionComponent<{}> = () => {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.textContent = `
      function handlePlusMinus(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const el = root.querySelector('.btcpay-input-price');
        const step = parseInt(event.target.dataset.step) || 1;
        const min = parseInt(event.target.dataset.min) || 1;
        const max = parseInt(event.target.dataset.max);
        const type = event.target.dataset.type;
        const price = parseInt(el.value) || min;
        if (type === '-') {
            el.value = price - step < min ? min : price - step;
        } else if (type === '+') {
            el.value = price + step > max ? max : price + step;
        }
      }

      document.querySelectorAll(".btcpay-form .plus-minus").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('click', handlePlusMinus);
            el.dataset.initialized = true;
        }
      });

      function handlePriceInput(event) {
        event.preventDefault();
        const root = event.target.closest('.btcpay-form');
        const price = parseInt(event.target.dataset.price);
        if (isNaN(event.target.value)) root.querySelector('.btcpay-input-price').value = price;
        const min = parseInt(event.target.getAttribute('min')) || 1;
        const max = parseInt(event.target.getAttribute('max'));
        if (event.target.value < min) {
            event.target.value = min;
        } else if (event.target.value > max) { 
            event.target.value = max;
        }
      }

      document.querySelectorAll(".btcpay-form .btcpay-input-price").forEach(function(el) {
        if (!el.dataset.initialized) {
            el.addEventListener('input', handlePriceInput);
            el.dataset.initialized = true;
        }
      });
    `;
    
        document.head.appendChild(script);
    
        // Cleanup: Remove the script when component is unmounted
        return () => {
          document.head.removeChild(script);
        };
      }, []);
  return (
    <Layout>
      <div className='container'>
        <div className="row padding-vert--md padding-horiz--md" style={{display: 'block'}}>
            <div className='intro'>
                <h2 className='margin-bottom--xs'>Donate bitcoin (onchain or lightning)</h2>
                <p>Enter amount and press the button below</p>
            </div>
            <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={{
                __html: `
                <style> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #ccc; } .btcpay-form option { color: #000; background: rgba(0,0,0,.1); } .btcpay-input-price { -moz-appearance: textfield; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; }.btcpay-input-price::-webkit-outer-spin-button, .btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } </style>
                <form method="POST" action="https://bps.ettawallet.app/api/v1/invoices" class="btcpay-form btcpay-form--block">
                    <input type="hidden" name="storeId" value="3iw7YxjuZEzADVfiBmWab1dvyGGNZPZK6bWNgCxtQsLm" />
                    <input type="hidden" name="checkoutDesc" value="Thank you so much for supporting this project ❤️" />
                    <input type="hidden" name="notifyEmail" value="rukundocollin@gmail.com" />
                    <div class="btcpay-custom-container">
                        <div class="btcpay-custom">
                        <button class="plus-minus" type="button" data-type="-" data-step="10" data-min="10" data-max="10000">-</button>
                        <input class="btcpay-input-price" type="number" name="price" min="10" max="10000" step="10" value="10" data-price="10" style="width: 3em;" />
                        <button class="plus-minus" type="button" data-type="+" data-step="10" data-min="10" data-max="10000">+</button>
                        </div>
                        <select name="currency">
                        <option value="USD" selected>USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                        <option value="BTC">BTC</option>
                        </select>
                    </div>
                    <input type="image" class="submit" name="submit" src="https://bps.ettawallet.app/img/paybutton/pay.svg" style="width:209px;" alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor" />
                </form>
                `,
            }} 
            />
            <p className='padding-top--md'>Or use LNURL: donate@bps.ettawallet.app</p>
            <div className='margin-vert--lg' style={{width: '100%', height: 1, backgroundColor: '#f2f2f2'}} />
            <div className='intro margin-top--xs'>
                <p>Want to support development another way? You can shoot an email to rukundocollin@gmail.com</p>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Donate;