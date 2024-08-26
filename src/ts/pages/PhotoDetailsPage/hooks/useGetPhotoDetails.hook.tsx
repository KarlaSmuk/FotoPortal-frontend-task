//dummy hook that has mock data for photo details
//we can connect it with backend if we have that endpoint on be
export function useGetPhotoDetails() {
  const mock = {
    gallery: "Stock",
    author: "Ivan Horvat",
    agency: "Smart Code",
    name: "IMAGE 001",
    url: "https://s3-alpha-sig.figma.com/img/8bfa/791e/1f907f8c3e70e6add74c2b057e4c8e48?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nybsMkpbgABNZIbkNSTkh3XuE91AO6OpH-aTCzBN4jy6dRV-1UJtSG3WESjkEOS7QRyTsJusqmxfRsGN-rcn5Gkv0eAyG-xDgC0Rltewe-VoZLM4FF9KWYD6P~bpf6HQKBlIcZPpvRuznWtzGPjko9lYznK76Pi3nn5kKIzWd-p7~5F4-G21CSuS1E4BcYxqFS1EIQKGhmA3FUhXz7dNbdllhWVi-Pj8hvWfrsfHt-iJpJbJgZC8yFdWAHlh-h6yjc-xUV7MPrSjlYHSOSrlPNGjQLgr4yqYa5UI2~veBM6TogQipZjg1zZEsq5-ncgZLV-A6kJHwObGJg~MqL64uA__",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    sizes: [
      {
        size: "LARGE",
        type: "Print",
        width: "2667",
        height: "4000",
        price: "100.00",
      },
      {
        size: "SMALL",
        type: "Web",
        width: "1072",
        height: "1600",
        price: "130.00",
      },
    ],
    keywords: [
      "Nogomet",
      "Italija",
      "Serie A",
      "Genua",
      "Italien",
      "Fussball",
      "Soccer",
    ],
    notes: [
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "It has survived not only five centuries, but also the leap into electronic typesetting.",
    ],
  };

  return mock;
}
