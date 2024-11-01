import Filtering from "@/src/components/modules/found-items/Filtering";
import CardPage from "@/src/components/Ui/Card/CardPage";
import Container from "@/src/components/Ui/Container";

import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";

export default async function FoundItems({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = new URLSearchParams(searchParams);

  const { data } = await axiosInstance.get(`/post`, {
    params: {
      searchTerm: params.get("query"),
      category: params.get("category"),
    },
  });

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <CardPage post={post} />)}
      </div>
    </Container>
  );
}