import { PhotoDetailsPageData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import PhotoPreviewContainer from "./components/PhotoPreviewContainer/PhotoPreviewContainer.component";
import PhotoDetailsFooter from "./components/PhotoDetailsFooter/PhotoDetailsFooter.component";

type PhotoDetailsProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <div className="flex-col">
      <PhotoPreviewContainer url={photo.url} />
      <PhotoDetailsFooter photo={photo} />
    </div>
  );
}
