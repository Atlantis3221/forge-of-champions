import React from "react";
import { useModal } from "./layout/ModalLayout";
import Map from "./UI/map";
import RunningLine from "./UI/runningLine";
import VideoModal from "./UI/videoModal";
import GridContainer from "./wrapers/gridContainer";

const ChooseYourArena = () => {
    const schoolModal = useModal()
    const factoryModal = useModal()
    const desertModal = useModal()

    return (
        <GridContainer className="mb-32 overflow-hidden">
            <VideoModal videoModal={schoolModal} />
            <VideoModal videoModal={factoryModal} />
            <VideoModal videoModal={desertModal} />
            <div className="col-span-12 h-screen w-full">
                <h1 className="text-28px lg:text-5xl flex justify-center uppercase mb-10 lg:mb-5">Choose your Arena</h1>
                <div>
                    <Map
                        desertOnClick={() => { desertModal.open() }}
                        schoolOnClick={() => { schoolModal.open() }}
                        factoryOnClick={() => { factoryModal.open() }} />
                </div>
            </div>
            <RunningLine />
        </GridContainer>
    )
}

export default ChooseYourArena