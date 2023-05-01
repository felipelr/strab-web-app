import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { labels } from './labels'
import { NextPageWithLayout } from './_app'
import DefaultLayoutWelcome from '@/components/layout/default-layout-welcome'
import Button from '@/components/ui/buttons/button'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const handleClickLogin = () => {
    router.push('/login')
  }

  const handleClickSignin = () => {
    router.push('/signin')
  }

  return (
    <div className='container pt-8'>
      <div className="grid gap-4 grid-cols-2">
        <div className="flex flex-1 justify-end px-4">
          <img src="/assets/people_working.jpg" alt="People" className="object-contain rounded-lg xs:w-48 md:w-64 lg:w-72 xl:w-80" />
        </div>
        <div className="flex flex-1 px-4 justify-center items-center lg:px-16 xl:px-24">
          <div>
            <div className="flex justify-center mb-4">
              <img src="/assets/strabbranco.png" alt="Strab" width="200" />
            </div>
            <p className="font-bold text-2xl text-white">{labels.title}</p>
            <p className="text-white text-lg mt-4">{labels.description}</p>
            <div className="mt-4 grid gap-4 grid-cols-1">
              <Button onClick={handleClickSignin} color='bg-strabyellow-100' hoverColor='bg-strabyellow-200' textColor='text-strabblue-100'>
                {labels.btnSignin}
              </Button>
              <Button onClick={handleClickLogin}>
                {labels.btnLogin}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayoutWelcome>{page}</DefaultLayoutWelcome>
  )
}

export default Home