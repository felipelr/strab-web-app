import React, { useEffect } from 'react'
import Head from 'next/head'
import { AuthProvider, authContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'

export default function AuthenticatedLayout({ children }: React.PropsWithChildren) {
    const router = useRouter()
    useEffect(() => {
        if (!authContext.isUserAuthenticated) router.push('/')
    }, [authContext.isUserAuthenticated])

    return (
        <AuthProvider>
            <Head>
                <title>Strab</title>
                <meta name="description" content="Conectamos você a maior rede de profissionais da região!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-gray-50 w-screen h-max min-h-screen'>
                <div className='container mx-auto'>{children}</div>
            </main>
        </AuthProvider>
    )
}
