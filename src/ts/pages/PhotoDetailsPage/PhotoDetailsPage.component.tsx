import PhotoDetails from "../../components/PhotoDetails/PhotoDetails.component";
import { useGetPhotoDetails } from "./hooks/useGetPhotoDetails.hook";
import { PhotoDetailsPageData } from "./types/PhotoDetailsData.type";

export default function PhotoDetailsPage() {
  const photo: PhotoDetailsPageData = useGetPhotoDetails();
  return <PhotoDetails photo={photo} />;
}
