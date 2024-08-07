import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:"Nusaif", lastName:"P K", email:"nusaifputhiyakath1@gmail.com"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn ?.firstName || 'Guest'}
                    subtext="Access and manange your account and transactions efficiently"
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1500.35}
                />
            </header>

            RECENT TRANSACTION
        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:123.50}, {
                currentBalance:500.50
            }]}
        /> 
    </section>
  )
}

export default Home