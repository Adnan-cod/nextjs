"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
export const sayHello = async () => {
  "use server";
  console.log("hello");
};
export const addPost = async (formData) => {
  console.log(formData);
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
