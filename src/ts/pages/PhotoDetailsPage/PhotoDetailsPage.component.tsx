import { useGetPhotoDetails } from "./hooks/useGetPhotoDetails.hook";
import { PhotoDetailsPageData } from "./types/PhotoDetailsData.type";

export default function PhotoDetailsPage() {
  const photo: PhotoDetailsPageData = useGetPhotoDetails();
  console.log(photo);
  return <div>PhotoDetailsPage</div>;
}
