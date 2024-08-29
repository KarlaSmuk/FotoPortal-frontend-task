import { PhotoDetailsPageData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import PhotoDetailsInfo from "./components/PhotoDetailsInfo/PhotoDetailsInfo.component";
import PhotoDetailsSidebar from "./components/PhotoDetailsSidebar/PhotoDetailsSidebar.component";
import PhotoPreview from "./components/PhotoPreview/PhotoPreview.component";

type PhotoDetailsProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-col">
        <PhotoPreview url={photo.url} />
        <PhotoDetailsInfo photo={photo} />
      </div>
      <PhotoDetailsSidebar photo={photo} />
    </div>
  );
}
