import React from 'react'
import Head from 'next/head'

export default function DefaultLayoutWelcome({ children }: React.PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Strab</title>
                <meta name="description" content="Conectamos você a maior rede de profissionais da região!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-strabblue-100 w-screen h-max min-h-screen'>
                {children}
            </main>
        </>
    )
}
