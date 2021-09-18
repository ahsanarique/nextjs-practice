import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {blogId.map((id) => (
          <li key={id}>Blog: {id}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
