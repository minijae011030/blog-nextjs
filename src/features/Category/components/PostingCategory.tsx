import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useFormContext } from "react-hook-form";

interface PostingCategoryProps {
  categoryList: { categoryId: number; name: string; postCount: number }[];
}
const PostingCategory = ({ categoryList }: PostingCategoryProps) => {
  const methods = useFormContext();

  return (
    <div>
      <div className="w-[200px]">
        <Input
          name="category"
          placeholder="카테고리를 입력해주세요"
          className="ml-[-15px] border-none outline-none placeholder:text-gray-400"
        />
        <div className="border-b" />
      </div>
      <div className="my-3 flex flex-wrap gap-x-1">
        {Array.isArray(categoryList) &&
          categoryList.map((category, index) => (
            <Button.Default
              key={index}
              type="button"
              className="mb-2 cursor-pointer hover:bg-gray-100"
              onClick={() => methods.setValue("category", category.name)}
            >
              {category.name}
            </Button.Default>
          ))}
      </div>
    </div>
  );
};

export default PostingCategory;
