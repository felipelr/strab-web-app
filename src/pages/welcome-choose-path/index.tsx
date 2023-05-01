import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/components/layout/default-layout";
import { Title } from "@/components/ui/title";
import { Subtitle } from "@/components/ui/subtitle";
import { useRouter } from "next/router";
import { labels } from "./labels"
import Card from "@/components/ui/card";

const WelcomeChoosePath: NextPageWithLayout = () => {
    const router = useRouter()

    const handleClickClient = () => {
        router.push('/welcome-choose-path/client')
    }

    const handleClickProfessional = () => {
        router.push('/welcome-choose-path/professional')
    }

    return (
        <div className='flex justify-center pt-8'>
            <div>
                <Subtitle>{labels.subtitle}</Subtitle>
                <Title>{labels.title}</Title>
                <div className="grid gap-4 grid-cols-1 mt-6">
                    <Card onClick={handleClickClient} className="bg-strabblue-100 hover:cursor-pointer">
                        <p className="text-white text-lg font-bold mb-4">{labels.clientTitle}</p>
                        <div className="flex">
                            <img src="/assets/cliente@3x.png" alt="Client" className="object-contain rounded-lg w-32 lg:w-48 xl:w-48" />
                            <div className="flex items-center w-80">
                                <p className="p-4 text-white text-lg font-regular">{labels.clientDescription}</p>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={handleClickProfessional} className="bg-green-600 hover:cursor-pointer">
                        <p className="text-white text-lg font-bold mb-4">{labels.professionalTitle}</p>
                        <div className="flex">
                            <img src="/assets/profissional@3x.png" alt="Client" className="object-contain rounded-lg w-32 lg:w-48 xl:w-48" />
                            <div className="flex items-center w-80">
                                <p className="p-4 text-white text-lg font-regular">{labels.professionalDescription}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div >
        </div>
    )
}


WelcomeChoosePath.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>{page}</DefaultLayout>
    )
}

export default WelcomeChoosePath
