export interface PictureInfo {
  id: string;
  title: string;
  picUrl: string;
  category: "cats" | "dogs";
}

export const images: PictureInfo[] = [
  {
    id: "1",
    title: "Gato 1",
    picUrl: "https://placekittens.com/200/200?image=1",
    category: "cats",
  },
  {
    id: "2",
    title: "Gato 2",
    picUrl: "https://placekittens.com/201/201?image=2",
    category: "cats",
  },
  {
    id: "3",
    title: "Gato 3",
    picUrl: "https://placekittens.com/202/202/",
    category: "cats",
  },
  {
    id: "4",
    title: "Gato 4",
    picUrl: "https://placekittens.com/203/203/",
    category: "cats",
  },
  {
    id: "5",
    title: "Perrito 1",
    picUrl: " https://place-puppy.com/puppy/y:200/x:300",
    category: "dogs",
  },
  {
    id: "6",
    title: "Perrito 2",
    picUrl: " https://place-puppy.com/puppy/y:200/x:300",
    category: "dogs",
  },
  {
    id: "7",
    title: "Perrito 3",
    picUrl: " https://place-puppy.com/puppy/y:200/x:300",
    category: "dogs",
  },
  {
    id: "8",
    title: "Perrito 4",
    picUrl: " https://place-puppy.com/puppy/y:200/x:300",
    category: "dogs",
  },
];
