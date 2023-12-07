import { Post, UpdatedPost } from "@/model/post";
import axios from "axios";

export const getBoardPosts = async ({ pageParam }: { pageParam: number }) => {
  const api = axios
    .get(process.env.NEXT_PUBLIC_BASE_URL + `board/${pageParam}`)
    .then(async (data) => {
      // const data: Post[] = await res.json();
      return { pages: data.data, pageParams: pageParam + 1 };
    })
    .catch((err) => {
      console.log(err);
      alert("게시글을 불러오는데 실패했습니다.");
      return { pages: [], pageParams: undefined };
    });
  return api;
};

export const uploadBoardPost = async ({
  imageUrl,
  title,
  content,
}: UpdatedPost) => {
  const formData = new FormData();
  formData.append("imgFile", imageUrl);
  formData.append("title", title);
  formData.append("content", content);

  const api = await axios
    .post(process.env.NEXT_PUBLIC_BASE_URL + "board", formData)
    .then(() => {
      return;
    })
    .catch((err) => {
      console.log(err);
      alert("게시글을 업로드하는데 실패했습니다.");
      return;
    });
  return api;
};
