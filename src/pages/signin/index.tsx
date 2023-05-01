import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/components/layout/default-layout";
import { Title } from "@/components/ui/title";
import { Subtitle } from "@/components/ui/subtitle";
import Input from "@/components/ui/input";
import Button from "@/components/ui/buttons/button";
import { useRouter } from "next/router";
import { TbArrowRight } from "react-icons/tb";
import { labels } from "./labels"

const Signin: NextPageWithLayout = () => {
    const router = useRouter()

    const handleSinginClick = () => {
        router.push('/welcome-choose-path')
    }

    return (
        <div className='flex justify-center pt-8'>
            <div>
                <Subtitle>{labels.subtitle}</Subtitle>
                <Title>{labels.title}</Title>
                <div className="my-6 w-full">
                    <Input id="phone" type="tel" placeholder="(xx) xxxxx-xxxx" />
                </div>
                <div>
                    <Button icon={<TbArrowRight />} onClick={handleSinginClick} className="w-full" color='bg-strabyellow-100' hoverColor='bg-strabyellow-200' textColor='text-strabblue-100'>
                        {labels.nextStep}
                    </Button>
                </div>
            </div >
        </div>
    )
}


Signin.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>{page}</DefaultLayout>
    )
}

export default Signin
