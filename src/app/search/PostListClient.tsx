"use client";

import Typography from "@/components/atoms/Typography";
import Pagination from "@/components/molecules/Pagination";
import PostItem from "@/features/PostList/components/PostItem";
import { PostInterface } from "@/features/PostList/types/PostList.type";
import { useRouter } from "next/navigation";

interface Props {
  keyword: string;
  posts: PostInterface[];
  totalPages: number;
  currentPage: number;
}

export default function PostListClient({
  keyword,
  posts,
  totalPages,
  currentPage,
}: Props) {
  const router = useRouter();

  const handlePageChange = ({ selected }: { selected: number }) => {
    router.push(`/search?keyword=${keyword}&page=${selected + 1}`);
  };

  return (
    <div className="m-auto flex w-[90%] max-w-screen-md flex-col justify-center">
      <Typography.SubTitle1 className="ml-[30px] text-gray-500">
        {keyword} 검색결과
      </Typography.SubTitle1>
      {posts.map((post) => (
        <PostItem key={post.postSeq} post={post} />
      ))}
      <Pagination
        postCount={totalPages}
        perPage={5}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
