import { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";
import DefaultLayout from "@/components/layout/default-layout";
import { Title } from "@/components/ui/title";
import { Subtitle } from "@/components/ui/subtitle";
import { useRouter } from "next/router";

const WelcomeChoosePathProfessional: NextPageWithLayout = () => {
    const router = useRouter()

    return (
        <div className='flex justify-center pt-8'>
            <div>
                <Subtitle>bem vindo</Subtitle>
                <Title>Cliente</Title>
            </div >
        </div>
    )
}


WelcomeChoosePathProfessional.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>{page}</DefaultLayout>
    )
}

export default WelcomeChoosePathProfessional
