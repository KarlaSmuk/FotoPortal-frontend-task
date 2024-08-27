import { PhotoDetailsPageData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import PhotoPreviewContainer from "./components/PhotoPreviewContainer/PhotoPreviewContainer.component";
import PhotoDetailsInfo from "./components/PhotoDetailsInfo/PhotoDetailsInfo.component";
import PhotoDetailsAside from "./components/PhotoDetailsSidebar/PhotoDetailsSidebar.component";

type PhotoDetailsProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <div className="flex w-full max-tablet:flex-col">
      <div className="flex-1 flex-col">
        <PhotoPreviewContainer url={photo.url} />
        <PhotoDetailsInfo photo={photo} />
      </div>
      <PhotoDetailsAside photo={photo} />
    </div>
  );
}
