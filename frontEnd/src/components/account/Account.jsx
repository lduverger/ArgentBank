import React from 'react';

const Account = ({ title, amount, aDesc }) => {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{title}</h3>
        <p class="account-amount">{amount}</p>
        <p class="account-amount-description">{aDesc}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;