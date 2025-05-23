export type PageProps = {
  params: Promise<{ postSeq: string }>;
};

export type CategoryPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
};

export type TagPageProps = {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string }>;
};

export type SearchPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export type KeywordSearchPageProps = {
  searchParams: Promise<{ keyword: string; page?: string }>;
};
