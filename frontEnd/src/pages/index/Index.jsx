import React from 'react';
import Feature from '../../components/feature/Feature';
import iconChat from "../../assets/images/icon-chat.png"
import iconMoney from "../../assets/images/icon-money.png"
import iconSecurity from "../../assets/images/icon-security.png"

const Index = () => {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className='features'>
                <Feature src={iconChat}
                    alt={"Chat Icon"}
                    title={"You are our #1 priority"}
                    text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                />
                <Feature src={iconMoney}
                    alt={"Chat Icon"}
                    title={"More savings means higher rates"}
                    text={"The more you save with us, the higher your interest rate will be!"}
                />
                <Feature src={iconSecurity}
                    alt={"Chat Icon"}
                    title={"Security you can trust"}
                    text={"We use top of the line encryption to make sure your data and money is always safe."}
                />
            </section>
        </main>
    );
};

export default Index;