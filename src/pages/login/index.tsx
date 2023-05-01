import { ReactElement, useState } from "react";
import ButtonsGroup from "@/components/ui/buttons-group";
import Button from "@/components/ui/buttons/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { labels } from './labels'
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import DefaultLayoutWelcome from "@/components/layout/default-layout-welcome";

const Login: NextPageWithLayout = () => {
    const router = useRouter()
    const [loginType, setLoginType] = useState('email')

    const handleLoginTypeClick = () => {
        setLoginType(prev => prev === 'email' ? 'phone' : 'email')
    }

    const handleClickSignin = () => {
        router.push('/signin')
    }

    return (
        <div className='pt-4'>
            <div className="flex justify-center mb-4">
                <img src="/assets/strabbranco.png" alt="Strab" width="200" />
            </div>
            <div className="flex justify-center">
                <Card width="w-2/3 xl:w-1/4 lg:w-1/3 md:w-1/2">
                    <div className="flex justify-center">
                        <p className="text-strabblue-100 text-2xl">{labels.title}</p>
                    </div>
                    <ButtonsGroup
                        buttonActive={loginType === 'email' ? 0 : 1}
                        className="my-4"
                        items={[
                            {
                                label: labels.email,
                                onClick: handleLoginTypeClick
                            },
                            {
                                label: labels.phone,
                                onClick: handleLoginTypeClick
                            }
                        ]} />
                    <div>
                        {loginType === 'email'
                            ? (
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        {labels.email}
                                    </label>
                                    <Input id="username" type="text" placeholder="xxx@xxx.com" />
                                </div>
                            )
                            : (
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        {labels.phone}
                                    </label>
                                    <Input id="phone" type="tel" placeholder="(xx) xxxxx-xxxx" />
                                </div>
                            )}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                {labels.password}
                            </label>
                            <Input id="password" type="password" placeholder="********" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Button color='bg-strabyellow-100' hoverColor='bg-strabyellow-200' textColor='text-strabblue-100'>
                                {labels.login}
                            </Button>
                            <a className="inline-block align-baseline text-strabblue-100 hover:text-strabblue-200" href="#">
                                {labels.forgotPassword}
                            </a>
                        </div>
                        <hr className="my-4" />
                        <p className="text-center">
                            {labels.newHere} <a onClick={handleClickSignin} className="cursor-pointer inline-block align-baseline text-strabblue-100 hover:text-strabblue-200">{labels.signIn}</a>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}


Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayoutWelcome>{page}</DefaultLayoutWelcome>
    )
}

export default Login