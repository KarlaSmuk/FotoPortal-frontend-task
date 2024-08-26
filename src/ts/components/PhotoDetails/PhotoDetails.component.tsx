import { PhotoDetailsPageData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import PhotoPreviewContainer from "./components/PhotoPreviewContainer/PhotoPreviewContainer.component";
import PhotoDetailsFooter from "./components/PhotoDetailsFooter/PhotoDetailsFooter.component";
import PhotoDetailsAside from "./components/PhotoDetailsAside/PhotoDetailsAside.component";

type PhotoDetailsProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <div className="max-tablet:flex-col flex w-full">
      <div className="flex-1 flex-col">
        <PhotoPreviewContainer url={photo.url} />
        <PhotoDetailsFooter photo={photo} />
      </div>
      <PhotoDetailsAside photo={photo} />
    </div>
  );
}
