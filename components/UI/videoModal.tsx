import ModalLayout from "../layout/ModalLayout";

export interface IConfirmTransaction {
    videoModal: any;
}

const VideoModal = ({
    videoModal,
}: IConfirmTransaction) => {

    return (
        <ModalLayout {...videoModal}>
            <div className="w-[1024px] h-[640px]">
                <iframe className="youtubeVideo" width="100%" height="100%" src={`https://www.youtube.com/embed/b9imHpuCUmQ?autoplay=0&loop=1&playlist=b9imHpuCUmQ&enablejsapi=1`} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </ModalLayout>
    )
}
export default VideoModal;