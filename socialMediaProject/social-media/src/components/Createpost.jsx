import { Form, redirect } from "react-router-dom";

const Createpost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username :</label>
        <input name="userId"
          type="text" className="form-control" id="username" placeholder="Enter your username here" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title :</label>
        <input name="title"
          type="text" className="form-control" id="title" placeholder="How are you feeling today" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea name="body"
          className="form-control" id="body" rows="4" placeholder="tell us more about yourself"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label"># Hastags :</label>
        <input name="tags"
          type="text" className="form-control" id="tags" placeholder="Enter your Hastags here" />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Reaction : </label>
        <input name="reactions"
          type="text" className="form-control" id="reaction" placeholder="How many people react this post" />
      </div>
      <button type="Submit" className="btn btn-primary">Post</button>
    </Form>
  )
}

export async function creatPostaction(data) {
  const formData = await data.request.formData();
  const postdata = Object.fromEntries(formData);
  postdata.tags = postdata.tags.split(" ");

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postdata)
  })
    .then((res) => res.json())
    .then((post) => console.log(post))

  return redirect("/");

};

export default Createpost;