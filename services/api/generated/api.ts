import { api } from "../baseApi";
export const addTagTypes = ["users", "posts"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
        query: () => ({ url: `/users` }),
        providesTags: ["users"],
      }),
      createUser: build.mutation<CreateUserApiResponse, CreateUserApiArg>({
        query: (queryArg) => ({
          url: `/users`,
          method: "POST",
          body: queryArg.user,
        }),
        invalidatesTags: ["users"],
      }),
      getUser: build.query<GetUserApiResponse, GetUserApiArg>({
        query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
        providesTags: ["users"],
      }),
      updateUser: build.mutation<UpdateUserApiResponse, UpdateUserApiArg>({
        query: (queryArg) => ({
          url: `/users/${queryArg.id}`,
          method: "PUT",
          body: queryArg.user,
        }),
        invalidatesTags: ["users"],
      }),
      getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
        query: () => ({ url: `/posts` }),
        providesTags: ["posts"],
      }),
      createPost: build.mutation<CreatePostApiResponse, CreatePostApiArg>({
        query: (queryArg) => ({
          url: `/posts`,
          method: "POST",
          body: queryArg.post,
        }),
        invalidatesTags: ["posts"],
      }),
      getPost: build.query<GetPostApiResponse, GetPostApiArg>({
        query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
        providesTags: ["posts"],
      }),
      updatePost: build.mutation<UpdatePostApiResponse, UpdatePostApiArg>({
        query: (queryArg) => ({
          url: `/posts/${queryArg.id}`,
          method: "PUT",
          body: queryArg.post,
        }),
        invalidatesTags: ["posts"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as jsonPlaceholderApi };
export type GetUsersApiResponse =
  /** status 200 Successful response */ UsersList;
export type GetUsersApiArg = void;
export type CreateUserApiResponse = /** status 200 Successful Operation */ User;
export type CreateUserApiArg = {
  /** Create a new user */
  user: User;
};
export type GetUserApiResponse = /** status 200 Successful response */ User;
export type GetUserApiArg = {
  /** The user id */
  id: number;
};
export type UpdateUserApiResponse = /** status 200 Successful Operation */ User;
export type UpdateUserApiArg = {
  /** The user id. */
  id: number;
  /** Update an existing user */
  user: User;
};
export type GetPostsApiResponse =
  /** status 200 Successful response */ PostsList;
export type GetPostsApiArg = void;
export type CreatePostApiResponse = /** status 200 Successful Operation */ Post;
export type CreatePostApiArg = {
  /** Create a new post */
  post: Post;
};
export type GetPostApiResponse = /** status 200 Successful response */ Post;
export type GetPostApiArg = {
  /** The post id */
  id: number;
};
export type UpdatePostApiResponse = /** status 200 Successful Operation */ Post;
export type UpdatePostApiArg = {
  /** The user id. */
  id: number;
  /** Update an existing post */
  post: Post;
};
export type User = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
};
export type UsersList = User[];
export type Post = {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
};
export type PostsList = Post[];
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useGetPostsQuery,
  useCreatePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} = injectedRtkApi;
