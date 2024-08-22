import { PhotoDetailsPageData } from "../../pages/PhotoDetailsPage/types/PhotoDetailsData.type";
import PhotoDetailsFooter from "./components/PhotoDetailsFooter/PhotoDetailsFooter.component";

type PhotoDetailsProps = {
  photo: PhotoDetailsPageData;
};

export default function PhotoDetails({ photo }: PhotoDetailsProps) {
  return (
    <div className="flex">
      <PhotoDetailsFooter photo={photo} />
    </div>
  );
}
